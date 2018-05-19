var map;
var infoWindow;
var currentCourse = -1;
var courseone = [
['One', 59.356746, 18.069228],
['Two', 59.357555, 18.074120],
['Three', 59.359107, 18.069356],
['Four', 59.360178, 18.060473],
['Five', 59.357312, 18.076309],
['Six', 59.355846, 18.075837]
];
var centerone = {lat:59.359107, lng:18.069356};

var coursetwo = [
['Seven', 59.363150, 18.082661],
['Eight', 59.365314, 18.089656],
['Nine', 59.366450, 18.084249],
['Ten', 59.365793, 18.094377],
['Eleven', 59.362709, 18.095149],
['Twelve', 59.360674, 18.091158]
];
var centertwo = {lat:59.366450, lng:18.084249};

var coursethree = [
['Thirteen', 59.326099, 18.068928],
['Fourteen', 59.324412, 18.067254],
['Fifthteen', 59.322747, 18.070773],
['Sixteen', 59.323556, 18.074635],
['Seventeen', 59.324825, 18.072103],
['Eightteen', 59.324058, 18.075837]
];
var centerthree = {lat: 59.324825, lng:18.072103};


function initMap() {
	// Map options
	console.log("init")
	try {
		map = new google.maps.Map(document.getElementById("map"),  {
			zoom:14,
			center:{lat: 59.3498092, lng:18.0684758},
			disableDefaultUI: true
		});
	} catch (error) {
		console.log(error)
	}
	console.log("init done")
	currentCourse = -1;
}

function dropCourseone() {
	map.setCenter(centerone);
	map.setZoom(14);
	var marker, i;
	for (i = 0; i < courseone.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(courseone[i][1], courseone[i][2]),
        map: map,
        animation: google.maps.Animation.DROP
      });
	}
	document.getElementById("chooseCourseContainer").style.display = "None";
	//document.getElementById("stopwatchContainer").style.display = "Block"
	currentCourse = 1;
}

function dropCoursetwo() {
	map.setCenter(centertwo);
	map.setZoom(14);
	var marker, i;
	for (i = 0; i < coursetwo.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coursetwo[i][1], coursetwo[i][2]),
        map: map,
        animation: google.maps.Animation.DROP
      });
	}
	document.getElementById("chooseCourseContainer").style.display = "None";
	//document.getElementById("stopwatchContainer").style.display = "Block"
	currentCourse = 2;
}

function dropCoursethree() {
	map.setCenter(centerthree);
	map.setZoom(14);
	var marker, i;
	for (i = 0; i < coursethree.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coursethree[i][1], coursethree[i][2]),
        map: map,
        animation: google.maps.Animation.DROP
      });
	}
	document.getElementById("chooseCourseContainer").style.display = "None";
	//document.getElementById("stopwatchContainer").style.display = "Block"
	currentCourse = 3;
}

function resetMap() {
	
	if(currentCourse >= 1) {
		var courseTime = document.getElementById('time' + currentCourse);
		courseTime.innerHTML = document.getElementById('time').textContent;
	}
	
	for(i = 1; i<=6; i++) {
		var stamp = document.getElementById('c' + i);
		if (stamp.hasChildNodes()) {
			img = stamp.getElementsByTagName('img')[0];
			if(img != null) {
				stamp.removeChild(img);
			}
		}
	}
	
	document.getElementById("tabbar").setActiveTab(2);
	//document.getElementById("stopwatchContainer").style.display = "None"
	document.getElementById("chooseCourseContainer").style.display = "Block";
}
