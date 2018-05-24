var map;
var infoWindow;
var profile;
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
	profile = getProfile(getCurrentProfile());
	console.log("init")

	var progress = document.getElementById("progress");
	while (progress.firstChild) {
		progress.removeChild(progress.firstChild);
		console.log("wipe")
	}
	
	if (profile.events.length != 0){
		for(i = 0; i < profile.events.length; i++) {
			progress.append(createEvent(profile.events[i][0], profile.events[i][1]));
		}	
	}
	try {
		map = new google.maps.Map(document.getElementById("map"),  {
			zoom:14,
			center:{lat: 59.3498092, lng:18.0684758},
			disableDefaultUI: true
		});
	} catch (error) {
		console.log(error)
	}
	console.log(profile.currentCourse);
	if(!(profile.currentCourse === undefined)) {
		switch (profile.currentCourse) {
			case 1:
			dropCourseone();
			break;
			case 2:
			dropCoursetwo();
			break;
			case 1:
			dropCoursethree();
			break;
			default:
			break;
		}
	}
	console.log("init done")
}

function dropCourseone() {
	map.setCenter(centerone);
	map.setZoom(14);
	var marker, i;
	for (i = 0; i < courseone.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(courseone[i][1], courseone[i][2]),
        map: map,
		animation: google.maps.Animation.DROP, 
		icon: 'control.png'
      });
	}
	document.getElementById("chooseCourseContainer").style.display = "None";
	//document.getElementById("stopwatchContainer").style.display = "Block"
	profile.currentCourse = 1
	updateProfile(profile, getCurrentProfile());
}

function dropCoursetwo() {
	map.setCenter(centertwo);
	map.setZoom(14);
	var marker, i;
	for (i = 0; i < coursetwo.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coursetwo[i][1], coursetwo[i][2]),
        map: map,
		animation: google.maps.Animation.DROP, 
		icon: 'control.png'
      });
	}
	document.getElementById("chooseCourseContainer").style.display = "None";
	//document.getElementById("stopwatchContainer").style.display = "Block"
	profile.currentCourse = 2
	updateProfile(profile, getCurrentProfile());
}

function dropCoursethree() {
	map.setCenter(centerthree);
	map.setZoom(14);
	var marker, i;
	for (i = 0; i < coursethree.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(coursethree[i][1], coursethree[i][2]),
        map: map,
		animation: google.maps.Animation.DROP, 
		icon: 'control.png'
      });
	}
	document.getElementById("chooseCourseContainer").style.display = "None";
	//document.getElementById("stopwatchContainer").style.display = "Block"
	profile.currentCourse = 3
	updateProfile(profile, getCurrentProfile());
}

function resetMap() {
	profile.events.push([document.getElementById('time').textContent, profile.currentCourse]);

	var progress = document.getElementById("progress");
	while (progress.firstChild) {
		progress.removeChild(progress.firstChild);
	}

	console.log("a");

	for(i = 0; i < profile.events.length; i++) {
		progress.append(createEvent(profile.events[i][0], profile.events[i][1]));
	}
	console.log("b");
	
	for(i = 1; i<=6; i++) {
		var stamp = document.getElementById('c' + i);
		if (stamp.hasChildNodes()) {
			img = stamp.getElementsByTagName('img')[0];
			if(img != null) {
				stamp.removeChild(img);
			}
		}
	}
	
	profile.currentCourse = undefined;
	updateProfile(profile, getCurrentProfile());
	document.getElementById("tabbar").setActiveTab(2);
	//document.getElementById("stopwatchContainer").style.display = "None"
	document.getElementById("chooseCourseContainer").style.display = "Block";
}

function startOver() {
	for(i = 0; i < profile.events.length; i++) {
		progress.append(createEvent(profile.events[i][0], profile.events[i][1]));
	}	
	profile.currentCourse = undefined;
	updateProfile(profile, getCurrentProfile());
	document.getElementById("tabbar").setActiveTab(0);
	document.getElementById("chooseCourseContainer").style.display = "Block";
}

var createEvent = function(inputTime, inputCourse) {
	var course = document.createElement("div");
	course.className = "course";
	var courseTitle = document.createElement("div");
	courseTitle.className = "courseNumber";
	courseTitle.innerHTML = "Course " + inputCourse;
	var timeContainer = document.createElement("div");
	timeContainer.className = "courseTime";
	var time = document.createElement("span");
	time.innerHTML = " " + inputTime;
	time.className = "ion-ios-time";

	course.appendChild(courseTitle);
	timeContainer.appendChild(time);
	course.appendChild(timeContainer);

	return course;
}
