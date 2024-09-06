/*
OBJETO
  - Uma coleção de dados e/ou funcionalidades;
  - Podem ter propriedades e métodos;
*/

  //Criar um objeto vazio:
  const obj = {}
  console.log(obj)

  //Criar um objeto com propriedades e métodos:
  const user = {
    email: "ricardorwo@bol.com.br",
    age: 18,
    name: {
      first_name: "Ricardo",
      lastName: "Oliveira",
    },
    address: {
      street: "rua Antônio Pereira",
      number: "35",
      city: "Itajubá",
      postal_code: "37501-061",
    },
    message: function() {
      console.log("oi Ricardo")
    }
  }


  //Acessando propriedades de métodos usando a notação de ponto.

  console.log(user.email)

  console.log(user.name.first_name)

  //Executa o métodos do objeto
  user.message()
