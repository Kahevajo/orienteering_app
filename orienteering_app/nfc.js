nfcHandler = {}
nfcHandler.ready = false;

controls = {
    "[-73,4,48,116,46,103,115,47,88,118,121,57,66,50,44,49]": "c1", 
    "[-73,4,48,116,46,103,115,47,102,113,119,81,48,65,13,58]": "c2"
}

nfcHandler.init = function() {
    document.addEventListener(
        'deviceready',
        nfcHandler.onReady,
        false)    
}

callback = function(nfcEvent) {
    hyper.log(JSON.stringify(nfcEvent["tag"]["id"]));
    hyper.log(Object.keys(controls));
    var control = controls[JSON.stringify(nfcEvent["tag"]["id"])];
    
    switch (control) {
        case "c1":
            var container = document.getElementById("c1");
            var img = document.createElement("img");
            img.src="pictures/stamp1.png";
            container.appendChild(img);
            break;
        case "c2":
            var container = document.getElementById("c2");
            var img = document.createElement("img");
            img.src = "pictures/stamp2.png";
            container.appendChild(img);
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