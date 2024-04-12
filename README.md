# Sistema de gerenciamento de tarefas

Bem-vindo ao incrível projeto de Backend! Este é um sistema de API simples, concebido para gerenciar suas tarefas de forma eficiente. Com um CRUD robusto (Create, Read, Update, Delete), você pode facilmente cadastrar, visualizar, editar e excluir suas tarefas com facilidade.

Desenvolvido com o poderoso Node.js e a elegância do TypeScript, este projeto é uma prova de como a tecnologia pode simplificar o seu fluxo de trabalho. Integramos o PostgreSQL como nosso banco de dados para garantir desempenho e confiabilidade. Além disso, optamos pelo Prisma para tornar a interação com o banco de dados uma experiência ainda mais fluida e intuitiva.

Imagine-se registrando uma nova tarefa com apenas alguns cliques, inserindo um título descritivo e uma breve descrição para manter tudo organizado. Com nossa funcionalidade de listagem, todas as suas tarefas cadastradas são exibidas de forma clara e concisa, facilitando a visualização do seu progresso e próximos passos.

E quando surge a necessidade de ajustar algum detalhe em uma tarefa existente, nossa função de edição está à disposição para tornar isso uma tarefa simples. Da mesma forma, se houver uma tarefa que não faça mais parte dos seus planos, a exclusão é tão fácil quanto um clique, liberando espaço para novas conquistas.

Este projeto não é apenas sobre gerenciamento de tarefas; é sobre capacitar você a ser mais produtivo e eficaz em suas atividades diárias. Então, mergulhe de cabeça e descubra como esta API pode transformar a sua maneira de trabalhar.

Não perca mais tempo. Explore o código-fonte, experimente as funcionalidades e deixe-se inspirar pela simplicidade e eficiência do nosso projeto de Backend.

Junte-se a nós nesta jornada e transforme suas tarefas em conquistas!

## Instalação

Se quiser dar uma olhada no projeto, é só clonar o repositório, abrir o código no Visual Studio Code e, no terminal, executar o comando "npm install" para instalar todas as dependências necessárias. Assim, você estará pronto para explorar o projeto em poucos passos simples.

```bash
  npm install
```

## Variáveis de Ambiente

Para rodar este projeto, primeiro, você precisará criar um arquivo chamado .env na raiz do projeto. Em seguida, adicione as seguintes variáveis de ambiente ao seu arquivo .env:

`PORT`

`DATABASE_URL`

No campo PORT, você pode definir a porta de sua preferência.

No campo DATABASE_URL, você pode utilizar o link do seu banco de dados preferido ou o fornecido como exemplo no arquivo exemplo.env para fins de teste.

Se precisar de ajuda, consulte o arquivo exemplo.env para ver como configurar essas variáveis. Com estas configurações, o projeto estará pronto para ser executado.

## Documentação da API

### Requisições

#### Retorna todas as tarefas!

```http
  GET http://localhost:8080/task
```

<img src="./images/rota GET.png">
<br>
<br>
Esta rota retornará um status 200 junto com um objeto que contém:

Um campo "code" com o valor 200, indicando o sucesso da requisição.

Uma mensagem de sucesso da requisição.

Um campo "data" que contém um array de objetos.

Cada objeto neste array representa uma tarefa cadastrada e possui os seguintes campos:

"idTask": o identificador único da tarefa.

"title": o título da tarefa.

"description": a descrição da tarefa.

<img src="./images/retorno da requisicao do get.png" >
<br>
<br>

Além disso, esta rota pode retornar um status 500, indicando um erro interno. Neste caso, a resposta será um objeto contendo:

Um campo "ok" com o valor false.
Um campo "message" contendo uma mensagem de erro.

<img src="./images/status 500.png">
<br>
<br>
<hr>
#### Criar Uma tarefa!

```http
  POST http://localhost:8080/task/create
```
<img src="./images/rota Create.png" >
<br>
<br>

| Parâmetro     | Tipo     | Descrição                               |
| :------------ | :------- | :-------------------------------------- |
| `title`       | `string` | **Obrigatório**. para criar uma tarefa. |
| `description` | `string` | **Obrigatório**. para criar uma tarefa. |

<br>
<br>
<img src="./images/objeto json.png" >
<br>
<br>

Esta rota retornará um status 200 e um objeto com os seguintes campos:

"code": 200, indicando o sucesso da requisição.

