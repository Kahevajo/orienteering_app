var map;
var infoWindow;
var courseone = [
['One', 59.356746, 18.069228],
['Two', 59.357555, 18.074120],
['Three', 59.359107, 18.069356],
['Four', 59.360178, 18.060473],
['Five', 59.357312, 18.076309],
['Six', 59.355846, 18.075837]
];

var coursetwo = [
['Seven', 59.363150, 18.082661],
['Eight', 59.365314, 18.089656],
['Nine', 59.366450, 18.084249],
['Ten', 59.365793, 18.094377],
['Eleven', 59.362709, 18.095149],
['Twelve', 59.360674, 18.091158]
];

var coursethree = [
['Thirteen', 59.326099, 18.068928],
['Fourteen', 59.324412, 18.067254],
['Fifthteen', 59.322747, 18.070773],
['Sixteen', 59.323556, 18.074635],
['Seventeen', 59.324825, 18.072103],
['Eightteen', 59.324058, 18.075837]
];


function initMap() {
	// Map options
	console.log("init")
	try {
		map = new google.maps.Map(document.getElementById("map"),  {
			zoom:14,
			center:{lat: 59.3498092, lng:18.0684758}
		});
	} catch (error) {
		console.log(error)
	}
	console.log("init done")
}

function dropCourseone() {
	var marker, i;
	for (i = 0; i < courseone.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(courseone[i][1], courseone[i][2]),
        map: map,
        animation: google.maps.Animation.DROP
      });
	}
<<<<<<< HEAD
}

function dropCoursetwo() {
	var marker, i;
	for (i = 0; i < coursetwo.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coursetwo[i][1], coursetwo[i][2]),
        map: map,
        animation: google.maps.Animation.DROP
      });
	}
}

function dropCoursethree() {
	var marker, i;
	for (i = 0; i < coursethree.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coursethree[i][1], coursethree[i][2]),
        map: map,
        animation: google.maps.Animation.DROP
      });
	}
}

$timeout(initMap(),100);$timeout(initMap(),100);
=======
}
>>>>>>> bde01cda2d33aa325f87ed70e0997b33c9dd4076
