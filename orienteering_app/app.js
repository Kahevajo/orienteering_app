// Code for the template dialog used in the stopwatch.
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