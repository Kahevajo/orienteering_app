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

// var coursetwo = {
// 	1: {lat:59.363150, lng:18.082661};
// 	2: {lat:59.365314, lng:18.089656};
// 	3: {lat:59.366450, lng:18.084249};
// 	4: {lat:59.365793, lng:18.094377};
// 	5: {lat:59.362709, lng:18.095149};
// 	6: {lat:59.360674, lng:18.091158}
// }
// var coursethree ={
// 	1: {lat:59.326099, lng:18.068928};
// 	2: {lat:59.324412, lng:18.067254};
// 	3: {lat:59.322747, lng:18.070773};
// 	4: {lat:59.323556, lng:18.074635};
// 	5: {lat:59.324825, lng:18.072103};
// 	6: {lat:59.324058, lng:18.075837}
// }

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
}

$timeout(initMap(),100);