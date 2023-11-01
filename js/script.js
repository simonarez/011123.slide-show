const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
	const slides = slideshow.querySelectorAll('.slideshow__slide');
	const controls = slideshow.querySelectorAll('.slideshow__control-button');
	const counter = slideshow.querySelector('.slideshow__counter');

	let index = 0;

	const totalSlides = slides.length;
	const lastIndex = slides.length - 1;

	const setIndex = (newIndex) => {
		index = newIndex;
	};

	const decreaseIndex = () => {
		if (index > 0) {
			index = index - 1;
		} else {
			index = lastIndex;
		}
	};

	const increaseIndex = () => {
		if (index < lastIndex) {
			index = index + 1;
		} else {
			index = 0;
		}
	};

	const renderSlideClass = () => {
		slides.forEach(slide => {
			slide.classList.remove('slideshow__slide--visible');
		});

		slides[index].classList.add('slideshow__slide--visible');
	}

	const renderCounter = () => {
		counter.textContent = `${index + 1} of ${totalSlides}`;
	}

	const changeSlide = (event) => {
		const button = event.currentTarget;

		if (button.dataset.direction === 'previous') {
			decreaseIndex();
		}

		if (button.dataset.direction === 'next') {
			increaseIndex();
		}

		if (button.dataset.index) {
			setIndex(parseInt(button.dataset.index));
		}

		renderSlideClass();
		renderCounter();
	}

	controls.forEach(button => {
		button.addEventListener('click', changeSlide);
	});

})