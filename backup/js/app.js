'use strict';

class SieveOFEratosthenes {
  constructor() {
    this.init();
    this.initListeners();
    this.total = parseInt(this.getElementValue('sieve-input'));
    this.board = this.getElementById('sieve-board');
    this.elements = this.generateElements();
    this.appendToBoard();
    this.colors = ['ffc107', 'f44336', 'e91e63', 'ff5722', '9c27b0', '3f51b5', '2196f3', '4caf50'];
  }

  resetElementsStyles() {
    for (const e of this.elements) {
      e.style.backgroundColor = '#fff';
      e.style.color = '#212121';
      e.setAttribute('selected', '');
      e.style.border = '';
      e.classList.remove('prime');
    }
  }

  multipliesOf(n) {
    // this.resetElementsStyles();
    for (const e of this.elements) {
      const value = parseInt(e.getAttribute('value')),
        isSelected = e.getAttribute('selected') === 'true' ? true : false;

      if (value % n == 0 && !isSelected) {
        console.log(`${value} is multiple of ${n}`);
        e.style.background = `#${this.colors[n - 2]}`;
        e.style.color = '#fff';
        e.setAttribute('selected', true);
      }
    }
  }
  onAction(e) {
    const type = parseInt(e.target.getAttribute('data-type'));
    this.multipliesOf(type);
  }
  onPrime() {
    // this.resetElementsStyles();
    const aux = [];
    for (const e of this.elements) {
      const value = parseInt(e.getAttribute('value'));
      if (value === 1 || aux.indexOf(value) !== -1) continue;

      for (let i = value + 1; i <= this.elements.length; i++) {
        if (i % value == 0) aux.push(i);
      }
      // primes.push(value);
      // const newElement = document.createElement('div');
      // newElement.style.background = '#212121';
      // e.style.background = '';
      // e.parentNode.insertBefore(newElement);
      // e.style.color = '#fff';
      e.style.border = '5px dotted #FF9800';
      e.classList += ' prime';
      // e.style.backgroundColor = '#212121';
    }

    // console.log(aux);
    // console.log(primes);
  }
  init() {
    this.input = this.getElementById('sieve-input');
    this.btns = document.getElementsByName('action').forEach(btn => {
      btn.addEventListener('click', this.onAction.bind(this));
    });

    this.clear = this.getElementById('clear');
    this.prime = this.getElementById('prime');
    console.log(this.btns);
  }
  initListeners() {
    this.input.addEventListener('input', _.debounce(this.onChanges.bind(this), 500));
    this.clear.addEventListener('click', this.onClear.bind(this));
    this.prime.addEventListener('click', this.onPrime.bind(this));
  }

  onClear() {
    console.log('CLEAR');
    this.resetElementsStyles();
  }
  onChanges(event) {
    if (event.target.value === '') return;
    this.total = parseInt(event.target.value);
    if (this.total < 20) {
      this.total = 20;
      alert(`I SAID DON'T BE STUPID!`);
      this.setElementValue('sieve-input', this.total);
      return;
    }
    // } else if (this.total > 150) {
    //   this.total = 150;
    //   alert(`I SAID DON'T BE STUPID!`);
    //   this.setElementValue('sieve-input', this.total);
    //   return;
    // }

    this.elements = this.generateElements();
    this.clearBoard();
    this.generateGridStyles();
    this.appendToBoard();
  }

  generateGridStyles() {
    this.board.style.display = 'grid';
    // this.board.style.gridAutoRows = '4rem';
    if (this.total >= 20 && this.total < 30) this.board.style.gridTemplateColumns = `repeat(5,1fr)`;
    else if (this.total >= 30 && this.total < 40) this.board.style.gridTemplateColumns = `repeat(6,1fr)`;
    else if (this.total >= 40 && this.total < 50) this.board.style.gridTemplateColumns = `repeat(8,1fr)`;
    else {
      this.board.style.gridTemplateColumns = `repeat(10,1fr)`;
    }
    // this.board.style.gridAutoRows = '10rem';
    // this.board.style.gridAutoColumns = '10rem';
  }

  clearBoard() {
    this.board.innerHTML = '';
  }
  appendToBoard() {
    for (const element of this.elements) {
      // console.log(element);
      this.board.appendChild(element);
    }
  }

  generateElements() {
    const elements = [];
    for (let i = 0; i < this.total; i++) {
      const element = document.createElement('div');
      element.className = 'sieve-item';
      element.innerHTML = i + 1;

      element.setAttribute('value', i + 1);
      elements.push(element);
    }
    // console.log(this.elements);
    return elements;
  }

  setElementValue(id, value) {
    document.getElementById(id).value = value;
  }
  getElementValue(id) {
    return document.getElementById(id).value;
  }
  getElementById(id) {
    return document.getElementById(id);
  }
}

new SieveOFEratosthenes();
