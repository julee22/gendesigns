var borderColor;
var barColor;
let nIntervId;

const lengthProj = projectList.length;


// For setting the NavColor
var barColor;

function changeBarColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	if (project) {
		barColor = project.bgColorHex;
		$(".bg-color").css("--bgColor",barColor);
	}
}



$(document).ready(function()
{
	// Change Background + Projects
	changeBarColor(projectList[0].bgColorHex);

	if (!nIntervId) {		
		nIntervId = setInterval(rotateProjects, 3000);
	}

	var n = 0;
	function rotateProjects() {
		if (n == lengthProj) {
			n = 0;
		}
		changeBarColor(projectList[n].name);
		n++;
	}
});

