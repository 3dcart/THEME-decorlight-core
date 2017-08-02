jQuery(function () {

	var $window = jQuery(window),
	win_height_padded = $window.height() * 1.1;
	$window.on('scroll', revealOnScroll);

	function revealOnScroll() {
		var scrolled = $window.scrollTop(),
			win_height_padded = $window.height() * 1.1;

		// Showed...
		jQuery(".revealOnScroll:not(.animated)").each(function () {
			var $this = jQuery(this),
				offsetTop = $this.offset().top;

			if (scrolled + win_height_padded > offsetTop) {
				if ($this.data('timeout')) {
					window.setTimeout(function () {
						$this.addClass('animated ' + $this.data('animation'));
						$this.removeClass('revealOnScroll');
					}, parseInt($this.data('timeout'), 10));
				} else {
					$this.addClass('animated ' + $this.data('animation'));
					$this.removeClass('revealOnScroll');
				}
			}
		});
		// Hidden...
		jQuery(".revealOnScroll.animated").each(function (index) {
			var $this = jQuery(this),
				offsetTop = $this.offset().top;
			if (scrolled + win_height_padded < offsetTop) {
				jQuery(this).removeClass('revealOnScroll animated');
			}
		});
	}

	revealOnScroll();
});