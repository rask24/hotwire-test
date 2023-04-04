import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['counter'];
  static values = {num: Number};
  static classes = ['positive', 'negative'];

  connect() {
    console.log('calc');
  }

  increment() {
    ++this.numValue;
  }

  decrement() {
    --this.numValue;
  }

  reset() {
    this.numValue = 0;
  }

  numValueChanged() {
    this.counterTarget.textContent = this.numValue;
    this.element.classList.toggle(this.positiveClass, this.numValue > 0);
    this.element.classList.toggle(this.negativeClass, this.numValue < 0);
    console.log(this.counterTarget);
  }
}