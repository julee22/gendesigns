
var borderColor;
var barColor;
let nIntervId;

const lengthProj = projectList.length;


function changeBarColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	if (project) {
		barColor = project.bgColorHex;
		$(".bg-color").css("--bgColor",barColor);
	}
}


// Main function to show highlighted project
function showProject(projectId) {
	var mainImg;
	mainImg = document.getElementById(projectId+"-img");
	if (mainImg) {
		$('.main-image').css("opacity", "0");
		mainImg.style.opacity = "1";
	}
	$("#projectImgLink").attr('href', 'pages/'+projectId+'.html');
}



//JQUERY
$(document).ready(function() {

	const listOfTitle = document.getElementsByClassName("project");
	const listOfImages = document.getElementsByClassName("main-image");
	var mainTitle;
	const defaultImg = listOfImages[0];
	console.log(defaultImg);

	// Hover for titles
	for (var i = 0; i < listOfTitle.length; i++) {
		mainTitle = listOfTitle[i];

		if (window.innerWidth >= 764){
			mainTitle.addEventListener("mouseover", function() {
				changeBarColor(this.id);
				showProject(this.id);
				clearInterval(nIntervId);
				nIntervId = null;
				// defaultImg.classList.add("hide");
			});
			mainTitle.addEventListener("mouseout", function() {
				// $(".bg-color").css("--bgColor", '#efefef');
				showProject(this.id);
				if (!nIntervId) {		
					nIntervId = setInterval(rotateProjects, 3000);
				}
				// defaultImg.classList.remove("hide");
			})
		} else {
			var project = projectList.find(project => project.name == mainTitle.id);
			if (project) {
				barColor = project.bgColorHex;
			}
			mainTitle.setAttribute("style","--bgColor: " + barColor);
			console.log(mainTitle);
		}
	}




	if (window.innerWidth >= 764){
		// Change Background + Projects
		defaultImg.style.opacity = "1";
		changeBarColor(listOfTitle[0].id);

		if (!nIntervId) {		
			nIntervId = setInterval(rotateProjects, 3000);
		}
	}

	var n = 0;
	function rotateProjects() {
		if (n == listOfImages.length || n == listOfTitle.length) {
			n = 0;
		}
		showProject(listOfTitle[n].id);
		changeBarColor(listOfTitle[n].id);
		n++;
	}

});

