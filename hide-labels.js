var style = document.createElement('style')
style.type = 'text/css'
// hide empty labels on board view
style.innerHTML = '.ghx-issue .ghx-extra-fields .ghx-fa {display: none;}'
// hide empty labels in backlog view
style.innerHTML += 'span[data-tooltip="Labels: None"] {visibility: hidden}'
document.getElementsByTagName('head')[0].appendChild(style)
// style labels in backlog with smaller text
$(document).ready(function() {
  $('.ghx-extra-field-content').wrap("<small />");
});
