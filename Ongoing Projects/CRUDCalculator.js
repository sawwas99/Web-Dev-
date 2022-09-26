//CRUDCalculator.js
//Q? - Why does currentOperandTextElement and previousOperandTextElement ignore the 'TextElement' variable part
//Create classes at top of file
class Calculator{ 
    //construct calculator object
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
        this.currentOperand = this.currentOperand.toString().slice(0,-1)  //convert to a string and chop off the last value of the string. slice from first to 2nd to last value
    }
    
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return //if number already has a '.' then return stops the function
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation) { 
        if (this.currentOperand === '') return //make sure if empty operation nothing passes
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation   //set the operation from calculator equal to the operation that was passed in
        this.previousOperand = this.currentOperand  //dont typing current number 'currentOperand' so place it into 'previousOperand'
        this.currentOperand = ''
    }
    
    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand) //converts string operand into a interger
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return //if prev or current is Not a Number (empty) then end function
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    getDisplayNumber(number){ //TBD: add comma functionality
        const floatNumber = parseFloat(number) //number is a string convert to a float
        if (isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en') 
    }
    
    updateDisplay() {
        //updates the display after a button is clicked
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        
        if (this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`

        }
        else {
            this.previousOperandTextElement.innerText = ''
        }
         
        //this.previousOperandTextElement.innerText = this.previousOperand 

    }
}

//Use data attributes in HTML file to not mix with the CSS classes
const numberButtons = document.querySelectorAll('[data-number]') 
//create const variables to store the buttons, querySelectorAll lets us get all elements that match a string
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//forEach loops over all number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {    //eventListener allows the button to respond to clicks
        calculator.appendNumber(button.innerText)   //add the number of the button to the text
        calculator.updateDisplay()   //updates display after every button click
    })
}) 

//Same but for operations
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)   
        calculator.updateDisplay()
    })
}) 

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})