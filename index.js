document.addEventListener("DOMContentLoaded", function() {
    const inputForm = document.getElementById("inputForm");
    const inputTextarea = document.getElementById("inputTextarea");
    const result = document.getElementById("result");
    const outputForm = document.getElementById("outputForm");
    
    inputForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const stringData = inputTextarea.value;
        try {
            const resultData = JSON.parse(stringData);
            showData(resultData);
        } catch (error) {
            alert("Please enter valid json data.");
        }
    });
    
    function showData(data) {
        outputForm.innerHTML = "";
        for (const key in data) {
            const label = document.createElement("label");
            label.textContent = key;
            
            const input = document.createElement("input");
            input.type = "text";
            input.name = key;
            input.value = data[key];
            
            const lineBreak = document.createElement("br");
            
            outputForm.appendChild(label);
            outputForm.appendChild(input);
            outputForm.appendChild(lineBreak);
        }
        inputForm.style.display = "none";
        result.style.display = "block";
    }
});
