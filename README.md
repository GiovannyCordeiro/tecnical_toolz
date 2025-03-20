![img banner](docs_assets/banner.webp)
# Teste tecnico - Toolzz

Ola, eu sou o Giovanny, agradeço desde ja o convite para participar! Confesso que esse teste tecnico foi bem desafiador
pois nunca tinha desenvolvido um projeto parecido de chat, mas como ja era dos meus planos fazer,
fiquei feliz e animado com a possibilidade. O prazo foi bem  curto de 2 dias, mas a cada passo que desenvolvia a
aplicacao ficava mais feliz por entender como cada parte funcionava.

## Preview da aplicação!

## Tabela de conteudos:
- Funcionalidades desenvolvidas
- Setup do projeto
- Requisitos
- Setup do projeto
- Decisoes tecnicas e aplicacoes
- Melhorias

## Funcionalidades desenvolvidas:

- Chat de salas para todos usuarios
- Chat direct entre usuarios
- Autentitacao e autorizacao

## Requisitos

- Docker

## Setup do projeto:

- Abra o projeto no vscode
- Execute em containers de desenvolvimento por meio de uma mensagem que vai aparecer no vscode.
- Espere o projeto rodar devidamente
- rode no terminal o comando `bin/dev`

## Decisoes tecnicas e applicacoes

Dado o desenvolvimento em um prazo bastante curto optei por nao desenvolver a parte do front em React,
embora eu ja tenha desenvolvido alguns outros projetos no meu github com a ferramenta, caso eu me concentrasse-se
em abstrair e conectar front com uma API Rails, provavelmente perderia um tempo precioso, logo, foquei na
arquitetura monolitica com sistema Hotwire e Tailwind de forma direta, utilizando as vantagens do ecossistema rails.

Me senti bastante desafiado no desafio, por ser bastante complexo com os requisitos, mas desenvolver
um projeto com Ruby e Rails é sempre muito prazeroso, justamente pelos seus padroes de convenção sobre
configuração e principios SOLID.

Utilizei commits semmaticos para deixar claro o historico de auteração, no caso de onde ocorra um bug
fique facil definir quais versoes sao as defeituosas e quais nao sao, ganhando mais tempo no processo
de debbuging.

## Melhorias

- Melhor desenvolvimento de componentes utilizando Stimullus + React: Senti que aplicação não tinha um
dos principais fatores que era uma UX interessante, mas o desenvolvimento das funcionalidades não seriam em vão
justamente pela integração facil entre Stimulus e componetes react, distribuiria componentes quando
necessario de forma rapido que só o ecossistema Javascript pode trazer, com a praticidade do rails, como
[descrito nesse artigo](https://blog.codeminer42.com/rails-stimulus-react/)

- Refinamento do mobile first para desenvolvimento de forma clara e objetiva: As telas nao estao desenvolvidas
para mobile, o que foi um grande infelicidade minha, caso tivesse mais tempo, implementaria responsividade
seguindo as logicas mais modernas do desenvolvimento front-end atual, onde deixamos os elementos se reagirem
as varias proporcoes de tela, como descrito [nesse artigo aqui](https://dev.to/lixeletto/acho-que-ja-podemos-deixar-o-mobile-first-em-2024-3m61)

- Melhora da escalabilidade: A medida que fosse me aprofundado como se da o funcionamento do processo
de caching e escala de aplicações
