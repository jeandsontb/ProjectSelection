<h1 align="center">Projeto Agenda de Contatos</h1>

<h4 align="center">
	🖥️ Projeto de agenda de contatos, Node no backend e React no frontend... 🖥️
</h4>

## 💻 Sobre o Projeto

LISTA DE CONTATOS - É um projeto para publicação e controle de contatos.

 - Projeto desenvolvido em Node no backend com Express, TypeOrm, Typescript, e muitas outras tecnologias.
 - Projeto desenvolvido em React consumindo a api e StyledComponents.
 - A agenda pode incluir, atualizar, remover e filtrar contatos em sua lista

Esse projeto foi desenvolvido usando as tecnologias mais atuais de mercado.

## 🎨 Layout

O layout foi estilizado utilizando cores semânticas da tabela da adobe, e utilizando de um design flexível e intuitivo.

### Web


<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Login" src="https://raw.githubusercontent.com/jeandsontb/ProjectSelection/main/assets/Project00.png" width="400px">

  <img alt="List of contacts" src="https://raw.githubusercontent.com/jeandsontb/ProjectSelection/main/assets/Project01.png" width="400px">
</p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Inclusion contacts" src="https://raw.githubusercontent.com/jeandsontb/ProjectSelection/main/assets/Project02.png" width="400px">

  <img alt="Servers opering" src="https://raw.githubusercontent.com/jeandsontb/ProjectSelection/main/assets/Project03.png" width="400px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [TypeORM][typeorm]
- [React][reactjs]
- [StyledComponents][stylecomponents]
- [Vscode][vscode]

🤖 <h4>E muitas outras tecnologias foram empregadas nesse projeto.</h4>

## 💡 Como executar o projeto


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode] e o [MySQL][mysql] mesmo que seja um servidor xamp ou wamp é necessário que ele esteja em execução antes de startar o servidor node


1. Back End

- Uso do banco mysql

<p align="center">*** A pasta Frontend pode tirar do projeto e colocar em outro local para execução ***</p>

01 - Após abrir a pasta do projeto rodar o comando -  npm install

02 – Criar um base de dados no banco de dados mysql – utilizei esse nome  *apicontacts*

03 – Verificar o arquivo ormconfig.json para ajustar os dados do banco, user, password, database

04 – Rodar o comando para criar as tabelas na base de dados - npm run typeorm migration:run

05 – Rodar a aplicação – npm run dev


1. Front End

01 - Alocar a parta Frontend para outro local

02 - Rodar o comando para instalar todas as biliotecas necessárias -  npm install

03 - Startar o servidor - sudo npm start



## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Jeandson Tenorio 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[reactjs]: https://reactjs.org
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[typeorm]: https://typeorm.io/#/
[typescript]: https://www.typescriptlang.org/
[stylecomponents]: https://styled-components.com/
[mysql]: https://www.mysql.com/
