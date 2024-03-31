
// Opens accordion
function openAcc(accordionId) {
	const allAccordions = document.getElementsByClassName("accordion-content");
	var accordionContent = document.getElementById(accordionId);

	// stores bool of whether accordion was already opened
	var alreadyOpen = false;
	if(accordionContent.classList.contains("active")) {
		alreadyOpen = true;
	}
	
	// hides all open accordions first
	for (var i = 0; i < allAccordions.length; i++) {
		allAccordions[i].classList.remove("active");
	}
	// checks if the selected accordion was already open. If yes, do nothing as all accordions should be closed
	if (!alreadyOpen) {
		accordionContent.classList.add("active");
	}

	$(accordionContent.children[0]).animate({opacity:1});


	// offsets scroll to element
	const y = accordionContent.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 150;
	console.log(accordionContent.getBoundingClientRect().top, document.body.getBoundingClientRect().top);

	window.scrollTo({behavior: "smooth", top: y,});
}