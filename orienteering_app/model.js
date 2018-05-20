var init = function() {
    var localStorage = window.localStorage;
    if (localStorage.getItem('profiles') === null) {
        var profiles = [];
        localStorage.setItem('profiles', JSON.stringify(profiles));
    }
    document.getElementById("cardContainer").addEventListener('load', fillProfiles(), false);
}

var createProfile = function () {
    var name = document.getElementById("createProfileName").value;
    var profile = {
        name: name,
        events: [],
        currentCourse: null
    }
    var index = addProfile(profile);
    if(!getCurrentProfile()) {
        localStorage.setItem("currentProfile", index)
    }
    fillProfiles();
}

var fillProfiles = function() {
    var container = document.getElementById("cardContainer");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    var profiles = getProfiles();
    profiles.forEach(function(profile, index) {
        var a = document.createElement("a");
        a.href = "start.html";
        var card = document.createElement("ons-card");
        var title = document.createElement("div");
        title.innerHTML = profile.name;
        title.className = "title";
        card.href="start.html";
        card.appendChild(title);
        a.appendChild(card);
        container.appendChild(a);
        a.onclick = function () {
            localStorage.setItem("currentProfile", index)
        };
    })
}

// Add profile to localstorage
var addProfile = function(data) {
    var profiles = [];
    // Parse the serialized data back into an aray of objects
    profiles = JSON.parse(localStorage.getItem('profiles'));
    // Push the new data (whether it be an object or anything else) onto the array
    profiles.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('profiles', JSON.stringify(profiles));

    if(profiles.length != 0) {
        return profiles.length - 1;
    } else {
        return -1;
    }
}

var updateProfile = function(data, index) {
    var profiles = [];
    // Parse the serialized data back into an aray of objects
    profiles = JSON.parse(localStorage.getItem('profiles'));
    // Update to the new data (whether it be an object or anything else) onto the array
    profiles[index] = data;
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('profiles', JSON.stringify(profiles));
}

// Get current profile
var getProfile = function(index) {
    var a = []

    a = JSON.parse(localStorage.getItem('profiles'));

    return a[index];
}

var getCurrentProfile = function() {
    return JSON.parse(localStorage.getItem('currentProfile'));
}

// Get all profiles from localstorage
var getProfiles = function () {
    var a = []
    a = JSON.parse(localStorage.getItem('profiles'));
    return a;
}

// SOURCE https://plainjs.com/javascript/manipulation/insert-an-element-after-or-before-another-32/
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

init();

