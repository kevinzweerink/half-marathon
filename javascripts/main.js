function MileCounter(options) {
	this.milesArray = options.mileages;
	this.totalMiles = 0;

	this.addMileages = function() {
		var _this = this;
		var total = 0;
		for (var i = 0; i < _this.milesArray.length; i+=1) {
			total += _this.milesArray[i];
		}
		return total;
	}

	this.insertMiles = function() {
		$(".count").text(this.totalMiles.toFixed(2) + " miles logged");
	}

	this.totalMiles = this.addMileages();
	this.insertMiles();
}

function MetricInsertion(options) {
	this.calculateKM = function() {
		return options.distance * 1.6;
	}

	this.calculateCelsius = function() {
		return (options.temp - 32) * (5/9);
	}

	this.insertData = function() {
		var degree = '°';
		$(".distance").text(options.distance + " miles / " + this.calculateKM().toFixed(1) + "k");
		$(".temp").text(options.temp + degree + "F / " + this.calculateCelsius().toFixed(0) + degree + "C");
	}

	this.insertData();
}

$(function() {
	// function layOut() {
	// 	var wrapperHeight = $(".wrapper").height();
	// 	var windowHeight = $(window).height();

	// 	console.log($("body").height());
	// 	console.log($(window).height());

	// 	if (wrapperHeight < windowHeight) {
	// 		$(".wrapper").css("height", windowHeight);
	// 		$("footer").css({
	// 			"position" : "absolute",
	// 			"bottom" : "0",
	// 			"width" : "100%"
	// 		});
	// 	} else {
	// 		$(".wrapper").css("height", "auto");
	// 		$("footer").css({
	// 			"position" : "relative",
	// 		});
	// 	}
	// }

	// layOut();

	// $(window).resize(function() {
	// 	layOut();
	// });
});