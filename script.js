const historyList = document.getElementById('history-list'); // Get the history list element
const clearHistoryButton = document.getElementById('clear-history'); // Get the clear history button element

function appendToResult(value) {
    document.getElementById('result').value += value; // Append the value to the result input field
}

function clearResult() {
    document.getElementById('result').value = ''; // Clear the result input field
}

function calculateResult() {
    const result = document.getElementById('result').value; // Get the value from the result input field
    let calculatedResult;

    try {
        calculatedResult = eval(result); // Evaluate the expression
        appendToHistory(result, calculatedResult); // Append the expression and result to the history
    } catch (error) {
        calculatedResult = 'Error'; // Handle any errors during evaluation
    }

    document.getElementById('result').value = calculatedResult; // Set the result input field with the calculated result
}

function appendToHistory(expression, result) {
    const historyItem = document.createElement('li'); // Create a new list item
    historyItem.textContent = `${expression} = ${result}`; // Set the text content of the list item
    historyList.appendChild(historyItem); // Append the list item to the history list
}

function clearHistory() {
    historyList.innerHTML = ''; // Clear the content of the history list
}
