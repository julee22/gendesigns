var projectList = [
	{
		name: "breeze",
		bgColorHex: '#e6f3f8',
		priColorHex: '#3893d6',
		accentColorHex: '#f15a24',
		image: 'url("../images/breeze/Breeze-App-Multiple.png")',
		imgArray:  [{
				name: "img01",
				link: "../images/breeze/Primary Research Diary_1.jpg",
				caption: "Mind Map Diary Study Outline & Example"
			},
			{
				name: "img02",
				link: "../images/breeze/Primary Research Diary_7.jpg",
				caption: 'Mind Map Entry'
			},
			{
				name: "img03",
				link: "../images/breeze/Primary Research Diary_2.jpg",
				caption: '5 Whys Diary Study Outline & Example'
			},
			{
				name: "img04",
				link: "../images/breeze/Primary Research Diary_6.jpg",
				caption: '5 Whys Entry'
			},
			{
				name: "img05",
				link: "../images/breeze/Fridge Preliminary sketches_Page_1.jpg",
				caption: 'Product Concept Sketches'
			},
			{
				name: "img06",
				link: "../images/breeze/Fridge Preliminary sketches_Page_2.jpg",
				caption: 'UX Concept Sketches'
			},
			{
				name: "img07",
				link: "../images/breeze/Fridge Preliminary sketches_Page_3.jpg",
				caption: 'UX Concept Sketches'
			},
			{
				name: "img08",
				link: "../images/breeze/User-Persona.jpg",
				caption: 'Sample Persona of Fridge User'
			},
			{
				name: "img09",
				link: "../images/breeze/Breeze-Info-Architecture.jpg",
				caption: 'Information Architecture of BREEZE App'
			},
			{
				name: "img10",
				link: "../images/breeze/Logo Ver 3.png",
				caption: 'BREEZE Logo Color Version'
			},
			{
				name: "img11",
				link: "../images/breeze/YSDN4004_ChandrG_BREEZE Poster.jpg",
				caption: 'BREEZE Poster, 24 in x 18 in'
			}]
	},
	{
		name: "deepblue",
		bgColorHex: '#ffffff',
		priColorHex: '#00008b',
		accentColorHex: '#f15a24',
		image: 'url("../images/breeze/Breeze-App-Multiple.png")'
	},
	{
		name: "tdsb",
		bgColorHex: '#ffffff',
		priColorHex: '#63c900',
		accentColorHex: '#f15a24',
		image: 'url("images/Tdsb Main.jpg")'
	},
	{
		name: "hani",
		bgColorHex: '#fff079',
		priColorHex: '#ff8f00',
		accentColorHex: '#885a9a',
		image: 'url("../images/hani/hani-trans.png")',
		imgArray:  [{
				name: "img01",
				link: "../images/hani/earphone sketches_Page_1.jpg",
				caption: "Preliminary Sketches"
			},
			{
				name: "img02",
				link: "../images/hani/earphone sketches_Page_2.jpg",
				caption: 'Preliminary Sketches'
			},
			{
				name: "img03",
				link: "../images/hani/earphone sketches_Page_3.jpg",
				caption: 'Preliminary Sketches'
			},
			{
				name: "img04",
				link: "../images/hani/earphone sketches_Page_4.jpg",
				caption: 'Preliminary Sketches'
			},
			{
				name: "img05",
				link: "../images/hani/earphone sketches_Page_5.jpg",
				caption: 'Preliminary Sketches'
			},
			{
				name: "img06",
				link: "../images/hani/IMG_3850.JPG",
				caption: 'Initial Paper Prototypes'
			},
			{
				name: "img07",
				link: "../images/hani/IMG_3860.JPG",
				caption: 'Different Artboards & Materials'
			},
			{
				name: "img08",
				link: "../images/hani/IMG_3893.JPG",
				caption: 'Prototypes of Plushies'
			}]
	},
	{
		name: "home",
		priColorHex: '#000000'
	}

];

var mainImage;
var bgColor;
var priColor;
var accentColor;

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
}

var imageList = [];
var imageCap;
var imageLink;


function changeImg(imageId) {
	var image = imageList.find(image => image.name == imageId);
	imageCap = image.caption;
	imageLink = image.link;
}


var borderColor;


function changeNavColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	//console.log(projectId);
	borderColor = project.priColorHex;
}


$(document).ready(function()
{

	//populate images
	for (var n = 0; n < imageList.length; n++) {
		//console.log(imageList.length);
		var popImg = document.getElementById(imageList[n].name);
		//console.log(imageList[n].link);
		popImg.src = imageList[n].link;
	}

	console.log(mainImage);
	$("#cover").css("background-image", mainImage);

	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var modalImg = document.getElementById("modImg");
	var captionText = document.getElementById("caption");
	$(".clickImg").click(function(){
		//console.log("clicked");
		changeImg(this.id);
		modalImg.src = imageLink;
		captionText.innerHTML = imageCap;
	});

	$(".nav-link").hover(
		function(){
			changeNavColor(this.id);
  			$(this).css("border-left-color",borderColor);
  			$(this).css("background-color",borderColor);
  		}, function(){
  			$(this).removeAttr("style");
		}
  	);
});

// Fade in Scroll
$('.row').fadeInScroll();

$('.carousel').carousel({
  interval: false,
});

/* CUSTOM NAV

function mobNav(x) {
	var y = document.getElementById("menu");
	var addMenuBg = document.getElementsByClassName("menu-bar");
	var menuBg = addMenuBg[0];


	$(window).resize(function() {
		menuBg.classList.remove('menu-bar-bg');
		y.classList.remove('show');
		y.classList.remove('responsive');
	});

  	console.log(menuBg);
	if (x.matches) {
		if (y.className === "collapse") {
			y.className += " responsive show";
			menuBg.classList.toggle("menu-bar-bg");
		} else {
			y.className = "collapse";
			menuBg.classList.toggle("menu-bar-bg");
		}
	} else {
		y.classList.toggle("show");
		menuBg.classList.toggle("menu-bar-bg");
	}
  	console.log(x.matches);
}*/
