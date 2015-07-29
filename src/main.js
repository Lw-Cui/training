function isOdd(i) {
	if (i % 2)
		return true;
	else
		return false;
};

(function() {
	for (var i = 1; i <= 20; i++)
		if (isOdd(i))
			console.log(i);

	for (var i = 1; i <= 20; i++)
		console.log(i);
})();