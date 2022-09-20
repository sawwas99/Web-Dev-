//CRUDCalculator.js
//Use data attributes in HTML file to not mix with the CSS classes
const numberButtons = document.querySelectorAll('[data-number]') 
//create const variables to store the buttons, querySelectorAll lets us get all elements that match a string
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    
    delete() {
    }
    
    appendNumber(number) {
    }
    
    chooseOperation(operation) {
    }
    
    compute() {
    }
    
    updateDisplay() {
    }
}
eviousOperandTextElement, currentOperandTextElement)
