$(".slides").owlCarousel({
	margin: 10,
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		650: {
			items: 2,
		},
		1000: {
			items: 3,
		},
	},
});
