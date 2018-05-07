app = {}
app.ready = false;


app.init = function() {
    document.addEventListener(
        'deviceready',
        app.onReady,
        false)    
}



app.onReady = function() {
    // Read NDEF formatted NFC Tags
    nfc.addTagDiscoveredListener(function(){alert("NFC works!")})
}

app.init()