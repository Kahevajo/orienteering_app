document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'home') {
      page.querySelector('#about').onclick = function() {
            document.querySelector('#myNavigator').pushPage('about.html');
        };

        page.querySelector('#feet-card').onclick = function() {
            document.querySelector('#myNavigator').pushPage('feet.html');
      };

      page.querySelector('#shoulders-card').onclick = function() {
            document.querySelector('#myNavigator').pushPage('shoulders.html');
      };

      page.querySelector('#face-card').onclick = function() {
            document.querySelector('#myNavigator').pushPage('face.html');
      };
   }
});

document.addEventListener('prechange', function(event) {
document.querySelector('ons-toolbar .center')
  .innerHTML = event.tabItem.getAttribute('label');
});

var showTemplateDialog = function() {
var dialog = document.getElementById('my-dialog');

if (dialog) {
  dialog.show();
} else {
  ons.createElement('dialog.html', { append: true })
    .then(function(dialog) {
      dialog.show();
    });
}
};

var hideDialog = function(id) {
document
  .getElementById(id)
  .hide();
};