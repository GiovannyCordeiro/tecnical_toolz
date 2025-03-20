// app/javascript/controllers/input_validation_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "button"];

  connect() {
    this.validate(); // Verificar se o botão deve estar desativado quando a página é carregada
    console.log(this.inputTarget)
    console.log(this.buttonTarget)
  }

  validate() {
    const button = this.buttonTarget;
    const valueInput = this.inputTarget.value.length;
    console.log(this.inputTarget.value.length)
    if (valueInput <= 2) {
      button.disabled = true;  // Desativa o botão
    } else {
      button.disabled = false; // Habilita o botão
    }
  }
}
