"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8405],{5886:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var n=o(6070),i=o(5710);const s={slug:"idempotencia-parte-1",title:"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I",authors:{name:"Joel da Silva Pereira Filho",title:"Backend Developer",url:"https://github.com/joelbrs",image_url:"https://github.com/joelbrs.png"},tags:["programming","idempotency"]},r=void 0,t={permalink:"/en-US/blog/idempotencia-parte-1",source:"@site/blog/idempotencia-parte-1.md",title:"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I",description:"\xc0 medida que seu software cresce, \xe9 crucial aplicar dois conceitos fundamentais no desenvolvimento: Resili\xeancia e Idempot\xeancia.",date:"2024-09-17T12:39:46.000Z",tags:[{inline:!0,label:"programming",permalink:"/en-US/blog/tags/programming"},{inline:!0,label:"idempotency",permalink:"/en-US/blog/tags/idempotency"}],readingTime:3.78,hasTruncateMarker:!1,authors:[{name:"Joel da Silva Pereira Filho",title:"Backend Developer",url:"https://github.com/joelbrs",image_url:"https://github.com/joelbrs.png",imageURL:"https://github.com/joelbrs.png"}],frontMatter:{slug:"idempotencia-parte-1",title:"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I",authors:{name:"Joel da Silva Pereira Filho",title:"Backend Developer",url:"https://github.com/joelbrs",image_url:"https://github.com/joelbrs.png",imageURL:"https://github.com/joelbrs.png"},tags:["programming","idempotency"]},unlisted:!1,lastUpdatedAt:1726576786e3,prevItem:{title:"Guia de Introdu\xe7\xe3o ao Docker",permalink:"/en-US/blog/guia-introducao-docker"},nextItem:{title:"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte II",permalink:"/en-US/blog/idempotencia-parte-2"}},c={authorsImageUrls:[void 0]},d=[{value:"Resili\xeancia",id:"resili\xeancia",level:2},{value:"Idempot\xeancia",id:"idempot\xeancia",level:2},{value:"Mas como aplicar esses conceitos, na pr\xe1tica?",id:"mas-como-aplicar-esses-conceitos-na-pr\xe1tica",level:2}];function l(e){const a={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["\xc0 medida que seu software cresce, \xe9 crucial aplicar dois conceitos fundamentais no desenvolvimento: ",(0,n.jsx)(a.em,{children:"Resili\xeancia"})," e ",(0,n.jsx)(a.em,{children:"Idempot\xeancia"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Esses conceitos trabalham juntos em harmonia. Hoje, vou apresentar uma breve introdu\xe7\xe3o a esses conceitos e compartilhar como os apliquei de forma pr\xe1tica em meu projeto de simula\xe7\xe3o banc\xe1ria, onde implementei a cria\xe7\xe3o de transa\xe7\xf5es entre diferentes contas de forma idempotente."}),"\n",(0,n.jsxs)(a.p,{children:["Confira o projeto no meu GitHub e no reposit\xf3rio ",(0,n.jsx)(a.a,{href:"https://github.com/joelbrs/bank.com.br",children:"bank.com.br"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"resili\xeancia",children:"Resili\xeancia"}),"\n",(0,n.jsx)(a.p,{children:"Resili\xeancia \xe9 a capacidade do seu software de falhar e lidar bem com essas falhas. Para desenvolver um software resiliente, a equipe deve antecipar poss\xedveis falhas e planejar como resolv\xea-las. Todos os sistemas est\xe3o sujeitos a falhas, mas o que os diferencia \xe9 a capacidade de tratar e resolver esses problemas de maneira eficiente. =)"}),"\n",(0,n.jsx)(a.h2,{id:"idempot\xeancia",children:"Idempot\xeancia"}),"\n",(0,n.jsx)(a.p,{children:"Idempot\xeancia \xe9 a propriedade que algumas opera\xe7\xf5es t\xeam de poderem ser aplicadas v\xe1rias vezes sem alterar o resultado ap\xf3s a aplica\xe7\xe3o inicial. Em outras palavras, uma opera\xe7\xe3o idempotente pode ser repetida in\xfameras vezes e o estado do sistema permanecer\xe1 o mesmo."}),"\n",(0,n.jsx)(a.p,{children:"Por exemplo, no contexto da aplica\xe7\xe3o desenvolvida, a idempot\xeancia foi aplicada no seguinte cen\xe1rio: Digamos que uma conta A est\xe1 fazendo uma transa\xe7\xe3o de R$10,00 para a conta B. Por\xe9m, por uma inconsist\xeancia nos servidores, essa transa\xe7\xe3o foi realizada duas vezes, fazendo com que o valor enviado para a conta B dobrasse para R$20,00. Isso representa um problema significativo, especialmente em transa\xe7\xf5es maiores. A idempot\xeancia pode ser aplicada para prevenir essas duplica\xe7\xf5es."}),"\n",(0,n.jsx)(a.h2,{id:"mas-como-aplicar-esses-conceitos-na-pr\xe1tica",children:"Mas como aplicar esses conceitos, na pr\xe1tica?"}),"\n",(0,n.jsx)(a.p,{children:"Recentemente, trabalhei em um projeto pessoal, o Bank, onde a proposta foi simular o dia-a-dia de um banco, realizando transa\xe7\xf5es entre diferentes contas. As tecnologias utilizadas no projeto foram: React, Relay, GraphQL, KoaJS e MongoDB."}),"\n",(0,n.jsx)(a.p,{children:"Primeiramente, criei o model utilizando o mongoose, referente \xe0s contas que seriam criadas no sistema, contendo as seguintes informa\xe7\xf5es:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Identificador \xdanico da Conta"}),"\n",(0,n.jsx)(a.li,{children:"N\xfamero da Conta"}),"\n",(0,n.jsx)(a.li,{children:"O CPF/CNPJ (taxId) do usu\xe1rio"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Em seguida, foi criado o model das transa\xe7\xf5es:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Identificador \xdanico da Transa\xe7\xe3o"}),"\n",(0,n.jsx)(a.li,{children:"O identificador da conta do remetente"}),"\n",(0,n.jsx)(a.li,{children:"O identificador da conta do destinat\xe1rio"}),"\n",(0,n.jsx)(a.li,{children:"O valor a ser transferido"}),"\n",(0,n.jsx)(a.li,{children:"Chave de Impot\xeancia"}),"\n",(0,n.jsx)(a.li,{children:"Descri\xe7\xe3o da Transa\xe7\xe3o (Opcional)"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Podemos perceber, no model de Transa\xe7\xe3o, que h\xe1 um campo chamado \u201cChave de Idempot\xeancia\u201d. A cria\xe7\xe3o e utiliza\xe7\xe3o desse campo no nosso banco de dados representa a estrat\xe9gia de idempot\xeancia utilizada no desenvolvimento do sistema. Existem algumas estrat\xe9gias para isso, como: Idempotency Key (padr\xe3o utilizado), Get Or Create, Hist\xf3rico de Chamadas, dentre outros."}),"\n",(0,n.jsxs)(a.p,{children:["De forma geral, ser\xe1 gerada uma Chave de Idempot\xeancia (\xfanica) para verificar se uma transa\xe7\xe3o j\xe1 foi realizada anteriormente. A Chave de Idempot\xeancia deve ser \xfanica para o contexto espec\xedfico de uma transa\xe7\xe3o. Em uma transa\xe7\xe3o, temos informa\xe7\xf5es que definem seu contexto, como a conta do remetente, a conta do destinat\xe1rio e o valor. Isso significa que a chave de idempot\xeancia deve ser \xfanica para uma transa\xe7\xe3o que envolva essas informa\xe7\xf5es. ",(0,n.jsxs)(a.em,{children:["Para uma discuss\xe3o detalhada sobre o assunto, acesse a seguinte ",(0,n.jsx)(a.a,{href:"https://github.com/joelbrs/bank.com.br/issues/12",children:"issue"})," do reposit\xf3rio do projeto, criada pelo ",(0,n.jsx)(a.a,{href:"https://github.com/caiocampoos",children:"@caiocampoos"})]})]}),"\n",(0,n.jsx)(a.p,{children:"Para implementar isso, defini um \xedndice composto no meu Schema, entre essas informa\xe7\xf5es:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ts",children:"TransactionSchema.index(\r\n  { senderAccountId: 1, idempotentKey: 1, receiverAccountId: 1 },\r\n  { unique: true }\r\n);\n"})}),"\n",(0,n.jsx)(a.p,{children:'Para receber essa Chave de Idempot\xeancia, optei por receb\xea-la no header "idempotentkey". Essa escolha ser\xe1 discutida mais detalhadamente em uma publica\xe7\xe3o futura.'}),"\n",(0,n.jsx)(a.p,{children:"Agora, na cria\xe7\xe3o da Transa\xe7\xe3o, fiz a seguinte verifica\xe7\xe3o:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ts",children:"const existingTransaction = await TransactionModel.findOne({\r\n   idempotentKey,\r\n   senderAccountId: senderAccount?._id,\r\n   receiverAccountId: receiverAccount?._id,\r\n});\r\n\r\nif (existingTransaction) {\r\n   return {\r\n     transactionId: existingTransaction?._id,\r\n   };\r\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"Observe que retorno o identificador da transa\xe7\xe3o criada anteriormente com as mesmas informa\xe7\xf5es, mas tamb\xe9m poderia lan\xe7ar uma exce\xe7\xe3o. Tudo depende do contexto da aplica\xe7\xe3o e de qual abordagem \xe9 a melhor para voc\xea."}),"\n",(0,n.jsx)(a.p,{children:"Para criar a chave de idempot\xeancia no front-end da aplica\xe7\xe3o, escrevi o seguinte c\xf3digo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ts",children:'import { v7 as uuid } from "uuid";\r\n\r\nconst createIdempotencyKey = () => {\r\n  const idempotencyKey = uuid();\r\n  sessionStorage.setItem("idempotent-key", idempotencyKey);\r\n};\n'})}),"\n",(0,n.jsx)(a.p,{children:"Armazenei a Chave de Idempot\xeancia no SessionStorage do navegador quando o usu\xe1rio decide criar uma transa\xe7\xe3o e, ao fazer a requisi\xe7\xe3o, pego esse valor e envio no cabe\xe7alho para o back-end. Dessa forma, garanto que essa Chave de Idempot\xeancia seja utilizada apenas naquele contexto, visto que, diferentemente do LocalStorage, esse dado s\xf3 estar\xe1 dispon\xedvel para aquela sess\xe3o enquanto ela existir (ou at\xe9 a informa\xe7\xe3o ser sobrescrita)."}),"\n",(0,n.jsx)(a.p,{children:"Por\xe9m, pesquisando um pouco mais e refletindo melhor sobre essas ideias, conclui que essa abordagem pode ter certas limita\xe7\xf5es, que trataremos no pr\xf3ximo post."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Fontes"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Idempotent",children:"https://developer.mozilla.org/en-US/docs/Glossary/Idempotent"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://developers.openpix.com.br/docs/concepts/idempotence",children:"https://developers.openpix.com.br/docs/concepts/idempotence"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://www.gooddata.com/blog/multi-tenant-architecture/",children:"https://www.gooddata.com/blog/multi-tenant-architecture/"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/joelbrs/bank.com.br",children:"https://github.com/joelbrs/bank.com.br"})}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5710:(e,a,o)=>{o.d(a,{R:()=>r,x:()=>t});var n=o(758);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);