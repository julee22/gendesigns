
// Opens accordion
function openAcc(elem, accordionId, accordionSet) {
	var allAccordions;
	var accordionContent = document.getElementById(accordionId);
	var accordionTriggers = document.getElementsByClassName("accordion");
	
	if (accordionSet === undefined) {
		allAccordions = document.getElementsByClassName("accordion-content");
	} else {
		allAccordions = document.getElementsByClassName("accordion-content "+accordionSet);
	}

	// stores bool of whether accordion was already opened
	// var alreadyOpen = false;
	// if(accordionContent.classList.contains("active")) {
	// 	alreadyOpen = true;
	// }
	
	console.log( allAccordions.length+ "LENGTH OF "+accordionSet, allAccordions);
	// hides all open accordions first
	for (var i = 0; i < allAccordions.length; i++) {
		allAccordions[i].classList.remove("active");
		accordionTriggers[i].classList.remove("active");
	}
	// checks if the selected accordion was already open. If yes, do nothing as all accordions should be closed
	// if (!alreadyOpen) {
		accordionContent.classList.add("active");
		elem.classList.add("active");
	// }

	$(accordionContent.children[0]).animate({opacity:1});


	// offsets scroll to element
	const y = accordionContent.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 150;
	console.log(accordionContent.getBoundingClientRect().top, document.body.getBoundingClientRect().top);

	window.scrollTo({behavior: "smooth", top: y,});
}