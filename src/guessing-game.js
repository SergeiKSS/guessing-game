class GuessingGame {
    constructor() {
		var min = 0, max = 0, x=0;
		this.min = 0;
    	this.max = 0;
    	this.x = 0;
	}

    setRange(min, max) {
		this.min = min;
    	this.max = max;
    }

    guess() {
		this.x = Math.ceil((this.min + this.max) / 2);
		return this.x;
    }

    lower() {
		this.setRange(this.min, this.x);
    }

    greater() {
		this.setRange(this.x, this.max);
    }
}

module.exports = GuessingGame;
