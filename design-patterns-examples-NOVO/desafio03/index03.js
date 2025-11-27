// 3 - GRASP Controller

class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  class UserController {
    createUser(name) {
      const user = new User(name);
      console.log(`Usuário ${user.name} criado com sucesso!`);
      return user;
    }
  }
  
  const controller = new UserController();
  controller.createUser("Arthur");
  
