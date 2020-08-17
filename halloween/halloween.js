$(document).ready(function () {
    function parseDate(str) {
	var mdy = str.split('/')
	return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }

    function daydiff(first, second) {
	return Math.ceil((second-first)/(1000*60*60*24));
    }

    var now = new Date();
    var thisYear = now.getFullYear();
    var thisMonth = now.getMonth();
    var halloween = new Date(thisMonth < 10 ? thisYear : thisYear + 1, 9, 31);

    var diff = daydiff(now, halloween);
    $("#days").text(diff);
})
