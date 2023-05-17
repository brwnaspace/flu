<h1 align="center"> SÓCIO-FLU ⚽</h1>

## 📌 Sobre o Projeto

Projeto final para a `school de Angular` da `MJV`. A aplicação foi criada com o intuito de reformular o site onde os torcedores do clube Fluminense, possam se tornar sócio-torcedores. No projeto, foi utilizado o framework Angular, onde fora difundidos conceitos importantes abordados durante o curso tais como `interpolação, pipes, services, componentes etc`. Ressalto também, que a linguagem utilizada em sua produção foi o [TypeScript](https://www.typescriptlang.org/)

<hr>

## 🤝 O que é sócio-torcedor?

O sócio-torcedor é um programa oferecido por clubes esportivos, como o [Fluminense](https://www.fluminense.com.br/site/), que permite aos fãs se associarem ao clube e desfrutarem de uma série de benefícios exclusivos. Ao se tornar um sócio-torcedor do Fluminense, os adeptos têm acesso a vantagens como descontos em ingressos para jogos, prioridade na compra de ingressos em eventos especiais, participação em promoções exclusivas, acesso a produtos oficiais do clube com preços diferenciados, entre outros. Além disso, os sócios-torcedores têm a oportunidade de apoiar financeiramente o clube, contribuindo para o seu crescimento e fortalecendo o vínculo entre a torcida e a equipe.

![image](https://github.com/brwnaspace/flu/assets/112510971/6dd31cfc-5bab-4e98-bfb6-787b6c5f334b)

<br>
<br>
<br>



#### em construção 

# 🎲 Cada uma das operações do CRUD
<ul>
    <li>✍️ Create (Criar): refere-se à ação de adicionar novos dados ao sistema. Por exemplo, criar um novo registro em
        uma tabela de um banco de dados.
    </li>
    <li>📑 Read (Ler): refere-se à ação de ler ou recuperar dados existentes do sistema. Por exemplo, ler e exibir as
        informações de um registro específico de uma tabela.
    </li>
    <li>📝 Update (Atualizar): refere-se à ação de modificar os dados existentes no sistema. Por exemplo, atualizar o
        valor de um campo em um registro de uma tabela.</li>
    <li>🗑 Delete (Deletar): refere-se à ação de remover dados existentes do sistema. Por exemplo, excluir um registro
        específico de uma tabela.</li>
</ul>
<hr>

<h1>👻 Entidades</h1>

As entidades e seus relacionamentos são essenciais para a criação de um banco de dados bem projetado e funcional,
permitindo que as aplicações possam armazenar e acessar dados de forma eficiente e eficaz. Desenvolvemos as seguintes
entidades:

<h3> Entidades do Banco de Dados: </h3>
<table>
    <tr>
        <td align="center"><img style="border-radius: 100%;"
                src="https://user-images.githubusercontent.com/112409145/219681414-c7f23eaa-8e19-429c-b39a-534a742a68b9.png"
                width="300px;" alt="" /><br /><sub><b>Usuarios</b></sub><br /></td>
        <td align="center"><img style="border-radius: 100%;"
                src="https://user-images.githubusercontent.com/112409145/219681663-22b51628-3cfc-46b0-8a9b-d8e0bad64233.png"
                width="300px;" alt="" /><br /><sub><b>Endereços</b></sub><br /></td>
        <td align="center"><img style="border-radius: 100%;"
                src="https://user-images.githubusercontent.com/112409145/219683063-ee334d34-ca86-4035-bcb3-3b9231b55615.png"
                width="300px;" alt="" /><br /><sub><b>Cargos</b></sub><br /></td>
        <td align="center"><img style="border-radius: 100%;"
                src="https://user-images.githubusercontent.com/112409145/219683374-4b4dfcff-700f-4d20-8b8e-85ba1c6d993f.png"
                width="300px;" alt="" /><br /><sub><b>Sede</b></sub><br /></td>
        <td align="center"><img style="border-radius: 100%;"
                src="https://user-images.githubusercontent.com/112409145/219683554-e2e7b52a-014d-4cfe-b4d7-065f6232fee0.png"
                width="300px;" alt="" /><br /><sub><b>Tech</b></sub><br /></td>
    </tr>
</table>
<hr>


As entidades são definidas por meio de um modelo de dados, que descreve a estrutura do banco de dados e como as
entidades se relacionam entre si. As relações entre as entidades são estabelecidas por meio de chaves primárias e
estrangeiras que permitem que os dados sejam conectados de forma consistente e eficiente.

As rotas desenvolvidas para as entidades:
<ul>
    <li>⇨ Listagem de todos os registros</li>
    <li>⇨ Listagem de um único registro com base em um parâmetro de rota</li>
    <li>⇨ Inserção de um registro</li>
    <li>⇨ Modificação de um registro</li>
    <li>⇨ Deleção de um registro</li>
</ul>

<hr>

## 🚀 Tecnologias:

<ul>
    <li>🖥️ Visual Studio Code;</li>
    <li>🐱‍👤 GitHub;</li>
    <li>🟢 Node.js;</li>
    <li>👾 Sequelize;</li>
    <li>🚅 Express;</li>
    <li>👿 Nodemon;</li>
    <li>🗄️ SQLite;</li>
    <li>📦 NPM para instalação de pacotes;</li>
    <li>📋 Trello.</li>
</ul>

<hr>

## 📐 Padrões Utilizados:

<ul>
    <li>🗃️ Utilizar o padrão MVC;</li>
    <li>🌐 Utilizar os verbos HTTP seguindo o padrão REST;</li>
    <li>🔨 Implementar todas as operações CRUD;</li>
    <li>🧲 Utilizar o padrão de projeto (design pattern) DAO para abstração de transações no banco, com Promises;</li>
    <li>⏱️ Utilização de async/await para operações no banco (DAO);</li>
    <li>🌍 Ter o código fonte hospedado em um repositório no Github.</li>
</ul>

## ▶️ Iniciando o projeto:

```bash

# Clone o repositório
$ git clone <https://github.com/maiconbre/CRUD>

# Instale as dependências
⇨ npm install
⇨ npm install sequelize-cli

# Execute comando para gerar o banco de dados
⇨ npx sequelize db:migrate

# Execute a aplicação 
⇨ npm run dev
```
## 🛤️ Teste os métodos nas respectivas rotas :

```bash
    🟢 GET - POST ⇨ Users
    🌐 <http://localhost:3030/users>

    🟢 GET[id] - PUT - DELETE ⇨ Users
    🌐 <http://localhost:3030/users/[id]>
```
<hr>
    
```bash
    🟢 GET - POST ⇨ Sedes
    🌐 <http://localhost:3030/sedes>

    🟢 GET[id] - PUT - DELETE ⇨ Sedes
    🌐 <http://localhost:3030/sedes/[id]>
```

<hr>

```bash

    🟢 GET - POST ⇨ Endereços
    🌐 <http://localhost:3030/users/[user_id]/enderecos>

    🟢 GET[id] - PUT - DELETE ⇨ Endereços
    🌐 <http://localhost:3030/users/[user_id]/enderecos/[id]>
```

<hr>

```bash
    🟢 GET - POST ⇨ Techs
    🌐 <http://localhost:3030/users/[user_id]/techs><

    🟢 GET[id] - PUT - DELETE ⇨ Techs
    🌐 <http://localhost:3030/users/[user_id]/techs/[id]>
```

<hr>

```bash
    🟢 GET - POST ⇨ Cargos
    🌐 <http://localhost:3030/users/[user_id]/cargos>

    🟢 GET[id] - PUT - DELETE ⇨ Cargos
    🌐 <http://localhost:3030/users/[user_id]/cargos>
```
<br><br><br><br>
## 📝 Licença
Este projeto está sob a licença MIT. Consulte a [LICENÇA](https://github.com/maiconbre/CRUD/blob/main/LICENSE) para
obter mais informações.

<div align="center">
<h2>Feito com ❤️ pelos Desenvolvedores ⬇️</h2>
<table>
<tr>
<td align="center"><a href="https://github.com/maiconbre"><img style="border-radius: 50%;"src="https://avatars.githubusercontent.com/u/112555118?s=400&u=29f6b5dd0e203807a101ee8d70f6a026cf8fabbc&v=4"width="150px;" alt="" /><br /><sub><b>Maicon Brendon</b></sub></a><br /><a href="https://github.com/maiconbre" title="Maicon Brendon"></a></td>
                <td align="center"><a href="https://github.com/Tamiresporto"><img style="border-radius: 50%;"
                            src="https://avatars.githubusercontent.com/u/112409145?v=4" width="150px;"
                            alt="" /><br /><sub><b>Tamires Porto</b></sub></a><br /><a
                        href="https://github.com/Tamiresporto" title="Tamires Porto"></a></td>
                <td align="center"><a href="https://github.com/brwnalima"><img style="border-radius: 50%;"
                            src="https://avatars.githubusercontent.com/u/112510971?v=4" width="150px;"
                            alt="" /><br /><sub><b>Bruna Lima</b></sub></a><br /><a href="https://github.com/brwnalima"
                        title="Bruna Lima"></a></td>
                <td align="center"><a href="https://github.com/TaisC468"><img style="border-radius: 50%;"
                            src="https://avatars.githubusercontent.com/u/112699437?v=4" width="150px;"
                            alt="" /><br /><sub><b>Tais Campos</b></sub></a><br /><a href="https://github.com/TaisC468"
                        title="Tais Campos"></a></td>
                <td align="center"><a href="https://github.com/suannyrodrigues"><img style="border-radius: 50%;"
                            src="https://avatars.githubusercontent.com/u/112557354?v=4" width="150px;"
                            alt="" /><br /><sub><b>Suanny Rodrigues</b></sub></a><br /><a
                        href="https://github.com/suannyrodrigues" title="Suanny Rodrigues"></a></td>
            </tr>
        </table>
    </div>
