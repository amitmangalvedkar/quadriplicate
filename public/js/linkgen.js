// Fill the QR image
//Check if location.origin is part of window, if not construct it. Only for IE10 and below. But does anyone.. huh.. :)
if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//"
    + window.location.hostname
    + (window.location.port ? ':' + window.location.port : '');
}

var simulatorURLencoded = window.location.origin + "/ui/%23/1";

//Fill in the simulator URL in span
var simulatorURL = window.location.origin + "/ui/#/1";
document.getElementById("simurl").innerHTML = "<a href="+ simulatorURL +" target=\"_blank\">" + simulatorURL + "</a>";
//email link
document.getElementById("mailme").href = "mailto:?subject=Simulator%20URL&body=Navigate%20to%20-%20" + simulatorURLencoded + "%20for%20simulating%20your%20devices";

// Fill in the QR image
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log(this.response);
		var url = window.URL || window.webkitURL;
		document.getElementById("qrcodeimg").src = url.createObjectURL(this.response);
	}
};
xhttp.open("GET", "/qr?url="+simulatorURLencoded, true);

xhttp.responseType = "blob";
xhttp.send();
