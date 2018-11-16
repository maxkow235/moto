$(document).ready(function() {
	$(".search-btn").click(function() {
		$(".search-form").submit(function(e) {
			e.preventDefault();
		});
		$($(this).data("toggle")).toggleClass('open');
	});
});