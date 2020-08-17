document.addEventListener("DOMContentLoaded", function(event) { 
    var yesno, detail;
    var wintry = {
        2018: [22, 21],
        2019: [23, 22],
        2020: [22, 21],
        2021: [22, 21],
        2022: [23, 21],
        2023: [23, 21],
        2024: [22, 21],
        2025: [22, 21]
    };
    var now = new Date();
    var year = now.getFullYear();
    var start = new Date(year, 8, wintry[year][0]);
    var end = new Date(year, 11, wintry[year][1]);
    if (now < start) {
        yesno = "NO :(";
        detail = "Not until September " + wintry[year][0];
    } else if (now > start && now < end) {
        yesno = "YES :D";
        detail = ":D Happiness until December " + wintry[year][1] + "! :D";
    } else {
        yesno = "NO :(";
        detail = "Not until September " + wintry[year+1][0] + " next year...";
    }
    document.querySelector("#yesno").textContent = yesno;
    document.querySelector("#detail").textContent = detail;
});
