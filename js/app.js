let clicker = {
	clickCount: 0,
	click () {
		this.clickCount += 1;
		console.log(this.clickCount);
	}
}

clicker.click();