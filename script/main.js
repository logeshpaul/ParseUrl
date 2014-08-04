// Main Javascript File
(function() {

	// Variable declaration
	var product = {};
	var _firstProductURL, _secondProductURL;

	// Trigger fetchContent after clicking on the button
	$('#compare').click(function() {
		product._firstProductURL = $('.first-product').val();
		product._secondProductURL = $('.second-product').val();

		if($('.text-input-box .product-field') === "") {
			alert("Please fill in both fields to compare");
		}
		else {
			fetchContent(product._firstProductURL, "first-product");
			fetchContent(product._secondProductURL, "second-product");
		}
		
	});

	// Fetch data from the website
	function fetchContent(productURL, productNumber) {

		var parser = document.createElement('a');
		parser.href = productURL;

		$.get('http://www.corsproxy.com/'+ parser.hostname + parser.pathname, function(response) {

			var productDetail = $(response).find("div#prd-detail-page");

			$('.product-content .'+ productNumber).html(productDetail);
	  	});

	}

	// Show/Hide loading div when there is a http request
	$(document).ajaxStart(function () {
	    $("#loading").show();
	});

	$(document).ajaxComplete(function () {
	    $("#loading").hide();
	});

})();

