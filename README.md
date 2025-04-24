# *🌪️ Twisters API*

>Essa API foi feita com o objetivo de poder ajudar pessoas de locais que mais sofrem casos de devastações por tornados no
>mundo.

## *🔍 Ferramentas Utilazadas:*

-Node Js
-Nodemon
-Express

## *👨‍💻 Como rodar o projeto?*

>-Pode instalar o Node.js (versão 18 ou superior)
>-ou
>-Você pode testar as rotas usando um cliente HTTP (como Thunder Client ou Postman) ou digitar os endpoints no seu
>navegador http://localhost:3000/

## *📍 Endpoints da API:*

link para a requisição:<http://localhost:3000/Twisters/serveryt/>

# GET >*/serveryt/medio*

Retorna todos os dados com *Severity: Médio*

# GET >*/serveryt/alto*

Retorna todos os dados com *Severity: Alto*

# GET >*/serveryt/critico*

Restorna todos os dados com *Severity: Crítico*

## *🗃️ Estrutura de Pastas:*

>src/
>├── routes/          : Define as rotas da API.
>        |-- principal.routes/        : Retorna tudo o que haja na pasta alerts.js.
>        |-- serverity.routes/        : Possui as requisições dos niveis de periculosidade dos tornados.
>├── alerts.js/            : Aquivo que se encontra todos os dados de alertas.
>├── server.js/            : Arquivo de inicialização do servidor.
