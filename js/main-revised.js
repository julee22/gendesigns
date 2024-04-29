
var borderColor;
var barColor;

const lengthProj = projectList.length;



function changePageLinkColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	if (project) {
		borderColor = project.accentColorHex;
		barColor = project.bgColorHex;
	}
}


function changeBarColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	if (project) {
		console.log(projectId,"project name");
		barColor = project.bgColorHex;
		$(".bg-color").css("--bgColor",barColor);
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

	const listOfTitle = document.getElementsByClassName("project");
	var mainTitle;
	const defaultImg = document.getElementById("default-img");

	// Change color of all titles
	for (var i = 0; i < listOfTitle.length; i++) {
		mainTitle = listOfTitle[i];
		changePageLinkColor(mainTitle.id);
		$(mainTitle).css("--priColor",borderColor);
		$(mainTitle).css("--bgColor",barColor);

		if (!isMobile || window.innerWidth >= 764){
			mainTitle.addEventListener("mouseover", function() {
				changeBarColor(this.id);
				// showProject(this.id);
				// defaultImg.classList.add("hide");
			});
			mainTitle.addEventListener("mouseout", function() {
				$(".bg-color").css("--bgColor", '#fafafa');
				// showProject(this.id);
				// defaultImg.classList.remove("hide");
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
		$('.bg-color').css("--bgColor",tempProj.bgColorHex);
		$('.button').css("border-left-color",tempProj.accentColorHex);

		//Checks if mobile
		if(isMobile || window.innerWidth <=764) {
			$('.navbar').css("--bgColor",tempProj.bgColorHex);
		}
		i++;
	}
	window.addEventListener('resize', (event) => {
		if (!isMobile || window.innerWidth >= 764){
			$('.navbar').css("--bgColor",'transparent');
		}
	}, true);
	setInterval(() => { changeBgAnim() }, 5000);

});

