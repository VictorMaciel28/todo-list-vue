# App Todo com Node & VueJs

###  Instalação: 

<br/>

```shell

Clone:
git clone https://github.com/VictorMaciel28/todo-list.git

```

#### Banco de dados:

```shell

Ajustar arquivo .env em /backend com credenciais do banco:

DATABASE_URL="mysql://user:password@endereco:porta/todo-list?schema=public"

Exemplo:

DATABASE_URL="mysql://root@localhost:3306/todo-list?schema=public"


```


#### Backend na porta 3030:

```shell

$ cd backend

Baixar dependencias:
$ yarn install

Rodar Migratons:
$ yarn prisma migrate dev --name init

Rodar Seeding
$ yarn prisma db seed

Rodar backend:
$ yarn dev

```


#### Frontend na porta 8080:


```shell

$ cd frontend

Baixar dependencias:
$ npm install

Rodar frontend:
$ npm run serve

```

### Acesso público do Postman com os Endpoints:

https://api.postman.com/collections/16224752-7a9bb16e-ca65-4896-8641-1940ce2b3811?access_key=PMAT-01HCVEWHX70NQSTV1AKVD781V6

#### Imagem da página principal:

<img src="screenshots/edit_func.png">
