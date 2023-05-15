var style = document.createElement('style')
style.type = 'text/css'
// hide empty labels on board view and backlog view
style.innerHTML = 'span[data-tooltip="Labels: None"] {visibility: hidden}'
document.head.appendChild(style)
