'use strict'
const calculator = () => {
  const calculatorBtn = document.querySelector('.calculator__btn');
  const calculatorBox = document.querySelector('.main-box');
  const buttonPlus = document.querySelector('.calculator__add-btn');
  const otherItemsPercent = document.querySelectorAll('.other-items.percent');
  const otherItemsNumber = document.querySelectorAll('.other-items.number');

  const inputRange = document.querySelector('.rollback input');
  let inputRangeValue = document.querySelector('.rollback .range-value');

  const btnStart = document.getElementsByClassName('handler__btn')[0];
  const btnReset = document.getElementsByClassName('handler__btn')[1];

  const total = document.getElementsByClassName('total-input')[0];
  const totalCount = document.getElementsByClassName('total-input')[1];
  const totalCountOther = document.getElementsByClassName('total-input')[2];
  const fullTotalCount = document.getElementsByClassName('total-input')[3];
  const totalCountRollback = document.getElementsByClassName('total-input')[4];

  let screens = document.querySelectorAll('.screen');

  const mainControlsBox = document.querySelector('.main-controls__box');

  calculatorBtn.addEventListener('click', () => {
    calculatorBtn.classList.toggle('calculator__btn--none')
    calculatorBox.classList.toggle('main-box--none')
  });

  const appData = {
    screens: [],
    count: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    isError: false,

    reset: function () {
      const screensSelect = document.querySelector('.screen select');
      const screensInput = document.querySelector('.screen input');
      screensSelect.disabled = false;
      screensInput.disabled = false;
      btnStart.style.display = 'flex';
      btnReset.style.display = 'none';
      total.value = 0;
      totalCount.value = 0;
      totalCountOther.value = 0;
      fullTotalCount.value = 0;
      totalCountRollback.value = 0;
      inputRange.value = 0;
      inputRangeValue.textContent = '0%';
      screens.forEach((item, i) => {

        const select = item.querySelector('select');
        const inputScreen = item.querySelector('input[type=text]');

        select.disabled = false;
        inputScreen.disabled = false;

        select.selectedIndex = 0;
        inputScreen.value = '';

        if (i !== 0) {
          item.remove();
        }
      });
    },

    checkValues: function () {
      this.isError = false;
      screens.forEach((screen) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input[type=text]');

        if (select.value !== '' || input.value.trim() !== '') {
          this.isError = true;
        }
      });

      if (this.isError) {
        this.start();
      } else {
        alert('Заполни поля типы и количество экранов');
        this.reset();
      }
    },

    init: function () {
      btnStart.addEventListener('click', () => {
        let screensSelect = document.querySelectorAll('.screen select');
        let screensInput = document.querySelectorAll('.screen input');

        screensSelect.forEach((item) => {
          item.disabled = true;
        });

        screensInput.forEach((item) => {
          item.disabled = true;
        });
        btnStart.style.display = 'none';
        btnReset.style.display = 'flex';
        this.checkValues();
      });
      btnReset.addEventListener('click', () => {
        this.reset();
      });
      buttonPlus.addEventListener('click', this.addScreenBlock)
      inputRange.addEventListener('input', () => {
        inputRangeValue.textContent = inputRange.value + ' %';
        this.rollback = inputRange.value;
      })
    },

    start: function () {
      this.addScreens()
      this.addServices()
      this.addPrices()
      // this.logger()
      this.showResult()
    },

    // isNumber: function (num) {
    //   return !isNaN(parceFloat(num)) && isFinite(num)//Проверка на число
    // },
    showResult: function () {
      total.value = this.screenPrice;
      totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
      fullTotalCount.value = this.fullPrice;
      totalCountRollback.value = this.servicePercentPrice;
      totalCount.value = this.count;
    },
    addScreens: function () {
      screens = document.querySelectorAll('.screen');
      screens.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;

        this.screens.push({
          id: index,
          item: selectName,
          price: +select.value * +input.value
        })

        this.count += +input.value;
      })
    },
    addServices: function () {
      otherItemsPercent.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if (check.checked) {
          this.servicesPercent[label.textContent] = +input.value
        }
      });

      otherItemsNumber.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if (check.checked) {
          this.servicesNumber[label.textContent] = +input.value
        }
      })
    },
    addScreenBlock: function () {
      const cloneScreen = screens[0].cloneNode(true);
      mainControlsBox.append(cloneScreen);
    },
    addPrices: function () {
      for (let screen of this.screens) {
        this.screenPrice += +screen.price
      }
      for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key]
      }
      for (let key in this.servicesPercent) {
        this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
      }

      this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
      this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback) / 100);
    },
    logger: function () {
      console.log(this.fullPrice);
      console.log(this.servicePercentPrice);
      console.log(this.screens);
    }
  }
  appData.init()
}

export default calculator