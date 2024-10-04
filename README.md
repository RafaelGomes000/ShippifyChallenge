# 🔴 Shippify Challenge

Projeto de teste técnico para desenvolvedor back end

### Pré-requisitos

Dependências instaladas no projeto: 

```
express
mysql2
express async error
nodemon
jsonwebtoken
```

### Executando os testes

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

### Dificuldades

* JWT - Primeira vez tendo contato com JWT para criação de token, acabei não conseguindo adicionar ao projeto, um ponto que deixei destacado para meus estudos.
* Regras de exceções nas APIs - Regras de verificação de ID existente entre outras, tentei de diversas formas, inclusive com Procedure, porém não obtive sucesso, as APIs funcionam perfeitamente, porém não possuem as verificações solicitadas.
* Tarefas opcionais - Algumas eram novas para mim, como a integração com memória cache REDIS,  ao tentar adicionar algumas das funcionalidades opcionais, acabei quebrando outras partes do código, então decidi seguir somente com as entregas obrigatórias.
