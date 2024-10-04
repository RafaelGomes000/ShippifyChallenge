# 🔴 Shippify Challenge

Teste técnico para desenvolvedor back end pela shippify

### Pré-requisitos

Dependências instaladas no projeto: 

```
express
mysql2
express async error
nodemon
body parser
```

## Executando os testes

Foram disponilizadas URLs das APIs para testes direto no Postman

getAllDrivers
```
http://localhost:3306/api/drivers/
```

addDriver
```
http://localhost:3306/api/drivers/adddriver
```

getVehiclesByDriver
```
http://localhost:3306/api/vehicles/getvehiclebydriver
```

addVehicle
```
http://localhost:3306/api/vehicles/addvehicle
```

## Dificuldades

* **JWT** - Primeira vez tendo contato com JWT para criação de token, acabei não conseguindo adicionar ao projeto, um ponto que deixei destacado para meus estudos.
* **Regras de exceções nas APIs** - Regras de verificação de ID existente entre outras, tentei de diversas formas, inclusive com Procedure, porém não obtive sucesso, as APIs funcionam perfeitamente, mas não possuem as verificações solicitadas.
* **Tarefas opcionais** - Algumas eram novas para mim, como a integração com memória cache REDIS,  ao tentar adicionar algumas das funcionalidades opcionais, acabei quebrando outras partes do código, então decidi seguir somente com as entregas obrigatórias.

 ## Considerações finais

 Apesar das dificuldades encontradas durante o desenvolvimento, este projeto foi muito importante para meus estudos. Gostaria de deixar claro o meu interesse para o aprendizado de todas as funcionalidades que não obtive sucesso neste projeto. Qualquer dúvida ou sugestão, estou a total disposição!
