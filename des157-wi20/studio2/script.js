/* 
    Briana Omori
    STUDIO 2: JS CODE
    WINTER 2020 
*/

(function(){
	
	"use strict";
	
	const selected = document.querySelectorAll('.selected');

	for( let i=0; i<selected.length; i++){
		
		//mouse enter event for desktop
		selected[i].addEventListener("mouseenter", function(event){
				event.preventDefault(); //needed to keep other events from registering
				event.target.setAttribute("class", "selected hover-selected");
		});
		
		//mouse leave event for desktop
		selected[i].addEventListener("mouseleave", function(event){
			event.preventDefault(); //needed to keep other events from registering
			event.target.setAttribute("class", "selected");
		});
		
		//handles touch
		selected[i].addEventListener("touchstart", function(event){
			event.preventDefault(); //needed to keep other events from registering
			
			//if the element has been 'touched', close it
			if(event.target.classList.contains("hover-selected")){
				event.target.setAttribute("class", "selected");
			}
			// if the element has not been touched, close them all then open
			// the one that was touched.
			else{
				// loop through and make sure all are closed.
				for(let i=0; i<selected.length; i++){
					selected[i].setAttribute("class", "selected");
				}
				//open the one that was touched
				event.target.setAttribute("class", "selected hover-selected");
			}
		});
	}//end for loop
}());// end closure