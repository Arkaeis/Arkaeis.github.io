// Open sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "150px";
	document.getElementById("menuButt").innerHTML = "&#9776 Hide";
	document.getElementById("menuButt").style.color = "#fffaf6";
	document.getElementById("menuButt").onclick = closeNav;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
	document.getElementById("menuButt").innerHTML = "&#9776; Menu";
	document.getElementById("menuButt").style.color = "#1f4626";
	document.getElementById("menuButt").onclick = openNav;
}

function openTab(tabName) {
	var i;
	var x = document.getElementsByClassName("column right tab");
	for (i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	
	document.getElementById(tabName).style.display = "block";
}

function openTab(tabName, buttonName) {
	var i;
	var x = document.getElementsByClassName("column right tab");
	for (i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	
	var x = document.getElementsByClassName("button");
	for (i = 0; i < x.length; i++){
		x[i].style.color = "#4c7253";
	}
	
	var op = 0.05;  // initial opacity
    
	
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        document.getElementById(tabName).style.opacity = op;
        document.getElementById(tabName).style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
	
	document.getElementById(tabName).style.display = 'block';
	document.getElementById(buttonName).style.color = "#fffaf6";
}