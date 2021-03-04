var projectList = [
	{
		name: "breeze",
		color: "#3893d6",
		bgImageLink: 'url("images/breeze/Breeze Main.jpg")'
	},
	{
		name: "deepblue",
		color: "#00008b",
		bgImageLink: 'url("images/Deep Blue Main.jpg")'
	},
	{
		name: "tdsb",
		color: "#63c900",
		bgImageLink: 'url("images/Tdsb Main.jpg")'
	},
	{
		name: "hani",
		color: "#ff0000",
		bgImageLink: 'url("images/Hani Main.jpg")'
	},

];

var bgImage;
var borderColor;


function changeNavColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	//window.alert("project");
	bgImage = project.bgImageLink;
	borderColor = project.color;
}


//JQUERY
$(document).ready(function()
{
	//changeNavColor($(".nav-item").id).css("border-top-color",borderColor);
	/*for (var i = 0; i < $(".nav-item").length; i++) {
		var elem =$(".nav-item")[i];
		var idName = elem.id;
		changeNavColor(idName);
		$(elem).css("border-top-color",borderColor);
		$(elem).css("color",borderColor);

	}*/

	$(".nav-item").hover(
		function(){
			changeNavColor(this.id);
  			$("#bg").css("background-image",bgImage);
  			$("#bg").addClass("fading");
  			$(this).css("border-left-color",borderColor);
  			$(this).css("background-color",borderColor);
  			$("#jumbotron").css("background-color", "rgba(250,250,250,.5)");
  			//$(":header").addClass("textShad");
  		}, function(){
		 	$("#bg").css("background-image","none");
  			$("#bg").removeClass("fading");
  			$(this).removeAttr("style");
  			$("#jumbotron").removeAttr("style");
  			//$(":header").removeClass("textShad");
		}
	);
}
);