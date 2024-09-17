---
slug: guia-introducao-docker
title: Guia de Introdução ao Docker
authors:
  name: Joel da Silva Pereira Filho
  title: Web Developer
  url: https://github.com/joelbrs
  image_url: https://github.com/joelbrs.png
tags: [docker, devops, beginners]
---

Quando falamos de _Docker_, uma das primeiras coisas que nos vem à mente são _containers_. Basicamente, quase tudo em Docker se resume a containers, então, é super importante que você tenha esse conceito bem sólido na sua mente e não só isso, mas também como funcionam.

---

## Como funcionam os containers?

Para explicar o conceito de containers, podemos começar pelo sistema operacional (SO) - tendo como base para a explicação o Linux, especificamente - ser composto de processos e subprocessos. Para entender melhor esse conceito, precisamos entender os três principais pilares que os sustentam: _Namespaces_, _CGroups _e _Overlay File System_ (OFS) que falaremos a seguir.

### Namespaces:
A partir desses processos, surgiu os chamados _Namespaces_, que, basicamente, atuam no **isolamento** de cada processo. Nesse caso, há uma hierarquia entre os processos-pai e os processos-filhos, onde estes últimos são altamente dependentes dos primeiros e, caso aconteça algo aos processos principais, todo o meu sistema operacional vai à baixo. Tendo isso em mente, os Namespaces isolam cada processo do SO, permitindo que cada um rode de forma independente. Em outras palavras, um container emula um SO com processos rodando em isolamento e executando tarefas diferentes. Containers não executam um SO completo, mas apenas os elementos específicos necessários, incluindo o kernel.

### CGroups:

Para entender o funcionamento do **CGroups** e para quê eles servem, pensemos na seguinte ocorrência: Temos alguns containers rodando (sabendo que containers são, basicamente, processos isolados que possuem subprocessos) e, em um deles, temos um enorme vazamento (leak) de memória, o que consequentemente acaba afetando os outros processos fora desse _Namespace_. É aí que entram os CGroups. Eles surgiram para controlar e isolar os recursos de **cada** Namespace, para que esses recursos sejam bem distribuídos para cada um, de acordo com suas necessidades e, não só isso, para que os seus recursos não afetem o funcionamento de outros processos fora desse Namespace.


### File System → Overlay File System (OFS)

Novamente, vamos contextualizar o funcionamento do **Overlay File System** para uma melhor compreensão: Digamos que temos um container em que estamos rodando uma aplicação de, aproximadamente, 95mb (Megabytes), porém, para que essa aplicação funcione corretamente, é necessário a utilização de duas dependências diferentes. 
A partir disso, podemos citar o seguinte possível acontecimento: surgiu a necessidade de mudar essa aplicação e, para isso, teremos que criar outra imagem a partir da que temos atualmente (falaremos sobre imagens no próximo tópico). Então, o Overlay File System (OFS) será usado para criar imagens desse novo aplicativo executável. Isso é possível porque ele pode gerar uma nova imagem a partir de uma existente, apenas alterando as partes que precisam ser atualizadas, sem a necessidade de reinstalar as dependências obrigatórias.

Agora que conhecemos um pouco sobre o funcionamento dos containers e de seus 3 pilares, podemos adentrar um pouco mais em outro tópicos importantes quando o assunto é Docker, bem como o conceito de _Imagens_ & o tão importante _DockerFile_.

---

### Imagens
     
De forma bem objetiva, podemos definir as imagens como um “pacote” executável (ou um conjunto de dependências encadeadas) que possui todos os requisitos/dependências necessários(as) para rodar um aplicativo, incluindo, um arquivo de configuração, variáveis de ambiente, bibliotecas e assim por diante.

---

### DockerFile

Para a **criação** de imagens, utilizamos o **DockerFile**. Basicamente, ele é um arquivo _declarativo_ que cita instruções ao container Docker de como será criada e “buildada” a referente imagem que queremos criar.
De maneira usual, (quase) sempre criamos uma imagem a partir de outra imagem já existente, com suas devidas dependências pré-definidas e configuradas e vamos moldando-a de acordo com nossa necessidade.

Abaixo segue um exemplo de modelo de uma implementação do DockerFile, Vamos explicar linha a linha o que cada uma faz e sua respectiva função:

     

```
FROM node:16.18.0-alpine as base
RUN npm install

EXPOSE 3000
```


 - Essa primeira linha (logo abaixo) é de extrema importância, pois referencia ao DockerFile a imagem base utilizaremos para a criação da nossa.

     

```
FROM node:16.18.0-alpine as base
```

 
 - Aqui, dizemos ao DockerFile que será necessário que ele rode esse comando determinado, lembrando: você pode determinar que sejam executados mais de um comando, dessa forma:

```
RUN npm install
RUN npm run build
```

 
- E, por último (não é o último comando que podemos determinar ao DockerFile e, sim o último de minha demonstração), podemos expôr portas em que essas imagens estarão rodando para que possamos acessá-las quando quisermos:

     

```
EXPOSE 3000
```

Acredito que agora você já possui conhecimento suficiente para aprofundar-se nos estudos em Docker e, caso precise de alguma ajuda com algum conteito ou recomendação de cursos sobre o assunto, me manda solicitação no [meu LinkedIn](https://www.linkedin.com/in/joelbrs), que ficarei feliz em ajudá-lo. Além disso, espero que esse post tenha sido de muita ajuda e estarei sempre disposto a receber feedbacks!

