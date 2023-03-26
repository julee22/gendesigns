var projectList = [
	{
		name: "default",
		color: "#000000",
		bgColorHex: '#d2ceca',
	},
	{
		name: "bespoke",
		color: "#4c7fc1",
		bgColorHex: '#d2ceca',
	},
	{
		name: "breeze",
		color: "#3893d6",
		bgColorHex: '#e6f3f8',
	},
	{
		name: "hani",
		color: "#ff7900",
		bgColorHex: '#ffe98d',
	},
	{
		name: "period-purse",
		color: "#EF3A4C",
		bgColorHex: '#FCDAEF',
	},
];

var borderColor;
var barColor;




function changePageLinkColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	borderColor = project.color;
}


function changeBarColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	barColor = project.bgColorHex;
	$("#background-bar").css("background-color",barColor);
	// also change menu bar color
	$("#navbar").css("background-color",barColor+"F7");
}

function generateCarouselIndicators(numberOfSlides, targetCarousel) {
	var indicatorWrapper = document.querySelector(".carousel-indicators");
	
	for (var i = 0; i < numberOfSlides; i++) {
		var newIndicator = document.createElement('li');
		newIndicator.setAttribute("data-target", targetCarousel);
		newIndicator.setAttribute("data-slide-to", i);

		if (i == 0) {
			newIndicator.classList.add("active");
		}

		indicatorWrapper.appendChild(newIndicator);
	}
}

//JQUERY
$(document).ready(function() {

	// If mobile
	const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	const listOfTitle = document.getElementsByClassName("main-title");
	var mainTitle;
	var mainTitleHov;

	// Change color of all titles
	for (var i = 0; i < listOfTitle.length; i++) {
		mainTitle = listOfTitle[i].firstElementChild;
		changePageLinkColor(mainTitle.id);
		$(mainTitle).css("border-left-color",borderColor);
		console.log(mainTitle.id);
	}


	//Set initial bar color
	changeBarColor("default");


	// Changing parameters depending on header
	var headerHeight;
	const headerOffset = $("header")[0].getBoundingClientRect();
	headerHeight = headerOffset.bottom-25;

	if (window.innerWidth >=768) {
		$("#projectList").css("margin-top",headerHeight);
	} 

	window.addEventListener('resize', (event) => {
		if (window.innerWidth >=768) {
			//Get height of header
			const headerOffset = $("header")[0].getBoundingClientRect();
			headerHeight = headerOffset.bottom-25;
			console.log("header height is "+  headerHeight);
			$("#projectList").css("margin-top",headerHeight);
		}	else {
			$("#projectList").css("margin-top","0");
		}
	}, true);

	// Carousel
	const carousel = document.querySelector('#projectList');
	const carouselItems = document.querySelectorAll(".carousel-item");

	$(carousel).on('slid.bs.carousel', function() {
		console.log("clicked", carouselItems);
		
		for (var i = 0; i < carouselItems.length; i++){
			var activeProject = carouselItems[i];
			
			if (activeProject.classList.contains("active")) {
				console.log("this is the active class");

				var activeProjectId = activeProject.querySelector(".main-title a").id;
				console.log(activeProjectId);
				changeBarColor(activeProjectId);
			}

		}
	});

	// Generates carousel indicators automatically
	const listOfSlides = document.querySelectorAll(".carousel-item");
	generateCarouselIndicators(listOfSlides.length,"#projectList");
});

