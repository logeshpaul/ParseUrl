// Main Javascript File

(function() {

	// Variable declaration
	/*
	var product = {};
	var _firstProductURL, _secondProductURL;

	$('.compare').click(function() {
		var product._firstProductURL = $('.first-product').val();
		var product._secondProductURL = $('.second-product').val();
	});

	// Fetch data from the website
	function fetchContent() {

	}
	*/
	$.get('http://www.corsproxy.com/www.lazada.vn/nokia-105-man-hinh-mau-14-xanh-76651.html', function(response) {
		// $('.product-content').append(response)

		var productDetail = $(response).find("div#prd-detail-page");
		console.log(productDetail);

		$('.product-content').append(productDetail);
  });

	// $.get('http://www.corsproxy.com/en.wikipedia.org/wiki/http', function(response) {
	// 	console.log(response);

	// 	//var productDetail = $(response).find("div#prd-detail-page");
	// 	//console.log(productDetail);

	// 	//$('.product-content').append(productDetail);
	// });

		//console.log($('.container'));

		/*data = $('.container');
		data = ["1","2","3"];

		$.jqml([ 'div', {
		    'id' : 'mydiv',
		    'class' : 'colors borders'
		}, [ 'p' ]]);

		$.jqml([ 'table', (function( data ) {
		    var dataRows = [ 'tbody' ];
		    for ( var i = 0; i < data.length; i++ ) {
		        dataRows.push([ 'tr', [ 'td', data[ i ]]]);
		    }
		    return dataRows;
		}( data ))]);
		*/


		//var titleList = $.getJSON(response);

		//var productData = JsonML.fromHTMLText(productDetail);
		//console.log(productData);
		

		/*
		$.jqml([ 'table', (function( productDetail ) {
		    var dataRows = [ 'tbody' ];
		    for ( var i = 0; i < productDetail.length; i++ ) {
		        dataRows.push([ 'tr', [ 'td', productDetail[ i ]]]);
		    }
		    return dataRows;
		}( productDetail ))]);
		*/

})();

