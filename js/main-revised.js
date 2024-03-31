var projectList = [
	{
		name: "manulife-vitality",
		color: "#f15d22",
		bgColorHex: '#00e982',
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

const lengthProj = projectList.length;



function changePageLinkColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	if (project) {
		borderColor = project.color;
	}
}


function changeBarColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	if (project) {
		console.log(projectId,"project name");
		barColor = project.bgColorHex;
		$(".bg-color").css("background-color",barColor);
	}
}


// Main function to show project
function showProject(projectId) {
	var mainImg;
	mainImg = document.getElementById(projectId+"-img");
	mainImg.classList.toggle("hide");
}


//JQUERY
$(document).ready(function() {
	var isMobile = /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	const listOfTitle = document.getElementsByClassName("main-title");
	var mainTitle;
	const defaultImg = document.getElementById("default-img");

	// Change color of all titles
	for (var i = 0; i < listOfTitle.length; i++) {
		mainTitle = listOfTitle[i];
		changePageLinkColor(mainTitle.id);
		$(mainTitle).css("border-left-color",borderColor);

		if (!isMobile || window.innerWidth >= 764){
			mainTitle.addEventListener("mouseover", function() {
				changeBarColor(this.id);
				showProject(this.id);
				defaultImg.classList.add("hide");
			});
			mainTitle.addEventListener("mouseout", function() {
				$(".bg-color").css("background-color", '#fafafa');
				showProject(this.id);
				defaultImg.classList.remove("hide");
			})
		}
	}


	// Change Background
	var tempProj;
	var i =  1;

	function changeBgAnim() {
		console.log(i + " equals " + lengthProj);
		if (i == lengthProj) {
			i = 1;
		}
		tempProj = projectList[i];
		$('.bg-color').css("background-color",tempProj.bgColorHex);
		$('.button').css("border-left-color",tempProj.accentColorHex);

		//Checks if mobile
		if(isMobile || window.innerWidth <=764) {
			$('.navbar').css("background-color",tempProj.bgColorHex);
		}
		i++;
	}
	window.addEventListener('resize', (event) => {
		if (!isMobile || window.innerWidth >= 764){
			$('.navbar').css("background-color",'transparent');
		}
	}, true);
	setInterval(() => { changeBgAnim() }, 5000);

});

