$(function(){
	//Jq Slider
	var width = 720;
	var animationSpeed = 3000;
	var pause = 3000;
	var currentSlide = 1;
	
	function animateSlider() {
		$('.slider .slides').animate({'margin-left': '-=' + width}, animationSpeed, function(){
			currentSlide++;
			if( currentSlide === $('.slider .slide').length){
				currentSlide = 1;
				$('.slider .slides').css('margin-left',0);
			}
		});
	}

	var sliderInt = setInterval(animateSlider, pause);
	
	//jS Slider
	var jsSlides = document.querySelectorAll('.jsslide');
	var btnLeft = document.querySelector('.btn.left');
	var btnRight = document.querySelector('.btn.right');
	var activeSlide = 0;
	
	//Clear images
	function reset(){
		for (var i = 0; i < jsSlides.length; i++){
			jsSlides[i].style.display = 'none';
		}
	}
	
	//Init Slider
	function startSlider(){
		reset();
		jsSlides[0].style.display = 'block';
	}
	
	//Show prev
	function slideLeft(){
		reset();
		jsSlides[activeSlide - 1].style.display = 'block';
		activeSlide--;
	}
	
	//Show next
	function slideRight(){
		reset();
		jsSlides[activeSlide + 1].style.display = 'block';
		activeSlide++;
	}
	
	//Click left btn
	btnLeft.addEventListener('click', function(){
		if(activeSlide === 0){
			activeSlide = jsSlides.length;
		}
		slideLeft();
	});
	
	//Click right btn
	btnRight.addEventListener('click', function(){
		if(activeSlide === jsSlides.length - 1){
			activeSlide = -1;
		}
		slideRight();
	});

	startSlider();

});


