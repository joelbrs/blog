---
slug: idempotencia-parte-1
title: 'Idempotência: Melhorando a Resiliência de Seu Sistema - Parte I'
authors:
  name: Joel da Silva Pereira Filho
  title: Backend Developer
  url: https://github.com/joelbrs
  image_url: https://github.com/joelbrs.png
tags: [programming, idempotency]
---

À medida que seu software cresce, é crucial aplicar dois conceitos fundamentais no desenvolvimento: _Resiliência_ e _Idempotência_.

Esses conceitos trabalham juntos em harmonia. Hoje, vou apresentar uma breve introdução a esses conceitos e compartilhar como os apliquei de forma prática em meu projeto de simulação bancária, onde implementei a criação de transações entre diferentes contas de forma idempotente.

Confira o projeto no meu GitHub e no repositório [bank.com.br](https://github.com/joelbrs/bank.com.br).

## Resiliência
Resiliência é a capacidade do seu software de falhar e lidar bem com essas falhas. Para desenvolver um software resiliente, a equipe deve antecipar possíveis falhas e planejar como resolvê-las. Todos os sistemas estão sujeitos a falhas, mas o que os diferencia é a capacidade de tratar e resolver esses problemas de maneira eficiente. =)

## Idempotência
Idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem alterar o resultado após a aplicação inicial. Em outras palavras, uma operação idempotente pode ser repetida inúmeras vezes e o estado do sistema permanecerá o mesmo.

Por exemplo, no contexto da aplicação desenvolvida, a idempotência foi aplicada no seguinte cenário: Digamos que uma conta A está fazendo uma transação de R$10,00 para a conta B. Porém, por uma inconsistência nos servidores, essa transação foi realizada duas vezes, fazendo com que o valor enviado para a conta B dobrasse para R$20,00. Isso representa um problema significativo, especialmente em transações maiores. A idempotência pode ser aplicada para prevenir essas duplicações.

## Mas como aplicar esses conceitos, na prática?
Recentemente, trabalhei em um projeto pessoal, o Bank, onde a proposta foi simular o dia-a-dia de um banco, realizando transações entre diferentes contas. As tecnologias utilizadas no projeto foram: React, Relay, GraphQL, KoaJS e MongoDB.

Primeiramente, criei o model utilizando o mongoose, referente às contas que seriam criadas no sistema, contendo as seguintes informações:

- Identificador Único da Conta
- Número da Conta
- O CPF/CNPJ (taxId) do usuário

Em seguida, foi criado o model das transações:

- Identificador Único da Transação
- O identificador da conta do remetente
- O identificador da conta do destinatário
- O valor a ser transferido
- Chave de Impotência
- Descrição da Transação (Opcional)

Podemos perceber, no model de Transação, que há um campo chamado “Chave de Idempotência”. A criação e utilização desse campo no nosso banco de dados representa a estratégia de idempotência utilizada no desenvolvimento do sistema. Existem algumas estratégias para isso, como: Idempotency Key (padrão utilizado), Get Or Create, Histórico de Chamadas, dentre outros.

De forma geral, será gerada uma Chave de Idempotência (única) para verificar se uma transação já foi realizada anteriormente. A Chave de Idempotência deve ser única para o contexto específico de uma transação. Em uma transação, temos informações que definem seu contexto, como a conta do remetente, a conta do destinatário e o valor. Isso significa que a chave de idempotência deve ser única para uma transação que envolva essas informações. _Para uma discussão detalhada sobre o assunto, acesse a seguinte [issue](https://github.com/joelbrs/bank.com.br/issues/12) do repositório do projeto, criada pelo [@caiocampoos](https://github.com/caiocampoos)_

Para implementar isso, defini um índice composto no meu Schema, entre essas informações:

``` ts
TransactionSchema.index(
  { senderAccountId: 1, idempotentKey: 1, receiverAccountId: 1 },
  { unique: true }
);
```

Para receber essa Chave de Idempotência, optei por recebê-la no header "idempotentkey". Essa escolha será discutida mais detalhadamente em uma publicação futura.

Agora, na criação da Transação, fiz a seguinte verificação:

``` ts
const existingTransaction = await TransactionModel.findOne({
   idempotentKey,
   senderAccountId: senderAccount?._id,
   receiverAccountId: receiverAccount?._id,
});

if (existingTransaction) {
   return {
     transactionId: existingTransaction?._id,
   };
}
```

Observe que retorno o identificador da transação criada anteriormente com as mesmas informações, mas também poderia lançar uma exceção. Tudo depende do contexto da aplicação e de qual abordagem é a melhor para você.

Para criar a chave de idempotência no front-end da aplicação, escrevi o seguinte código:

``` ts
import { v7 as uuid } from "uuid";

const createIdempotencyKey = () => {
  const idempotencyKey = uuid();
  sessionStorage.setItem("idempotent-key", idempotencyKey);
};
```

Armazenei a Chave de Idempotência no SessionStorage do navegador quando o usuário decide criar uma transação e, ao fazer a requisição, pego esse valor e envio no cabeçalho para o back-end. Dessa forma, garanto que essa Chave de Idempotência seja utilizada apenas naquele contexto, visto que, diferentemente do LocalStorage, esse dado só estará disponível para aquela sessão enquanto ela existir (ou até a informação ser sobrescrita).

Porém, pesquisando um pouco mais e refletindo melhor sobre essas ideias, conclui que essa abordagem pode ter certas limitações, que trataremos no próximo post.

**Fontes**
- https://developer.mozilla.org/en-US/docs/Glossary/Idempotent
- https://developers.openpix.com.br/docs/concepts/idempotence
- https://www.gooddata.com/blog/multi-tenant-architecture/
- https://github.com/joelbrs/bank.com.br
