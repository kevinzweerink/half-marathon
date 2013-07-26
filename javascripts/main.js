function MileCounter(options) {
	this.milesArray = options.mileages;
	this.totalMiles = 0;

	this.addMileages = function() {
		var _this = this;
		var total = 0;
		for (var i = 0; i < _this.milesArray.length; i+=1) {
			total += _this.milesArray[i];
			console.log(total);
		}
		return total;
	}

	this.insertMiles = function() {
		$(".count").text(this.totalMiles.toFixed(2) + " miles logged");
	}

	this.totalMiles = this.addMileages();
	this.insertMiles();
}