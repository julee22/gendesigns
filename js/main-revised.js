var projectList = [
	{
		name: "manulife-vitality",
		color: "#f15d22",
		bgColorHex: '#00bf66',
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
	console.log(projectId,"project name");
	barColor = project.bgColorHex;
	$("#background-bar").css("background-color",barColor);
	// also change menu bar color
	$("#navbar").css("background-color",barColor+"F7");
}


// Main function to show project
function showProject() {
	
	var activeProj = $("#projectList").children(".project");

	// If mobile
	const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	
	// Changing parameters depending on header height
	var headerHeight;
	const headerOffset = $("header")[0].getBoundingClientRect();
	headerHeight = headerOffset.bottom-25;

	if (window.innerWidth >=768) {
		$("#projectList").css("margin-top",headerHeight);
	} 

	window.addEventListener('resize', (event) => {
		if (window.innerWidth >=768) {
			//Get height of header
			// const headerOffset = $("header")[0].getBoundingClientRect();
			// headerHeight = headerOffset.bottom-25;
			console.log("header height is "+  headerHeight);
			$("#projectList").css("margin-top",headerHeight);
		}	else {
			$("#projectList").css("margin-top","0");
		}
	}, true);

	// shows all projects immediately if mobile
	if (isMobile) {
		for (var i = 0; i < projectList.length; i++) {
			$(activeProj[i]).css("opacity","1");
		}
	// } else {
	// 	$(activeProj[0]).css("opacity","1");
	}

	// Checks if project is in view and decides fades in/out
	for (var i = 0; i < projectList.length; i++){
		var selectedProject = activeProj[i];
		var projectOffset = selectedProject.getBoundingClientRect();
		var top = projectOffset.top;
		var height = projectOffset.bottom;


		if (top < headerHeight /2 - 25) {
			if (!isMobile && window.innerWidth >=768) {
				$(activeProj[i]).removeAttr("style");
				console.log("hide "+  i);
			}
		} else if ((top <= window.innerHeight && top > -50) || height > 100) {
			changeBarColor(projectList[i].name);
			if (!isMobile) {
				$(activeProj[i]).css("opacity","1");
				console.log("show "+  i);
			}
			break;
		}
	}
}


//JQUERY
$(document).ready(function() {

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

	// Sets project background and shows image
	showProject();

});


// Event changing the bar color and image
$(document).scroll(function() {
	showProject();
});