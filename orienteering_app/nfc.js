nfcHandler = {}
nfcHandler.ready = false;

controls = {
    "[-73,4,48,116,46,103,115,47,88,118,121,57,66,50,44,49]": "c1", 
    "[-73,4,48,116,46,103,115,47,102,113,119,81,48,65,13,58]": "c2",
    "[-73,4,48,116,46,103,115,47,122,110,87,57,111,73,48,105]": "c3",
    "[-73,4,48,116,46,103,115,47,69,73,98,113,74,118,-20,-109]": "c4",
    "[-73,4,48,116,46,103,115,47,87,73,81,78,111,70,111,43]": "c5",
    "[-73,4,48,116,46,103,115,47,105,83,71,68,117,99,-116,-66]": "c6"
}

nfcHandler.init = function() {
    document.addEventListener(
        'deviceready',
        nfcHandler.onReady,
        false)    
}

callback = function(nfcEvent) {
    hyper.log(JSON.stringify(nfcEvent["tag"]["id"]));
    var control = controls[JSON.stringify(nfcEvent["tag"]["id"])];
    
    switch (control) {
        case "c1":
            var container = document.getElementById("c1");
            if (container.childNodes.length <= 1) {
                var img = document.createElement("img");
                img.src="pictures/stamp1.png";
                container.appendChild(img);
            }
            break;
        case "c2":
            var container = document.getElementById("c2");
            if (container.childNodes.length <= 1) {
                var img = document.createElement("img");
                img.src = "pictures/stamp2.png";
                container.appendChild(img);
            }
            break;
        case "c3":
            var container = document.getElementById("c3");
            if (container.childNodes.length <= 1) {
                var img = document.createElement("img");
                img.src = "pictures/stamp3.png";
                container.appendChild(img);
            }
            break;
        case "c4":
            var container = document.getElementById("c4");
            if (container.childNodes.length <= 1) {
                var img = document.createElement("img");
                img.src = "pictures/stamp4.png";
                container.appendChild(img);
            }
            break;
        case "c5":
            var container = document.getElementById("c5");
            if (container.childNodes.length <= 1) {
                var img = document.createElement("img");
                img.src = "pictures/stamp5.png";
                container.appendChild(img);
            }
            break;
        case "c6":
            var container = document.getElementById("c6");
            if (container.childNodes.length <= 1) {
                var img = document.createElement("img");
                img.src = "pictures/stamp6.png";
                container.appendChild(img);
            }
            break;
        default:
            hyper.log("could not find control in dictionary");
            break;
    }


}

onSuccess = function() {
    console.log('Listening for non-NDEF tags')
}

onFailure = function() {
    console.log('Error addTagDiscoveredListener: ' + error)
}

nfcHandler.onReady = function() {
    // Read NFC Tags
    nfc.addTagDiscoveredListener(callback, onSuccess, onFailure)
}

nfcHandler.init()