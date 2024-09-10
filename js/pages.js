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
	// $(':root').css("--cursor-img","url(../images/cursor-"+projectName+".png), url(../images/cursor-default.png), auto");
	// $(':root').css("--pointer-img","url(../images/pointer-"+projectName+".png), url(../images/pointer-default.png), auto");
	currProj = projectName;
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




// Generates carousel indicators automatically
function generateCarouselIndicators(numberOfSlides, targetCarousel) {
	var indicatorWrapper = document.querySelector(".carousel-indicators");
	
	for (var i = 0; i < numberOfSlides; i++) {
		var newIndicator = document.createElement('li');
		newIndicator.setAttribute("data-target", targetCarousel);
		newIndicator.setAttribute("data-slide-to", i);

		if (i == 0) {
			newIndicator.classList.add("active");
		}

		indicatorWrapper.appendChild(newIndicator);
	}
}


$(document).ready(function()
{

	// Set cover image to mainImage
	$("#cover").attr('src',mainImage);


	// Populate images in Lightbox gallery
	for (var n = 0; n < imageList.length; n++) {
		//console.log(imageList.length);
		var popImg = document.getElementById(imageList[n].name);
		if (popImg) {
			popImg.src = imageList[n].link;
		}
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


  	//CAROUSEL JS
	const listOfSlides = document.querySelectorAll(".carousel-item");
	generateCarouselIndicators(listOfSlides.length, "#feature-slider");


  	//Stops auto when carousel out of viewport
	const slider = document.querySelector('.carousel');
	$(slider).carousel('pause');
	// console.log("carousel is paused");

	if (slider) {
		$(document).scroll(function(){

			const box = slider.getBoundingClientRect();
		  	if (box.top >= -100 &&
		        box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100)
		  	{
				$(slider).carousel({cycle: true, interval: 3000, pause: 'hover'});
				// console.log("carousel is running");
			} else {
				// console.log("carousel is not in view and paused");
				$(slider).carousel('pause');
			}
		});
	}

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

	// CHANGING FOOTER
	var randNum = Math.ceil(Math.random() * (lengthProj -1));
	var randProj = projectList[randNum];

 	// Ensures the footer project is not the same as the current project page and NOT other
	while (currProj == randProj.name || randProj.name == 'other') {
		randNum = Math.ceil(Math.random() * (lengthProj -1));
		randProj = projectList[randNum];
	}

	// Setting Image & Text 
	const randImg = document.getElementById("random-image");
	const randLink = document.getElementById("random-link");
	const randLinkImg = document.getElementById("random-link-img");
	
	if (randImg && randLink && randLinkImg) {
		randImg.src = randProj.image;
		randLink.href = randProj.name + ".html";
		randLinkImg.href = randLink.href;

		// Deals with titles that have spaces
		var hasSpace = randProj.name.indexOf('-');
	
		// console.log("Has Space? " + hasSpace);
		if (hasSpace > -1) {
			const firstString = randProj.name.substring(0,hasSpace);
			const secondString = randProj.name.substring(hasSpace+1,randProj.name.length);
			randLink.innerHTML = firstString + " " + secondString;
		} else {
			randLink.innerHTML = randProj.name;
		}
	}



	// Fade in Scroll
	$('.container').fadeInScroll();

});


// Close menu when scrolling
$(window).scroll(function() {
	$('.collapse').collapse('hide');
});
