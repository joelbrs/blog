---
sidebar_position: 1

id: introduction
tags:
  - back-end
  - microservices
  - system design
  - studies
  - introduction
---

# Introdução

A Arquitetura de _Microsserviços_ vem ganhando bastante destaque nos últimos anos e vem sendo um dos principais requisitos para cargos como Desenvolvedores ou Engenheiros de Software. Por isso, vem sendo necessário que os programadores não só tenham um certo nível de conhecimento sobre o assunto, como o _dominem_.

### Mas, o que seriam Microsserviços?

Para entender bem sobre _Microsserviços_ (e de uma maneira mais simples), é importante que conheçamos os conceitos de uma outra arquitetura amplamente utilizada hoje em dia, mesmo que hajam autores e programadores que a julguem "defasada" (o que passa longe de ser verdade). A arquitetura em questão é a **Monolítica** (ou, conhecida apenas como Monolitos).


### Uma breve introdução sobre Monolitos

Uma _Arquitetura Monolítica_ é relativamente **simples** de compreender, tendo como principais características:

    - **Único Processo:** Uma aplicação Monolítica geralmente é composta pelo Front-end e Back-end acoplados na mesma estrutura de código.

    - **Único Deploy:** Como consequência direta do tópico anterior, exatamente por ter apenas um único processo, uma aplicação monolítica tem uma única esteira de CI/CD e, portanto, é feito um único deploy para **TODO** o sistema subir para a produção.

    - **Banco de Dados único para todo o sistema:** Outra **característica fundamental** da *arquitetura monolítica* é a utilização de um *único* banco de dados para toda a aplicação.

    - **Comunicação Síncrona:** Como toda a aplicação está rodando em um único processo, a comunicação entre seus diferentes domínios tende a ser *síncrona*.

    - **Muitas responsabilidades:** Para finalizar, uma arquitetura monolítica é repleta de responsabilidades. Um exemplo disso, é uma Arquitetura Monolítica de E-commerce, o Monolito terá as responsabilidades de gerir usuários, categorias, produtos, pagamento, etc.

Portanto, percebemos que, em uma arquitetura monolítica, o sistema tem um **forte** acoplamento e realiza seu gerenciamento em um **único processo**. Essas características são interessantes, porque, logo podemos chegar a *aspectos **positivos** desta arquitetura, bem como **negativos***, porém isso será tópico para outra seção mais aprofundada sobre _Monolitos_.


### Certo, mas onde os Microsserviços entram nessa história?

Então, como pudemos concluir na análise sobre as principais características de uma Arquitetura Monolítica, esta é caracterizada por um **forte** *acoplamento* entre os diferentes domínios da aplicação e, em que, todos estes rodam e compartilham de um **único processo**.

Os *Microsserviços*, por sua vez, chegaram para **"separar"** um pouco mais essa Arquitetura Monolítica (que já vem sendo utilizada desde os primórdios do Desenvolvimento Web), identificando os diferentes domínios que a compõem *(para quem é adepto ao DDD - Domain Driven Design, isso se assemelha ao conceito de **Bounded Contexts**)* e dividindo-a em diferentes serviços. Cada serviço, portanto, seria **independente**, possuiria sua própria esteira de CI/CD, seu próprio Banco de Dados e seria responsável apenas pelo que seu **domínio** propõe.

Portanto, como principais características de uma Arquitetura de Microsserviços, temos:

    - **Vários Processos:** Como há a identificação e separação dos diferentes domínios em serviços independentes, cada serviço irá rodar em um (ou mais) processo (s) *separado (s) dos demais*.

    - **Diferentes Deploys:** Cada serviço terá sua própria esteira de CI/CD.

    - **Banco de Dados por Serviço**: Cada serviço terá seu próprio Banco de Dados, onde será o responsável por gerenciar os dados do seu domínio. Caso precise de informações que estejam presentes em domínios diferentes, terá que realizar **comunicações** com os serviços desses domínios e solicitar esses dados, sem acessar outros Banco de Dados diretamente.

    - **Comunicação Síncrona e Assíncrona:** No processo de Comunicação entre Microsserviços, há a possibilidade dessa comunicação ser síncrona ou assíncrona (a depender do caso de uso em questão), e, portanto, pode surgir a necessidade de utilizar ferramentas como RabbitMQ, Amazon SQS/SNS ou Kafka.

    - **Responsabilidade Única:** Para quem já está familiarizado com os princípios SOLID, esse conceito é relativamente simples de entender. Cada serviço terá uma única responsabilidade com base no seu domínio e, novamente, pode surgir a necessidade de comunicação com outros microsserviços.

Então, pudemos perceber o quanto a Arquitetura Monolítica foi (e ainda é) fundamental para o surgimento e a "expansão" da Arquitetura de Microsserviços nos últimos anos. São conceitos completamente diferentes, mas que se complementam. Nas próximas seções, vamos nos aprofundar nesses conceitos e compará-los com mais aprofundamento teórico. Além disso, vamos identificar qual opção será a melhor para o seu projeto, os prós e contras de cada um, entre outros tópicos.

