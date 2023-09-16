Certamente, aqui está um exemplo de um arquivo `README.md` para um projeto no GitHub que envolve um CRUD com backend em NestJS, utilizando o Prisma como provider para o banco de dados PostgreSQL em um container Docker:

```markdown
# Projeto de CRUD com NestJS, Prisma e PostgreSQL em Docker

Este é um projeto de exemplo que demonstra a criação de um aplicativo CRUD utilizando o framework NestJS para o back-end, o Prisma como provider para interação com o banco de dados PostgreSQL e o Docker para gerenciar o ambiente de desenvolvimento.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas e dependências instaladas em seu sistema:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [NestJS](https://nestjs.com/) (v8 ou superior)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuração do Banco de Dados

Este projeto utiliza o PostgreSQL em um container Docker. Para configurar o banco de dados, siga estas etapas:

1. Navegue até a raiz do projeto.

2. Execute o seguinte comando para iniciar o container Docker:

```bash
docker-compose up -d
```

Isso iniciará um container PostgreSQL com as configurações definidas no arquivo `docker-compose.yml`.

## Configuração do Back-end (NestJS e Prisma)

1. Navegue até a pasta `backend`:

```bash
cd backend
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Configure as variáveis de ambiente em um arquivo `.env` na pasta `backend`. Um exemplo de configuração de variáveis de ambiente pode ser encontrado em `.env.example`.

4. Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

5. Inicie o servidor NestJS:

```bash
npm run start:dev
```

O servidor estará disponível em `http://localhost:3000`.

## Uso

Você pode agora utilizar o CRUD através das rotas fornecidas pelo servidor NestJS para realizar operações CRUD na entidade desejada.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

```

Lembre-se de personalizar este arquivo de acordo com os detalhes específicos do seu projeto, como nome da entidade CRUD, configurações do banco de dados, rotas da API, entre outros. Certifique-se também de incluir os detalhes de licença apropriados e informações adicionais relevantes para os colaboradores e usuários do seu projeto.