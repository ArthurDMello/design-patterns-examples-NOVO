// 1 - SOLID (S)

class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  class UserRepository {
    save(user) {
      console.log(`Usuário ${user.name} salvo no banco!`);
    }
  }
  
  class EmailService {
    sendWelcomeEmail(user) {
      console.log(`E-mail de boas-vindas enviado para: ${user.email}`);
    }
  }
  
  const user = new User("Arthur", "arthur@email.com");
  const repo = new UserRepository();
  const email = new EmailService();
  
  repo.save(user);
  email.sendWelcomeEmail(user);