import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['window', 'container'];
  static classes = ['hidden'];

  connect() {
    console.log('this is modal controller');
  }

  open() {
    this.windowTarget.classList.toggle(this.hiddenClass);
  }

  close() {
    this.windowTarget.classList.toggle(this.hiddenClass);
  }

  over() {
    this.containerTarget.textContent = 'hello';
  }

  out() {
    this.containerTarget.textContent = 'hover element';
  }
}