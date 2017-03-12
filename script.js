'use strict'

document.addEventListener("DOMContentLoaded", (event) => {
  const expenseInput = document.querySelector('#expense')
  const costInput = document.querySelector('#cost')
  console.log(expenseInput, costInput)
  const state = {
    el: '#app',
    data: {
      expenses: [],
      addExpense () {
        const name = expenseInput.value
        const cost = costInput.value
        console.log(name, cost)
        const date = moment().format('DD.MM.YYYY')
        const expense = {
          date,
          [name]: cost
        }
        this.expenses.push(expense)
        console.log(this.expenses)
      }
    }
  }
  const app = new Vue(state)
})
