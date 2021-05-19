var projectList = [
	{
		name:"home",
		bgColorHex: '#ffffff',
		priColorHex: '#000000',
		accentColorHex: '#ececec'
	},
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
			},
			{
				name: "img12",
				link: "../images/breeze/Breeze Main.jpg",
				caption: 'BREEZE App Mock Ups'
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
			},
			{
				name: "img09",
				link: "../images/hani/IMG_4175.JPG",
				caption: ''
			},
			{
				name: "img10",
				link: "../images/hani/Hani Design Awards Main.jpg",
				caption: ''
			},
			{
				name: "img11",
				link: "../images/hani/Hani Design Awards image 2.jpg",
				caption: ''
			},
			{
				name: "img12",
				link: "../images/hani/IMG_4220.JPG",
				caption: ''
			},
			{
				name: "img13",
				link: "../images/hani/IMG_3997.JPG",
				caption: ''
			},
			{
				name: "img14",
				link: "../images/hani/GChandra_Hani Photos_Page_2.jpg",
				caption: ''
			}]
	},
	{
		name: "home",
		priColorHex: '#000000'
	}

];



// Sets the color scheme for each page
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


// For each image that uses lightbox Gallery
var imageList = [];
var imageCap;
var imageLink;


function changeImg(imageId) {
	var image = imageList.find(image => image.name == imageId);
	imageCap = image.caption;
	imageLink = image.link;
}


// For setting the NavColor
var borderColor;

function changeNavColor(projectId) {
	var project = projectList.find(project => project.name == projectId);
	borderColor = project.priColorHex;
}


$(document).ready(function()
{

	// Set cover image to mainImage
	$("#cover").css("background-image", mainImage);


	// Populate images in Lightbox gallery
	for (var n = 0; n < imageList.length; n++) {
		//console.log(imageList.length);
		var popImg = document.getElementById(imageList[n].name);
		//console.log(imageList[n].link);
		popImg.src = imageList[n].link;
	}

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


	// Dynamically change color of nav
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


  	//CAROUSEL JS
  	//Stops auto when carousel out of viewport
	const slider = document.querySelector('.carousel');

	$(document).scroll(function(){

		const box = slider.getBoundingClientRect();
	  	if (box.top >= -100 &&
	        box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100)
	  	{
			$('.carousel').carousel({interval: 1500, pause: 'hover'});
		} else {
			$('.carousel').carousel('pause');
		}
	});


	// Color Swatches
	// Select all that have class colorSwatch
	var colorPalette = document.getElementsByClassName('colorSwatch');

	// Recurse through list of objects
	for (var n = 0; n < colorPalette.length; n++) {

		// Get hexVal
		var hexVal = colorPalette[n].innerHTML;

		// Set border-left as hexVal
		$(colorPalette[n]).css("border-left-color",hexVal);

	}


	//mobile swipe
	//$('.carousel').bcSwipe({ threshold: 50 });

});

// Fade in Scroll
$('.row').fadeInScroll();


// Close pop-up menu when scrolling
$(window).scroll(function() {
	//Get menu
	var navbar = document.getElementById("menu");
	//remove show class
	navbar.classList.remove('show');
});
