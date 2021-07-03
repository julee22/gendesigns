// Sets the color scheme for each page
var mainImage;
var bgColor;
var priColor;
var accentColor;
var currProj;

const lengthProj = projectList.length;

function changeProj(projectName) {
	var project = projectList.find(project => project.name == projectName);
		mainImage = project.image;
		bgColor = project.bgColorHex;
		priColor = project.priColorHex;
		accentColor = project.accentColorHex;
		imageList = project.imgArray;
	$(':root').css("--bgColor",bgColor);
	$(':root').css("--priColor",priColor);
	$(':root').css("--accentColor",accentColor);
	currProj = projectName;
}


// For setting the NavColor
var borderColor;

function changeNavColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	borderColor = project.priColorHex;
}



$(document).ready(function()
{
	// Change Background
	var tempProj;
	var i =  1;

	function changeBgAnim() {
		console.log(i + " equals " + lengthProj);
		if (i == lengthProj) {
			i = 1;
		}
		console.log(i + " is less than " + lengthProj);
		tempProj = projectList[i];
		$('.bg-color').css("background-color",tempProj.bgColorHex);
		$('.button').css("color",tempProj.accentColorHex);
		$('.button').css("border-left-color",tempProj.accentColorHex);
		$('.navbar').css("background-color",tempProj.bgColorHex);
		console.log("changing background to " + tempProj.name);
		i++;
	}
	
	setInterval(() => { changeBgAnim() }, 5000);


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



// Close menu when scrolling
$(window).scroll(function() {
	$('.collapse').collapse('hide');
});
