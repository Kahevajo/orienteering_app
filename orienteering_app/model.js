var init = function() {
    var profiles = [];
    var localStorage = window.localStorage;
    localStorage.setItem('profiles', JSON.stringify(profiles));
    currentProfile = null;
}

var createProfile = function () {
    var name = document.getElementById("createProfileName").value;
    var profile = {
        name: name,
        events: [],
    }
    var index = addProfile(profile);
    if(!currentProfile) {
        currentProfile = index;
    }
    fillProfiles();
}

var fillProfiles = function() {
    var container = document.getElementById("cardContainer");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    var profiles = getProfiles();
    profiles.forEach(profile => {
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
    });
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

// Get current profile
var getProfile = function() {
    var a = []

    a = JSON.parse(localStorage.getItem('profiles'));

    return a[currentProfile];
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

