/* 
    Briana Omori
    STUDIO 1: MADLIBS JS 
    Feb. 13, 2020 
    WINTER 2020
*/ 
(function(){
    "use script";
    
    document.getElementById("myForm").addEventListener("submit", function(event){

        /* prevent default behavior of submitting the form */
        event.preventDefault(); 
    
        /* collects all input values and stores into a var formData */
        var allFormInput = document.querySelectorAll("input[type=text]");
    
        /* array to hold input values */
        const var holdInputValues = [];
    
        /* retrieves all input values and puts each value into inputValues array one at a time */
        for (var i=0; i<allFormInput.length; i++){
            holdInputValues.push(allFormInput[i].value);
        }
    
        /* Calls to generate a MadLib */
        generateMadLib(holdInputValues);
    });
    
    function generateMadLib(inputValues){
    
        /* MadLib to be outputted after form is submitted */
        var madLibQuote = `It is ${inputValues[0]} that ${inputValues[3]} the ${inputValues[1]} by ${inputValues[2]} in a fascinating or ${inputValues[4]} fashion an object which impresses us`;
    
        /* Retrieve the MadLib container */
        const var madLibContainer = document.getElementById('madLibQuote');
    
        /* Change the MadLib container's contents into the MadLib Quote*/            
        madLibContainer.innerHTML = `<p>${madlibQuote}</p>`;
    
        /* Change the class of the MadLib container so that it's visible */        
        madLibContainer.setAttribute("class", "visible");
    }
}() );