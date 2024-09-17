---
slug: idempotencia-parte-2
title: 'Idempotência: Melhorando a Resiliência de Seu Sistema - Parte II'
authors:
  name: Joel da Silva Pereira Filho
  title: Backend Developer
  url: https://github.com/joelbrs
  image_url: https://github.com/joelbrs.png
tags: [programming, idempotency]
---

No [post anterior](https://joelbrs.github.io/blog/posts/idempotencia-parte-1), discutimos os conceitos básicos de Resiliência e Idempotência. Além disso, demonstrei como apliquei esses conceitos de forma prática em um projeto pessoal.

Agora, explorarei algumas limitações do modelo inicialmente proposto e apresentarei uma alternativa viável para implementar idempotência, que é mais performática.

## Quais são as limitações de gerar a Chave de Idempotência no Front-end?

No modelo proposto anteriormente, a chave de idempotência é gerada pelo front-end, armazenada no SessionStorage do navegador e posteriormente enviada ao back-end. Embora essa abordagem funcione, não é a mais adequada para resolver o problema.

Primeiramente, a geração da chave pelo front-end permite que o usuário do sistema a manipule, já que é facilmente acessível ao abrir a aba de armazenamento do navegador.

Em segundo lugar, e estritamente relacionado ao primeiro ponto, como o front-end está mais suscetível a manipulações e ataques cibernéticos. Por padrão, regras de negócio não devem ser estabelecidas no front-end. Caso haja necessidade, elas devem ser reforçadas no back-end.

## Qual seria a solução?

A primeira solução, mais simples, seria criar um endpoint no back-end para gerar a chave de idempotência e armazená-la em memória. Nesse caso, poderíamos utilizar a abordagem de gerar um UUID como chave de idempotência.

A segunda, mais robusta, é utilizar uma camada de cache para armazenar a chave de idempotência por um tempo pré-estabelecido. Nesse caso, a chave de idempotência poderia ser criada a partir de um hash das informações da conta do remetente, do destinatário, do valor e da descrição (se houver). Essa chave seria armazenada em um Redis, por exemplo, por 5 minutos (ou qualquer outro período de tempo, dependendo da implementação). Caso a requisição se repita devido a alguma instabilidade, a chave será buscada no cache e a transação será encontrada.

> _Na segunda proposta, não optei por gerar um UUID a cada transação. Isso se deve ao fato de que, se um UUID for gerado a cada requisição para criar uma transação, mesmo que uma requisição seja duplicada, ainda assim seriam duas requisições diferentes, resultando em UUIDs distintos. Dessa forma, nossa chave de idempotência não seria verdadeiramente idempotente._

## Por que essa é uma melhor solução?

Primeiro, porque eliminamos a necessidade de um campo correspondente à chave de idempotência no banco de dados, evitando sobrecarregar o banco de dados principal com consultas para verificar se a transação já existe. A consulta ao Redis é muito mais rápida, performática e menos custosa.

Segundo, porque retiramos qualquer regra de negócio do front-end, evitando assim que nosso sistema esteja mais vulnerável a ataques e manipulações indesejadas dos dados.

## Como implementar essa solução?

Primeiro, vamos instalar o Redis no nosso projeto NodeJS:

``` ts
pnpm add ioredis
```

Vamos criar uma instância do Redis:
``` ts
import Redis from 'ioredis';

const redis = new Redis();
```

Agora, vamos criar o hash que será nossa chave de idempotência:

``` ts
import crypto from 'node:crypto';

async createTransaction(data, ctx) {
  ...
  const { value, description } = data;

  const dataToBeHashed = `${senderAccount._id}-${receiverAccount?._id}-${value}-${description}`

  const idempotentKey = 
  crypto.createHash('sha256').update(dataToBeHashed).digest('hex')

  ...
}

``` 


Em seguida, definimos essa chave de idempotência no cache e verificamos sua existência:

``` ts
async createTransaction(data, ctx) {
   ...

   const existingTransaction = await redis.set(idempotentKey, 'transaction', 'EX', 60 * 5, 'GET')

   if (existingTransaction) {
     return false
   }
   ...
}
```

Esta foi uma demonstração simples de como essa abordagem pode ser implementada com NodeJS, independentemente do framework utilizado, seja Express, NestJS, Koa ou Fastify.

Essa implementação ainda não está disponível no repositório do projeto, mas pretendo trabalhar nisso nos próximos dias.

Esta série de posts foi criada para compartilhar minha jornada no desenvolvimento deste projeto e as decisões que tomei com base em meus estudos e reflexões.

Estou aberto a feedbacks e novas propostas. Pretendo implementar novas features futuramente, então estou à disposição para conversar mais sobre isso no meu [LinkedIn](https://linkedin.com/in/joelbrs).