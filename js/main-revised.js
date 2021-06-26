var projectList = [
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
	},/*

	{
		name: "tdsb",
		color: "#63c900",
		bgColorHex: '#ffffff',
	},
*/];

var borderColor;
var barColor;


function changeNavColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	borderColor = project.color;
}


function changeBarColor(projectNum) {
	var project = projectList[projectNum];
	barColor = project.bgColorHex;
}

//JQUERY
$(document).ready(function()
{
	// Change color of navigation
	$(".main-title").hover(
		function(){
			var mainTitle = $(this).children("a");
			changeNavColor(mainTitle[0].id);
  			$(mainTitle[0]).css("border-left","6px solid " + borderColor);
  			$(mainTitle[0]).css("font-weight","700");
  			//$(":header").addClass("textShad");
  		}, function(){
			var mainTitle = $(this).children("a");
  			$(mainTitle[0]).removeAttr("style");
  			//$(":header").removeClass("textShad");
		}
	);


	var bar = document.getElementById("background-bar");
	var listOfProjects = document.getElementsByClassName("project");

	//Set initial bar color
	changeBarColor(0);
	$(bar).css("background-color",barColor);

	var activeProj = $("#projectList").children(".project");
	$(activeProj[0]).css("opacity","1");

	// Event changing the bar color
	$("#projectList").scroll(function() {

		for (var i = 0; i < projectList.length; i++){
			var selectedProject = activeProj[i];
			var projectOffset = selectedProject.getBoundingClientRect();
			var top = projectOffset.top + 25;
			var height = projectOffset.bottom;

			if (top < 0) {
				console.log(i + " is not visible");
				$(activeProj[i]).removeAttr("style");
				console.log("opacity removed from " + i);
			} else 	if ((top <= window.innerHeight && top > 0) || height > 100) {
				console.log(i + " is visible");
				console.log(top + " is less than "+ window.innerHeight);
				console.log(height + " + "+ top + " is the height of the element");
				changeBarColor(i);
				$(bar).css("background-color",barColor);
				$(activeProj[i]).css("opacity","1");
				console.log("opacity added to " + i);
				break;
			}

		}
	});



});

