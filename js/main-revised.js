var projectList = [
	{
		name: "breeze",
		color: "#3893d6",
		bgColorHex: '#e6f3f8',
	},
	{
		name: "hani",
		color: "#ff8f00",
		bgColorHex: '#fff079',
	},/*
	{
		name: "deepblue",
		color: "#00008b",
		bgColorHex: '#ffffff',
	},

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

	$(".main-title a").hover(
		function(){
			changeNavColor(this.id);
  			$(this).css("border-left","6px solid " + borderColor);
  			//$(":header").addClass("textShad");
  		}, function(){
  			$(this).removeAttr("style");
  			//$(":header").removeClass("textShad");
		}
	);


	var bar = document.getElementById("background-bar");
	var listOfProjects = document.getElementsByClassName("project");

	//Set initial
	changeBarColor(0);
	$(bar).css("background-color",barColor);

	// Event
	$(window).scroll(function() {


		/*for (var i = 0; i < listOfProjects.length; i++) {
			var projectOffset = listOfProjects[i].getBoundingClientRect();
			var top = projectOffset.top;
			console.log(top);
			if (top >=0 && top <=500) {
			console.log("I'm visible");
				changeBarColor(i);
				$(bar).css("background-color",barColor);
			}

		}*/
		for (var i = 0; i < projectList.length; i++){
			var selectedProject = document.getElementById(projectList[i].name);
			var projectOffset = selectedProject.getBoundingClientRect();
			var top = projectOffset.top;
			
			if (top <= window.innerHeight) {
				changeBarColor(i);
				$(bar).css("background-color",barColor);
			}
		}
	});
}
);


$('.main-title').fadeInScroll();