//2 - SOLID (O)

class PaymentMethod {
    pay(amount) {
      throw new Error("Método pay() deve ser implementado");
    }
  }
  
  class CreditCardPayment extends PaymentMethod {
    pay(amount) {
      console.log(`Pagando R$${amount} com cartão de crédito`);
    }
  }
  
  class PixPayment extends PaymentMethod {
    pay(amount) {
      console.log(`Pagando R$${amount} via PIX`);
    }
  }
  
  function processPayment(paymentMethod, amount) {
    paymentMethod.pay(amount);
  }
  
  processPayment(new CreditCardPayment(), 100);
  processPayment(new PixPayment(), 50);