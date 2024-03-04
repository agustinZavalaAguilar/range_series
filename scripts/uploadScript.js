let processedResults = [];

function submitRuleAndJSON() {
    const rule = document.getElementById('ruleInput').value;
    const jsonInput = document.getElementById('jsonInput');
    
    if (jsonInput.files.length === 0) {
        alert('Please select a JSON file.');
        return;
    }

    const jsonFile = jsonInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const jsonContent = event.target.result;
        console.log('Submitted Rule:', rule);
        console.log('Uploaded JSON Content:', jsonContent);
        
        // processing the rule and JSON content
        processedResults = processRuleAndJSON(rule, jsonContent);
        displayResults();
        //downloadResults();
    };

    reader.readAsText(jsonFile);
}

function processRuleAndJSON(rule, jsonContent) {
    try {
        // Create a function from the rule using new Function
        const ruleFunction = new Function('number', `return ${rule}`);

        // Parse the JSON content
        const jsonData = JSON.parse(jsonContent);

        // Process each number in the JSON data using the interpreted rule
        return jsonData.map(number => {
            const range = ruleFunction(number);
            return { number, range };
        });
    } catch (error) {
        alert('Error processing rule and JSON content. Please check your input.');
        return [];
    }
}

function displayResults() {
    const resultsOutput = document.getElementById('resultsOutput');
    resultsOutput.innerText = JSON.stringify(processedResults, null, 2);
}

function downloadResults() {
    const filename = 'processed_results.json';
    const content = JSON.stringify(processedResults, null, 2);
    const blob = new Blob([content], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}