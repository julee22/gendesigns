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
	$("#background-bar").css("background-color",barColor);
}

//JQUERY
$(document).ready(function()
{
	const listOfTitle = document.getElementsByClassName("main-title");
	var mainTitle;
	var mainTitleHov;

	// Change color of navigation
	for (var i = 0; i < listOfTitle.length; i++) {
		mainTitle = listOfTitle[i].firstElementChild;
		changeNavColor(mainTitle.id);
		$(mainTitle).css("border-left","4px solid " + borderColor);
		console.log(mainTitle.id);
	}

	$(".main-title").hover(
		function(){
			mainTitleHov = this.firstElementChild;
  			changeNavColor(mainTitleHov.id);
  			$(mainTitleHov).css("border-left","8px solid " + borderColor);
  			$(mainTitleHov).css("font-weight","700");
  			//$(":header").addClass("textShad");
  		}, function(){
			mainTitleHov = this.firstElementChild;
  			changeNavColor(mainTitleHov.id);
  			$(mainTitleHov).css("border-left","4px solid " + borderColor);
  			$(mainTitleHov).css("font-weight","initial");
		}
	);


	//Set initial bar color
	changeBarColor(0);

	var activeProj = $("#projectList").children(".project");
	$(activeProj[0]).css("opacity","1");

	// Changing parameters depending on header
	var headerHeight;
	const headerOffset = $("header")[0].getBoundingClientRect();
	headerHeight = headerOffset.bottom-25;

	window.addEventListener('resize', (event) => {
		if (window.innerWidth >=768) {
			//Get height of header
			const headerOffset = $("header")[0].getBoundingClientRect();
			headerHeight = headerOffset.bottom-25;
			console.log("header height is "+  headerHeight);
			$("#projectList").css("margin-top",headerHeight);
		}
	}, true);

	if (window.innerWidth >=768) {
		$("#projectList").css("margin-top",headerHeight);
	}

	// Event changing the bar color
	$(document).scroll(function() {

		for (var i = 0; i < projectList.length; i++){
			var selectedProject = activeProj[i];
			var projectOffset = selectedProject.getBoundingClientRect();
			var top = projectOffset.top;
			var height = projectOffset.bottom;

			// console.log(i + " has top of " + top + " and height "+height);
			// console.log("window height is "+  window.innerHeight);
			// console.log("header height is "+  headerHeight);

			if (top < headerHeight /2) {
				$(activeProj[i]).removeAttr("style");
				console.log("hide "+  i);
			} else if ((top <= window.innerHeight && top > -50) || height > 100) {
				changeBarColor(i);
				$(activeProj[i]).css("opacity","1");
				console.log("show "+  i);
				break;
			}

		}
	});


	// Dynamically change color of nav items
	$(".nav-item").hover(
		function(){
			// Give changeNavColor function id of hovered nav-item element
			changeNavColor(this.id);

			// Change css of hovered nav-item element
  			$(this).css("border-left","6px solid "+borderColor);
  		}, function(){
  			$(this).removeAttr("style");
		}
  	);
});

