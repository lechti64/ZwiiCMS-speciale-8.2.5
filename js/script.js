$("#go").on("click", function() {
	$("html, body").animate({
		scrollTop: $("#why").offset().top
	}, "slow");
	return false;
});