Uma mensagem de sucesso da requisição.

Um campo "data" contendo um array de objetos. Cada objeto representa uma tarefa cadastrada e inclui os seguintes campos:

"idTask": o identificador único da tarefa.

"title": o título da tarefa.

"description": a descrição da tarefa.
<br>
<br>
<img src="./images/resposta de criação da rota post.png" >
<br>
<br>
Caso uma propriedade não seja passada no corpo da requisição ou seja uma string vazia, a rota retornará um status 400. A resposta conterá um objeto com os seguintes campos:

"code": 400.
Uma mensagem indicando que todos os dados devem ser fornecidos.
<br>
<br>
<img src="./images/resposta 400 create.png" >
<br>
<br>

Além disso, esta rota também pode retornar um status 500 em caso de erro interno. Nesse caso, a resposta será um objeto contendo:

"ok": false.
Um campo "message" contendo uma mensagem de erro.

<img src="./images/status 500.png">
<br>
<br>
<hr>
#### Atualizar uma Tarefa!

```http
  PUT http://localhost:8080/task/update/${id}
```
<img src="./images/rota put.png" >
<br>
<br>

| Parâmetro     | Tipo     | Descrição                              |
| :------------ | :------- | :------------------------------------- |
| `idTask`      | `string` | **Obrigatório**. Atualizar uma tarefa. |
| `title`       | `string` | Aqui o título que vai atualizar.       |
| `description` | `string` | Aqui descrição que vai atualizar.      |

<br>
<br>
<img src="./images/objeto json.png" >
<br>
<br>

Para atualizar uma tarefa, é necessário passar o ID da tarefa como parâmetro e, no corpo da requisição, incluir o título e a descrição que deseja atualizar.

Esta rota retornará um status 200 e um objeto com os seguintes campos:

"code": 200, indicando o sucesso da requisição.

Uma mensagem de sucesso da requisição.

Um campo "data" contendo um array de objetos.

Cada objeto representa uma tarefa cadastrada e inclui os seguintes campos:

"idTask": o identificador único da tarefa.

"title": o título da tarefa.

"description": a descrição da tarefa.
<br>
<br>
<img src="./images/objeto json.png" >
<br>
<br>

Caso não seja passado um ID no parâmetro, a rota retornará um status 404. A resposta conterá um objeto com os seguintes campos:

"code": 404.
Uma mensagem indicando que não foi encontrado o recurso.

<img src="./images/resposta not found do put.png" >
<br>
<br>

Além disso, esta rota também pode retornar um status 500 em caso de erro interno.

Nesse caso, a resposta será um objeto contendo:

"ok": false.
Um campo "message" contendo uma mensagem de erro.
<img src="./images/status 500.png">
<br>
<br>
<hr>
#### Deletar uma tarefa!

```http
  DELETE http://localhost:8080/task/delete/${id}
```

| Parâmetro | Tipo     | Descrição                                             |
| :-------- | :------- | :---------------------------------------------------- |
| `id`      | `string` | **Obrigatório**. O ID da tarefa que você quer deletar |

<img src="./images/rota do delete.png" >
<br>
<br>

Para deletar uma tarefa, é obrigatório passar o ID da tarefa como parâmetro.

Esta rota retornará um status 200 e um objeto com os seguintes campos:

"code": 200, indicando o sucesso da requisição.

Uma mensagem de sucesso da requisição.

Um campo "data" contendo um array de objetos.

Cada objeto representa uma tarefa cadastrada e inclui os seguintes campos:

"idTask": o identificador único da tarefa.

"title": o título da tarefa.

"description": a descrição da tarefa.

<img src="./images/resposta do delete.png" >
<br>
<br>

Caso não seja passado um ID no parâmetro, a rota retornará um status 404. A resposta conterá um objeto com os seguintes campos:

"code": 404.
Uma mensagem indicando que o recurso não foi encontrado.

<img src="./images/resposta not found do put.png" >
<br>
<br>

Além disso, esta rota também pode retornar um status 500 em caso de erro interno. Nesse caso, a resposta será um objeto contendo:

"ok": false.
Um campo "message" contendo uma mensagem de erro.

<img src="./images/status 500.png">
<br>
<br>

## Autor

desenvolvido por: Leandro Fernandes.

Linkedin: https://www.linkedin.com/in/leandro-fernandes-nascimento/

Espero que tenha gostado, obrigado por visitar meu projeto!!!
