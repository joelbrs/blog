"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3134],{7190:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>m});var a=o(6070),n=o(5710);const r={slug:"guia-introducao-docker",title:"Guia de Introdu\xe7\xe3o ao Docker",authors:{name:"Joel da Silva Pereira Filho",title:"Backend Developer",url:"https://github.com/joelbrs",image_url:"https://github.com/joelbrs.png"},tags:["docker","devops","beginners"]},i=void 0,t={permalink:"/en-US/blog/guia-introducao-docker",source:"@site/blog/guia-introducao-docker.md",title:"Guia de Introdu\xe7\xe3o ao Docker",description:"Quando falamos de Docker, uma das primeiras coisas que nos vem \xe0 mente s\xe3o containers. Basicamente, quase tudo em Docker se resume a containers, ent\xe3o, \xe9 super importante que voc\xea tenha esse conceito bem s\xf3lido na sua mente e n\xe3o s\xf3 isso, mas tamb\xe9m como funcionam.",date:"2024-09-17T12:35:51.000Z",tags:[{inline:!0,label:"docker",permalink:"/en-US/blog/tags/docker"},{inline:!0,label:"devops",permalink:"/en-US/blog/tags/devops"},{inline:!0,label:"beginners",permalink:"/en-US/blog/tags/beginners"}],readingTime:3.975,hasTruncateMarker:!1,authors:[{name:"Joel da Silva Pereira Filho",title:"Backend Developer",url:"https://github.com/joelbrs",image_url:"https://github.com/joelbrs.png",imageURL:"https://github.com/joelbrs.png"}],frontMatter:{slug:"guia-introducao-docker",title:"Guia de Introdu\xe7\xe3o ao Docker",authors:{name:"Joel da Silva Pereira Filho",title:"Backend Developer",url:"https://github.com/joelbrs",image_url:"https://github.com/joelbrs.png",imageURL:"https://github.com/joelbrs.png"},tags:["docker","devops","beginners"]},unlisted:!1,lastUpdatedAt:1726576786e3,nextItem:{title:"Idempot\xeancia: Melhorando a Resili\xeancia de Seu Sistema - Parte I",permalink:"/en-US/blog/idempotencia-parte-1"}},c={authorsImageUrls:[void 0]},m=[{value:"Como funcionam os containers?",id:"como-funcionam-os-containers",level:2},{value:"Namespaces:",id:"namespaces",level:3},{value:"CGroups:",id:"cgroups",level:3},{value:"File System \u2192 Overlay File System (OFS)",id:"file-system--overlay-file-system-ofs",level:3},{value:"Imagens",id:"imagens",level:3},{value:"DockerFile",id:"dockerfile",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Quando falamos de ",(0,a.jsx)(s.em,{children:"Docker"}),", uma das primeiras coisas que nos vem \xe0 mente s\xe3o ",(0,a.jsx)(s.em,{children:"containers"}),". Basicamente, quase tudo em Docker se resume a containers, ent\xe3o, \xe9 super importante que voc\xea tenha esse conceito bem s\xf3lido na sua mente e n\xe3o s\xf3 isso, mas tamb\xe9m como funcionam."]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h2,{id:"como-funcionam-os-containers",children:"Como funcionam os containers?"}),"\n",(0,a.jsxs)(s.p,{children:["Para explicar o conceito de containers, podemos come\xe7ar pelo sistema operacional (SO) - tendo como base para a explica\xe7\xe3o o Linux, especificamente - ser composto de processos e subprocessos. Para entender melhor esse conceito, precisamos entender os tr\xeas principais pilares que os sustentam: ",(0,a.jsx)(s.em,{children:"Namespaces"}),", _CGroups _e ",(0,a.jsx)(s.em,{children:"Overlay File System"})," (OFS) que falaremos a seguir."]}),"\n",(0,a.jsx)(s.h3,{id:"namespaces",children:"Namespaces:"}),"\n",(0,a.jsxs)(s.p,{children:["A partir desses processos, surgiu os chamados ",(0,a.jsx)(s.em,{children:"Namespaces"}),", que, basicamente, atuam no ",(0,a.jsx)(s.strong,{children:"isolamento"})," de cada processo. Nesse caso, h\xe1 uma hierarquia entre os processos-pai e os processos-filhos, onde estes \xfaltimos s\xe3o altamente dependentes dos primeiros e, caso aconte\xe7a algo aos processos principais, todo o meu sistema operacional vai \xe0 baixo. Tendo isso em mente, os Namespaces isolam cada processo do SO, permitindo que cada um rode de forma independente. Em outras palavras, um container emula um SO com processos rodando em isolamento e executando tarefas diferentes. Containers n\xe3o executam um SO completo, mas apenas os elementos espec\xedficos necess\xe1rios, incluindo o kernel."]}),"\n",(0,a.jsx)(s.h3,{id:"cgroups",children:"CGroups:"}),"\n",(0,a.jsxs)(s.p,{children:["Para entender o funcionamento do ",(0,a.jsx)(s.strong,{children:"CGroups"})," e para qu\xea eles servem, pensemos na seguinte ocorr\xeancia: Temos alguns containers rodando (sabendo que containers s\xe3o, basicamente, processos isolados que possuem subprocessos) e, em um deles, temos um enorme vazamento (leak) de mem\xf3ria, o que consequentemente acaba afetando os outros processos fora desse ",(0,a.jsx)(s.em,{children:"Namespace"}),". \xc9 a\xed que entram os CGroups. Eles surgiram para controlar e isolar os recursos de ",(0,a.jsx)(s.strong,{children:"cada"})," Namespace, para que esses recursos sejam bem distribu\xeddos para cada um, de acordo com suas necessidades e, n\xe3o s\xf3 isso, para que os seus recursos n\xe3o afetem o funcionamento de outros processos fora desse Namespace."]}),"\n",(0,a.jsx)(s.h3,{id:"file-system--overlay-file-system-ofs",children:"File System \u2192 Overlay File System (OFS)"}),"\n",(0,a.jsxs)(s.p,{children:["Novamente, vamos contextualizar o funcionamento do ",(0,a.jsx)(s.strong,{children:"Overlay File System"})," para uma melhor compreens\xe3o: Digamos que temos um container em que estamos rodando uma aplica\xe7\xe3o de, aproximadamente, 95mb (Megabytes), por\xe9m, para que essa aplica\xe7\xe3o funcione corretamente, \xe9 necess\xe1rio a utiliza\xe7\xe3o de duas depend\xeancias diferentes.\r\nA partir disso, podemos citar o seguinte poss\xedvel acontecimento: surgiu a necessidade de mudar essa aplica\xe7\xe3o e, para isso, teremos que criar outra imagem a partir da que temos atualmente (falaremos sobre imagens no pr\xf3ximo t\xf3pico). Ent\xe3o, o Overlay File System (OFS) ser\xe1 usado para criar imagens desse novo aplicativo execut\xe1vel. Isso \xe9 poss\xedvel porque ele pode gerar uma nova imagem a partir de uma existente, apenas alterando as partes que precisam ser atualizadas, sem a necessidade de reinstalar as depend\xeancias obrigat\xf3rias."]}),"\n",(0,a.jsxs)(s.p,{children:["Agora que conhecemos um pouco sobre o funcionamento dos containers e de seus 3 pilares, podemos adentrar um pouco mais em outro t\xf3picos importantes quando o assunto \xe9 Docker, bem como o conceito de ",(0,a.jsx)(s.em,{children:"Imagens"})," & o t\xe3o importante ",(0,a.jsx)(s.em,{children:"DockerFile"}),"."]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h3,{id:"imagens",children:"Imagens"}),"\n",(0,a.jsx)(s.p,{children:"De forma bem objetiva, podemos definir as imagens como um \u201cpacote\u201d execut\xe1vel (ou um conjunto de depend\xeancias encadeadas) que possui todos os requisitos/depend\xeancias necess\xe1rios(as) para rodar um aplicativo, incluindo, um arquivo de configura\xe7\xe3o, vari\xe1veis de ambiente, bibliotecas e assim por diante."}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h3,{id:"dockerfile",children:"DockerFile"}),"\n",(0,a.jsxs)(s.p,{children:["Para a ",(0,a.jsx)(s.strong,{children:"cria\xe7\xe3o"})," de imagens, utilizamos o ",(0,a.jsx)(s.strong,{children:"DockerFile"}),". Basicamente, ele \xe9 um arquivo ",(0,a.jsx)(s.em,{children:"declarativo"})," que cita instru\xe7\xf5es ao container Docker de como ser\xe1 criada e \u201cbuildada\u201d a referente imagem que queremos criar.\r\nDe maneira usual, (quase) sempre criamos uma imagem a partir de outra imagem j\xe1 existente, com suas devidas depend\xeancias pr\xe9-definidas e configuradas e vamos moldando-a de acordo com nossa necessidade."]}),"\n",(0,a.jsx)(s.p,{children:"Abaixo segue um exemplo de modelo de uma implementa\xe7\xe3o do DockerFile, Vamos explicar linha a linha o que cada uma faz e sua respectiva fun\xe7\xe3o:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"FROM node:16.18.0-alpine as base\r\nRUN npm install\r\n\r\nEXPOSE 3000\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Essa primeira linha (logo abaixo) \xe9 de extrema import\xe2ncia, pois referencia ao DockerFile a imagem base utilizaremos para a cria\xe7\xe3o da nossa."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"FROM node:16.18.0-alpine as base\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Aqui, dizemos ao DockerFile que ser\xe1 necess\xe1rio que ele rode esse comando determinado, lembrando: voc\xea pode determinar que sejam executados mais de um comando, dessa forma:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"RUN npm install\r\nRUN npm run build\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"E, por \xfaltimo (n\xe3o \xe9 o \xfaltimo comando que podemos determinar ao DockerFile e, sim o \xfaltimo de minha demonstra\xe7\xe3o), podemos exp\xf4r portas em que essas imagens estar\xe3o rodando para que possamos acess\xe1-las quando quisermos:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"EXPOSE 3000\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Acredito que agora voc\xea j\xe1 possui conhecimento suficiente para aprofundar-se nos estudos em Docker e, caso precise de alguma ajuda com algum conteito ou recomenda\xe7\xe3o de cursos sobre o assunto, me manda solicita\xe7\xe3o no ",(0,a.jsx)(s.a,{href:"https://www.linkedin.com/in/joelbrs",children:"meu LinkedIn"}),", que ficarei feliz em ajud\xe1-lo. Al\xe9m disso, espero que esse post tenha sido de muita ajuda e estarei sempre disposto a receber feedbacks!"]})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5710:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>t});var a=o(758);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);