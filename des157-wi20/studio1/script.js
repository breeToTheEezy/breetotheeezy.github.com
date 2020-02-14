/* 
    Briana Omori
    STUDIO 1: MADLIBS JS 
    Feb. 13, 2020 
    WINTER 2020
*/ 
(function(){
    "use strict";
    
    document.getElementById("myform").addEventListener("submit", function(event){

        /* Prevent default behavior of submitting the form */
        event.preventDefault(); 
    
        /* Collects all input values and stores into a var formData */
        var allFormInput = document.querySelectorAll("input[type=text]");
    
        /* An array to hold input values */
        var holdInputValues = [];
    
        /* Retrieves all input values and puts each value into inputValues array one at a time */
        for (var i=0; i<allFormInput.length; i++){
            holdInputValues.push(allFormInput[i].value);
        }
    
        /* Calls to generate a MadLib */
        generateMadLib(holdInputValues);
    });
    
    function generateMadLib(inputValues){
    
        /* MadLib to be outputted after form is submitted */
        var madLibQuote = `"It is ${inputValues[0]} that ${inputValues[3]} the ${inputValues[1]} by painting in a ${inputValues[2]} or ${inputValues[4]} fashion an object which impresses us"
        <h1>James Tissot</h1>`;
    
        /* Retrieve the MadLib container */
        const madLibContainer = document.getElementById('madLibQuote');
    
        /* Change the MadLib container's contents into the MadLib Quote*/            
        madLibContainer.innerHTML = `<p>${madLibQuote}</p>`;
    
        /* Change the class of the MadLib container so that it's visible */        
        madLibContainer.setAttribute("class", "visible");
    }
}() );