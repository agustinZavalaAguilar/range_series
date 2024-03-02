//store the ranges in an array of objects
const labelRanges = [
    {label: 'A', lowerBound: 0, upperBound: 6},
    {label: 'B', lowerBound: 5, upperBound: 7},
    {label: 'C', lowerBound: 6, upperBound: 8},
    {label: 'D', lowerBound: 7, upperBound: 9},
    {label: 'E', lowerBound: 8, upperBound: 10}
];

function getMatchingLabels(){
    const numberInput = document.getElementById('numberInput').value;
    let resultContainer = document.getElementById('result');
    console.log(numberInput);


//erase previous results
resultContainer.innerHTML = "";

//converting  the input to a number
let inputNumber = parseInt(numberInput);

//obtain an array of object whose lower and upper bounds match the input number
let filteredLabelRanges = labelRanges.filter(function(range){
    return inputNumber >= range.lowerBound && inputNumber <= range.upperBound;
});                            

//fom the former array, obtain a new one containg only the labels
let matchingLabels = filteredLabelRanges.map(function(range){
    return range.label;
});

displayResult(matchingLabels); 
}

//display the result
function displayResult(labelArray){
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = labelArray.length > 0 
    ?  `Étiquette(s) correspondante(s) : ${labelArray.join(', ')}`
    : "Il n'y a pas d'étiquettes correspondates";
};

