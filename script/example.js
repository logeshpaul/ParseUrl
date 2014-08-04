/*global Example, JsonML */

// a simple JBST controller
var Example = {

	// current data (model)
	curData : null,
	curView : null,
	curSort : { field : null, desc : false },

	// table view templates
	bandTable : null,
	memberRow : null,

	// list view templates
	bandList : null,
	memberItem : null,

	loadData :  // data loading helper method
		function(/*string*/ url) {
			// quick and dirty data retrieval via JSONP
			var elem = document.createElement("script");
			elem.setAttribute("type","text/javascript");
			elem.setAttribute("src", url+"?jsonp=Example.display");
			document.body.appendChild(elem);
		},

	display : // data binding helper method
		function(/*JSON*/ data, /*JBST*/ view, /*string*/ field){
			// "data" is just a pure JSON graph at this point
			if (data) {
				Example.curData = data;
			}
			if (view) {
				Example.curView = view;
			}

			if (!Example.curData || !Example.curView) {
				return;
			}

			var demo = document.getElementById("ExampleArea");
			if (!demo) {
				return;
			}
			// clear the demo area
			while (demo.lastChild) {
				demo.removeChild(demo.lastChild);
			}

			if (field) {
				Example.sort(field);
			}

			try {
				// combine the JSON and JBST to produce JsonML
				var jsonml = Example.curView.dataBind(Example.curData);

				// convert JsonML graph to DOM
				jsonml = JsonML.toHTML(jsonml);

				// display fully hydrated elements
				demo.appendChild(jsonml);
			} catch (ex) {
				/*jslint debug:true*/
				debugger;
				demo.appendChild(document.createTextNode("Error: "+ex.message));
			}
		},

	sort : // data sorting helper method
		function(/*string*/ field) {
			if (!Example.curData || !field) {
				return;
			}

			// set to ascending if changing, or toggle if same
			Example.curSort.desc = (Example.curSort.field === field) && !Example.curSort.desc;
			Example.curSort.field = field;

			function compare(/*object*/ a, /*object*/ b) {
				a = a[field];
				b = b[field];

				var aIsEmpty = ("undefined" === typeof a || a === null);
				var bIsEmpty = ("undefined" === typeof b || b === null);
				if (aIsEmpty) {
					return bIsEmpty ? 0 : 1;
				}
				if (bIsEmpty) {
					return aIsEmpty ? 0 : -1;
				}
				
				if (a instanceof Array) {
					a = a.join(',');
				}
				if (b instanceof Array) {
					b = b.join(',');
				}

				if (a < b) {
					return -1;
				}
				if (a > b) {
					return 1;
				}
				return 0;
			}

			function reverse(/*object*/ a, /*object*/ b) {
				return -compare(a, b);
			}

			Example.curData.members = Example.curData.members.sort(Example.curSort.desc ? reverse : compare);
		}
};
