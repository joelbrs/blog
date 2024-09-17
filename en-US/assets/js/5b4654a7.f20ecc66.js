"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5039],{653:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"guia-introducao-docker","metadata":{"permalink":"/blog/en-US/blog/guia-introducao-docker","source":"@site/blog/guia-introducao-docker.md","title":"Guia de Introdu\xe7\xe3o ao Docker","description":"Quando falamos de Docker, uma das primeiras coisas que nos vem \xe0 mente s\xe3o containers. Basicamente, quase tudo em Docker se resume a containers, ent\xe3o, \xe9 super importante que voc\xea tenha esse conceito bem s\xf3lido na sua mente e n\xe3o s\xf3 isso, mas tamb\xe9m como funcionam.","date":"2024-09-17T12:35:51.000Z","tags":[{"inline":true,"label":"docker","permalink":"/blog/en-US/blog/tags/docker"},{"inline":true,"label":"devops","permalink":"/blog/en-US/blog/tags/devops"},{"inline":true,"label":"beginners","permalink":"/blog/en-US/blog/tags/beginners"}],"readingTime":3.975,"hasTruncateMarker":false,"authors":[{"name":"Joel da Silva Pereira Filho","title":"Backend Developer","url":"https://github.com/joelbrs","image_url":"https://github.com/joelbrs.png","imageURL":"https://github.com/joelbrs.png"}],"frontMatter":{"slug":"guia-introducao-docker","title":"Guia de Introdu\xe7\xe3o ao Docker","authors":{"name":"Joel da Silva Pereira Filho","title":"Backend Developer","url":"https://github.com/joelbrs","image_url":"https://github.com/joelbrs.png","imageURL":"https://github.com/joelbrs.png"},"tags":["docker","devops","beginners"]},"unlisted":false,"lastUpdatedAt":1726576786000,"nextItem":{"title":"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I","permalink":"/blog/en-US/blog/idempotencia-parte-1"}},"content":"Quando falamos de _Docker_, uma das primeiras coisas que nos vem \xe0 mente s\xe3o _containers_. Basicamente, quase tudo em Docker se resume a containers, ent\xe3o, \xe9 super importante que voc\xea tenha esse conceito bem s\xf3lido na sua mente e n\xe3o s\xf3 isso, mas tamb\xe9m como funcionam.\\r\\n\\r\\n---\\r\\n\\r\\n## Como funcionam os containers?\\r\\n\\r\\nPara explicar o conceito de containers, podemos come\xe7ar pelo sistema operacional (SO) - tendo como base para a explica\xe7\xe3o o Linux, especificamente - ser composto de processos e subprocessos. Para entender melhor esse conceito, precisamos entender os tr\xeas principais pilares que os sustentam: _Namespaces_, _CGroups _e _Overlay File System_ (OFS) que falaremos a seguir.\\r\\n\\r\\n### Namespaces:\\r\\nA partir desses processos, surgiu os chamados _Namespaces_, que, basicamente, atuam no **isolamento** de cada processo. Nesse caso, h\xe1 uma hierarquia entre os processos-pai e os processos-filhos, onde estes \xfaltimos s\xe3o altamente dependentes dos primeiros e, caso aconte\xe7a algo aos processos principais, todo o meu sistema operacional vai \xe0 baixo. Tendo isso em mente, os Namespaces isolam cada processo do SO, permitindo que cada um rode de forma independente. Em outras palavras, um container emula um SO com processos rodando em isolamento e executando tarefas diferentes. Containers n\xe3o executam um SO completo, mas apenas os elementos espec\xedficos necess\xe1rios, incluindo o kernel.\\r\\n\\r\\n### CGroups:\\r\\n\\r\\nPara entender o funcionamento do **CGroups** e para qu\xea eles servem, pensemos na seguinte ocorr\xeancia: Temos alguns containers rodando (sabendo que containers s\xe3o, basicamente, processos isolados que possuem subprocessos) e, em um deles, temos um enorme vazamento (leak) de mem\xf3ria, o que consequentemente acaba afetando os outros processos fora desse _Namespace_. \xc9 a\xed que entram os CGroups. Eles surgiram para controlar e isolar os recursos de **cada** Namespace, para que esses recursos sejam bem distribu\xeddos para cada um, de acordo com suas necessidades e, n\xe3o s\xf3 isso, para que os seus recursos n\xe3o afetem o funcionamento de outros processos fora desse Namespace.\\r\\n\\r\\n\\r\\n### File System \u2192 Overlay File System (OFS)\\r\\n\\r\\nNovamente, vamos contextualizar o funcionamento do **Overlay File System** para uma melhor compreens\xe3o: Digamos que temos um container em que estamos rodando uma aplica\xe7\xe3o de, aproximadamente, 95mb (Megabytes), por\xe9m, para que essa aplica\xe7\xe3o funcione corretamente, \xe9 necess\xe1rio a utiliza\xe7\xe3o de duas depend\xeancias diferentes. \\r\\nA partir disso, podemos citar o seguinte poss\xedvel acontecimento: surgiu a necessidade de mudar essa aplica\xe7\xe3o e, para isso, teremos que criar outra imagem a partir da que temos atualmente (falaremos sobre imagens no pr\xf3ximo t\xf3pico). Ent\xe3o, o Overlay File System (OFS) ser\xe1 usado para criar imagens desse novo aplicativo execut\xe1vel. Isso \xe9 poss\xedvel porque ele pode gerar uma nova imagem a partir de uma existente, apenas alterando as partes que precisam ser atualizadas, sem a necessidade de reinstalar as depend\xeancias obrigat\xf3rias.\\r\\n\\r\\nAgora que conhecemos um pouco sobre o funcionamento dos containers e de seus 3 pilares, podemos adentrar um pouco mais em outro t\xf3picos importantes quando o assunto \xe9 Docker, bem como o conceito de _Imagens_ & o t\xe3o importante _DockerFile_.\\r\\n\\r\\n---\\r\\n\\r\\n### Imagens\\r\\n     \\r\\nDe forma bem objetiva, podemos definir as imagens como um \u201cpacote\u201d execut\xe1vel (ou um conjunto de depend\xeancias encadeadas) que possui todos os requisitos/depend\xeancias necess\xe1rios(as) para rodar um aplicativo, incluindo, um arquivo de configura\xe7\xe3o, vari\xe1veis de ambiente, bibliotecas e assim por diante.\\r\\n\\r\\n---\\r\\n\\r\\n### DockerFile\\r\\n\\r\\nPara a **cria\xe7\xe3o** de imagens, utilizamos o **DockerFile**. Basicamente, ele \xe9 um arquivo _declarativo_ que cita instru\xe7\xf5es ao container Docker de como ser\xe1 criada e \u201cbuildada\u201d a referente imagem que queremos criar.\\r\\nDe maneira usual, (quase) sempre criamos uma imagem a partir de outra imagem j\xe1 existente, com suas devidas depend\xeancias pr\xe9-definidas e configuradas e vamos moldando-a de acordo com nossa necessidade.\\r\\n\\r\\nAbaixo segue um exemplo de modelo de uma implementa\xe7\xe3o do DockerFile, Vamos explicar linha a linha o que cada uma faz e sua respectiva fun\xe7\xe3o:\\r\\n\\r\\n     \\r\\n\\r\\n```\\r\\nFROM node:16.18.0-alpine as base\\r\\nRUN npm install\\r\\n\\r\\nEXPOSE 3000\\r\\n```\\r\\n\\r\\n\\r\\n - Essa primeira linha (logo abaixo) \xe9 de extrema import\xe2ncia, pois referencia ao DockerFile a imagem base utilizaremos para a cria\xe7\xe3o da nossa.\\r\\n\\r\\n     \\r\\n\\r\\n```\\r\\nFROM node:16.18.0-alpine as base\\r\\n```\\r\\n\\r\\n \\r\\n - Aqui, dizemos ao DockerFile que ser\xe1 necess\xe1rio que ele rode esse comando determinado, lembrando: voc\xea pode determinar que sejam executados mais de um comando, dessa forma:\\r\\n\\r\\n```\\r\\nRUN npm install\\r\\nRUN npm run build\\r\\n```\\r\\n\\r\\n \\r\\n- E, por \xfaltimo (n\xe3o \xe9 o \xfaltimo comando que podemos determinar ao DockerFile e, sim o \xfaltimo de minha demonstra\xe7\xe3o), podemos exp\xf4r portas em que essas imagens estar\xe3o rodando para que possamos acess\xe1-las quando quisermos:\\r\\n\\r\\n     \\r\\n\\r\\n```\\r\\nEXPOSE 3000\\r\\n```\\r\\n\\r\\nAcredito que agora voc\xea j\xe1 possui conhecimento suficiente para aprofundar-se nos estudos em Docker e, caso precise de alguma ajuda com algum conteito ou recomenda\xe7\xe3o de cursos sobre o assunto, me manda solicita\xe7\xe3o no [meu LinkedIn](https://www.linkedin.com/in/joelbrs), que ficarei feliz em ajud\xe1-lo. Al\xe9m disso, espero que esse post tenha sido de muita ajuda e estarei sempre disposto a receber feedbacks!"},{"id":"idempotencia-parte-1","metadata":{"permalink":"/blog/en-US/blog/idempotencia-parte-1","source":"@site/blog/idempotencia-parte-1.md","title":"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I","description":"\xc0 medida que seu software cresce, \xe9 crucial aplicar dois conceitos fundamentais no desenvolvimento: Resili\xeancia e Idempot\xeancia.","date":"2024-09-17T12:39:46.000Z","tags":[{"inline":true,"label":"programming","permalink":"/blog/en-US/blog/tags/programming"},{"inline":true,"label":"idempotency","permalink":"/blog/en-US/blog/tags/idempotency"}],"readingTime":3.78,"hasTruncateMarker":false,"authors":[{"name":"Joel da Silva Pereira Filho","title":"Backend Developer","url":"https://github.com/joelbrs","image_url":"https://github.com/joelbrs.png","imageURL":"https://github.com/joelbrs.png"}],"frontMatter":{"slug":"idempotencia-parte-1","title":"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I","authors":{"name":"Joel da Silva Pereira Filho","title":"Backend Developer","url":"https://github.com/joelbrs","image_url":"https://github.com/joelbrs.png","imageURL":"https://github.com/joelbrs.png"},"tags":["programming","idempotency"]},"unlisted":false,"lastUpdatedAt":1726576786000,"prevItem":{"title":"Guia de Introdu\xe7\xe3o ao Docker","permalink":"/blog/en-US/blog/guia-introducao-docker"},"nextItem":{"title":"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte II","permalink":"/blog/en-US/blog/idempotencia-parte-2"}},"content":"\xc0 medida que seu software cresce, \xe9 crucial aplicar dois conceitos fundamentais no desenvolvimento: _Resili\xeancia_ e _Idempot\xeancia_.\\r\\n\\r\\nEsses conceitos trabalham juntos em harmonia. Hoje, vou apresentar uma breve introdu\xe7\xe3o a esses conceitos e compartilhar como os apliquei de forma pr\xe1tica em meu projeto de simula\xe7\xe3o banc\xe1ria, onde implementei a cria\xe7\xe3o de transa\xe7\xf5es entre diferentes contas de forma idempotente.\\r\\n\\r\\nConfira o projeto no meu GitHub e no reposit\xf3rio [bank.com.br](https://github.com/joelbrs/bank.com.br).\\r\\n\\r\\n## Resili\xeancia\\r\\nResili\xeancia \xe9 a capacidade do seu software de falhar e lidar bem com essas falhas. Para desenvolver um software resiliente, a equipe deve antecipar poss\xedveis falhas e planejar como resolv\xea-las. Todos os sistemas est\xe3o sujeitos a falhas, mas o que os diferencia \xe9 a capacidade de tratar e resolver esses problemas de maneira eficiente. =)\\r\\n\\r\\n## Idempot\xeancia\\r\\nIdempot\xeancia \xe9 a propriedade que algumas opera\xe7\xf5es t\xeam de poderem ser aplicadas v\xe1rias vezes sem alterar o resultado ap\xf3s a aplica\xe7\xe3o inicial. Em outras palavras, uma opera\xe7\xe3o idempotente pode ser repetida in\xfameras vezes e o estado do sistema permanecer\xe1 o mesmo.\\r\\n\\r\\nPor exemplo, no contexto da aplica\xe7\xe3o desenvolvida, a idempot\xeancia foi aplicada no seguinte cen\xe1rio: Digamos que uma conta A est\xe1 fazendo uma transa\xe7\xe3o de R$10,00 para a conta B. Por\xe9m, por uma inconsist\xeancia nos servidores, essa transa\xe7\xe3o foi realizada duas vezes, fazendo com que o valor enviado para a conta B dobrasse para R$20,00. Isso representa um problema significativo, especialmente em transa\xe7\xf5es maiores. A idempot\xeancia pode ser aplicada para prevenir essas duplica\xe7\xf5es.\\r\\n\\r\\n## Mas como aplicar esses conceitos, na pr\xe1tica?\\r\\nRecentemente, trabalhei em um projeto pessoal, o Bank, onde a proposta foi simular o dia-a-dia de um banco, realizando transa\xe7\xf5es entre diferentes contas. As tecnologias utilizadas no projeto foram: React, Relay, GraphQL, KoaJS e MongoDB.\\r\\n\\r\\nPrimeiramente, criei o model utilizando o mongoose, referente \xe0s contas que seriam criadas no sistema, contendo as seguintes informa\xe7\xf5es:\\r\\n\\r\\n- Identificador \xdanico da Conta\\r\\n- N\xfamero da Conta\\r\\n- O CPF/CNPJ (taxId) do usu\xe1rio\\r\\n\\r\\nEm seguida, foi criado o model das transa\xe7\xf5es:\\r\\n\\r\\n- Identificador \xdanico da Transa\xe7\xe3o\\r\\n- O identificador da conta do remetente\\r\\n- O identificador da conta do destinat\xe1rio\\r\\n- O valor a ser transferido\\r\\n- Chave de Impot\xeancia\\r\\n- Descri\xe7\xe3o da Transa\xe7\xe3o (Opcional)\\r\\n\\r\\nPodemos perceber, no model de Transa\xe7\xe3o, que h\xe1 um campo chamado \u201cChave de Idempot\xeancia\u201d. A cria\xe7\xe3o e utiliza\xe7\xe3o desse campo no nosso banco de dados representa a estrat\xe9gia de idempot\xeancia utilizada no desenvolvimento do sistema. Existem algumas estrat\xe9gias para isso, como: Idempotency Key (padr\xe3o utilizado), Get Or Create, Hist\xf3rico de Chamadas, dentre outros.\\r\\n\\r\\nDe forma geral, ser\xe1 gerada uma Chave de Idempot\xeancia (\xfanica) para verificar se uma transa\xe7\xe3o j\xe1 foi realizada anteriormente. A Chave de Idempot\xeancia deve ser \xfanica para o contexto espec\xedfico de uma transa\xe7\xe3o. Em uma transa\xe7\xe3o, temos informa\xe7\xf5es que definem seu contexto, como a conta do remetente, a conta do destinat\xe1rio e o valor. Isso significa que a chave de idempot\xeancia deve ser \xfanica para uma transa\xe7\xe3o que envolva essas informa\xe7\xf5es. _Para uma discuss\xe3o detalhada sobre o assunto, acesse a seguinte [issue](https://github.com/joelbrs/bank.com.br/issues/12) do reposit\xf3rio do projeto, criada pelo [@caiocampoos](https://github.com/caiocampoos)_\\r\\n\\r\\nPara implementar isso, defini um \xedndice composto no meu Schema, entre essas informa\xe7\xf5es:\\r\\n\\r\\n``` ts\\r\\nTransactionSchema.index(\\r\\n  { senderAccountId: 1, idempotentKey: 1, receiverAccountId: 1 },\\r\\n  { unique: true }\\r\\n);\\r\\n```\\r\\n\\r\\nPara receber essa Chave de Idempot\xeancia, optei por receb\xea-la no header \\"idempotentkey\\". Essa escolha ser\xe1 discutida mais detalhadamente em uma publica\xe7\xe3o futura.\\r\\n\\r\\nAgora, na cria\xe7\xe3o da Transa\xe7\xe3o, fiz a seguinte verifica\xe7\xe3o:\\r\\n\\r\\n``` ts\\r\\nconst existingTransaction = await TransactionModel.findOne({\\r\\n   idempotentKey,\\r\\n   senderAccountId: senderAccount?._id,\\r\\n   receiverAccountId: receiverAccount?._id,\\r\\n});\\r\\n\\r\\nif (existingTransaction) {\\r\\n   return {\\r\\n     transactionId: existingTransaction?._id,\\r\\n   };\\r\\n}\\r\\n```\\r\\n\\r\\nObserve que retorno o identificador da transa\xe7\xe3o criada anteriormente com as mesmas informa\xe7\xf5es, mas tamb\xe9m poderia lan\xe7ar uma exce\xe7\xe3o. Tudo depende do contexto da aplica\xe7\xe3o e de qual abordagem \xe9 a melhor para voc\xea.\\r\\n\\r\\nPara criar a chave de idempot\xeancia no front-end da aplica\xe7\xe3o, escrevi o seguinte c\xf3digo:\\r\\n\\r\\n``` ts\\r\\nimport { v7 as uuid } from \\"uuid\\";\\r\\n\\r\\nconst createIdempotencyKey = () => {\\r\\n  const idempotencyKey = uuid();\\r\\n  sessionStorage.setItem(\\"idempotent-key\\", idempotencyKey);\\r\\n};\\r\\n```\\r\\n\\r\\nArmazenei a Chave de Idempot\xeancia no SessionStorage do navegador quando o usu\xe1rio decide criar uma transa\xe7\xe3o e, ao fazer a requisi\xe7\xe3o, pego esse valor e envio no cabe\xe7alho para o back-end. Dessa forma, garanto que essa Chave de Idempot\xeancia seja utilizada apenas naquele contexto, visto que, diferentemente do LocalStorage, esse dado s\xf3 estar\xe1 dispon\xedvel para aquela sess\xe3o enquanto ela existir (ou at\xe9 a informa\xe7\xe3o ser sobrescrita).\\r\\n\\r\\nPor\xe9m, pesquisando um pouco mais e refletindo melhor sobre essas ideias, conclui que essa abordagem pode ter certas limita\xe7\xf5es, que trataremos no pr\xf3ximo post.\\r\\n\\r\\n**Fontes**\\r\\n- https://developer.mozilla.org/en-US/docs/Glossary/Idempotent\\r\\n- https://developers.openpix.com.br/docs/concepts/idempotence\\r\\n- https://www.gooddata.com/blog/multi-tenant-architecture/\\r\\n- https://github.com/joelbrs/bank.com.br"},{"id":"idempotencia-parte-2","metadata":{"permalink":"/blog/en-US/blog/idempotencia-parte-2","source":"@site/blog/idempotencia-parte-2.md","title":"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte II","description":"No post anterior, discutimos os conceitos b\xe1sicos de Resili\xeancia e Idempot\xeancia. Al\xe9m disso, demonstrei como apliquei esses conceitos de forma pr\xe1tica em um projeto pessoal.","date":"2024-09-17T12:46:35.000Z","tags":[{"inline":true,"label":"programming","permalink":"/blog/en-US/blog/tags/programming"},{"inline":true,"label":"idempotency","permalink":"/blog/en-US/blog/tags/idempotency"}],"readingTime":3.175,"hasTruncateMarker":false,"authors":[{"name":"Joel da Silva Pereira Filho","title":"Backend Developer","url":"https://github.com/joelbrs","image_url":"https://github.com/joelbrs.png","imageURL":"https://github.com/joelbrs.png"}],"frontMatter":{"slug":"idempotencia-parte-2","title":"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte II","authors":{"name":"Joel da Silva Pereira Filho","title":"Backend Developer","url":"https://github.com/joelbrs","image_url":"https://github.com/joelbrs.png","imageURL":"https://github.com/joelbrs.png"},"tags":["programming","idempotency"]},"unlisted":false,"lastUpdatedAt":1726577195000,"prevItem":{"title":"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I","permalink":"/blog/en-US/blog/idempotencia-parte-1"}},"content":"No [post anterior](https://joelbrs.github.io/blog/posts/idempotencia-parte-1), discutimos os conceitos b\xe1sicos de Resili\xeancia e Idempot\xeancia. Al\xe9m disso, demonstrei como apliquei esses conceitos de forma pr\xe1tica em um projeto pessoal.\\r\\n\\r\\nAgora, explorarei algumas limita\xe7\xf5es do modelo inicialmente proposto e apresentarei uma alternativa vi\xe1vel para implementar idempot\xeancia, que \xe9 mais perform\xe1tica.\\r\\n\\r\\n## Quais s\xe3o as limita\xe7\xf5es de gerar a Chave de Idempot\xeancia no Front-end?\\r\\n\\r\\nNo modelo proposto anteriormente, a chave de idempot\xeancia \xe9 gerada pelo front-end, armazenada no SessionStorage do navegador e posteriormente enviada ao back-end. Embora essa abordagem funcione, n\xe3o \xe9 a mais adequada para resolver o problema.\\r\\n\\r\\nPrimeiramente, a gera\xe7\xe3o da chave pelo front-end permite que o usu\xe1rio do sistema a manipule, j\xe1 que \xe9 facilmente acess\xedvel ao abrir a aba de armazenamento do navegador.\\r\\n\\r\\nEm segundo lugar, e estritamente relacionado ao primeiro ponto, como o front-end est\xe1 mais suscet\xedvel a manipula\xe7\xf5es e ataques cibern\xe9ticos. Por padr\xe3o, regras de neg\xf3cio n\xe3o devem ser estabelecidas no front-end. Caso haja necessidade, elas devem ser refor\xe7adas no back-end.\\r\\n\\r\\n## Qual seria a solu\xe7\xe3o?\\r\\n\\r\\nA primeira solu\xe7\xe3o, mais simples, seria criar um endpoint no back-end para gerar a chave de idempot\xeancia e armazen\xe1-la em mem\xf3ria. Nesse caso, poder\xedamos utilizar a abordagem de gerar um UUID como chave de idempot\xeancia.\\r\\n\\r\\nA segunda, mais robusta, \xe9 utilizar uma camada de cache para armazenar a chave de idempot\xeancia por um tempo pr\xe9-estabelecido. Nesse caso, a chave de idempot\xeancia poderia ser criada a partir de um hash das informa\xe7\xf5es da conta do remetente, do destinat\xe1rio, do valor e da descri\xe7\xe3o (se houver). Essa chave seria armazenada em um Redis, por exemplo, por 5 minutos (ou qualquer outro per\xedodo de tempo, dependendo da implementa\xe7\xe3o). Caso a requisi\xe7\xe3o se repita devido a alguma instabilidade, a chave ser\xe1 buscada no cache e a transa\xe7\xe3o ser\xe1 encontrada.\\r\\n\\r\\n> _Na segunda proposta, n\xe3o optei por gerar um UUID a cada transa\xe7\xe3o. Isso se deve ao fato de que, se um UUID for gerado a cada requisi\xe7\xe3o para criar uma transa\xe7\xe3o, mesmo que uma requisi\xe7\xe3o seja duplicada, ainda assim seriam duas requisi\xe7\xf5es diferentes, resultando em UUIDs distintos. Dessa forma, nossa chave de idempot\xeancia n\xe3o seria verdadeiramente idempotente._\\r\\n\\r\\n## Por que essa \xe9 uma melhor solu\xe7\xe3o?\\r\\n\\r\\nPrimeiro, porque eliminamos a necessidade de um campo correspondente \xe0 chave de idempot\xeancia no banco de dados, evitando sobrecarregar o banco de dados principal com consultas para verificar se a transa\xe7\xe3o j\xe1 existe. A consulta ao Redis \xe9 muito mais r\xe1pida, perform\xe1tica e menos custosa.\\r\\n\\r\\nSegundo, porque retiramos qualquer regra de neg\xf3cio do front-end, evitando assim que nosso sistema esteja mais vulner\xe1vel a ataques e manipula\xe7\xf5es indesejadas dos dados.\\r\\n\\r\\n## Como implementar essa solu\xe7\xe3o?\\r\\n\\r\\nPrimeiro, vamos instalar o Redis no nosso projeto NodeJS:\\r\\n\\r\\n``` ts\\r\\npnpm add ioredis\\r\\n```\\r\\n\\r\\nVamos criar uma inst\xe2ncia do Redis:\\r\\n``` ts\\r\\nimport Redis from \'ioredis\';\\r\\n\\r\\nconst redis = new Redis();\\r\\n```\\r\\n\\r\\nAgora, vamos criar o hash que ser\xe1 nossa chave de idempot\xeancia:\\r\\n\\r\\n``` ts\\r\\nimport crypto from \'node:crypto\';\\r\\n\\r\\nasync createTransaction(data, ctx) {\\r\\n  ...\\r\\n  const { value, description } = data;\\r\\n\\r\\n  const dataToBeHashed = `${senderAccount._id}-${receiverAccount?._id}-${value}-${description}`\\r\\n\\r\\n  const idempotentKey = \\r\\n  crypto.createHash(\'sha256\').update(dataToBeHashed).digest(\'hex\')\\r\\n\\r\\n  ...\\r\\n}\\r\\n\\r\\n``` \\r\\n\\r\\n\\r\\nEm seguida, definimos essa chave de idempot\xeancia no cache e verificamos sua exist\xeancia:\\r\\n\\r\\n``` ts\\r\\nasync createTransaction(data, ctx) {\\r\\n   ...\\r\\n\\r\\n   const existingTransaction = await redis.set(idempotentKey, \'transaction\', \'EX\', 60 * 5, \'GET\')\\r\\n\\r\\n   if (existingTransaction) {\\r\\n     return false\\r\\n   }\\r\\n   ...\\r\\n}\\r\\n```\\r\\n\\r\\nEsta foi uma demonstra\xe7\xe3o simples de como essa abordagem pode ser implementada com NodeJS, independentemente do framework utilizado, seja Express, NestJS, Koa ou Fastify.\\r\\n\\r\\nEssa implementa\xe7\xe3o ainda n\xe3o est\xe1 dispon\xedvel no reposit\xf3rio do projeto, mas pretendo trabalhar nisso nos pr\xf3ximos dias.\\r\\n\\r\\nEsta s\xe9rie de posts foi criada para compartilhar minha jornada no desenvolvimento deste projeto e as decis\xf5es que tomei com base em meus estudos e reflex\xf5es.\\r\\n\\r\\nEstou aberto a feedbacks e novas propostas. Pretendo implementar novas features futuramente, ent\xe3o estou \xe0 disposi\xe7\xe3o para conversar mais sobre isso no meu [LinkedIn](https://linkedin.com/in/joelbrs)."}]}}')}}]);