var subtitleElement = document.getElementById("visible-subtitle");

var contactUsElement = document.getElementById("user-request");

var setSubtitleToDefault = function() {
 subtitleElement.innerHTML = subtitleElement.getAttribute("data-default"); 
 subtitleElement.className = '';
};
setSubtitleToDefault();

var blockItemElements = document.getElementsByClassName("block-item");
var setSubtitleFromBlockItem = function(){
  subtitleElement.innerHTML = this.getAttribute("data-subtitle");
  subtitleElement.className = this.id + "-subtitle" ;
}
for (var element of blockItemElements) {
  element.addEventListener("mouseenter", setSubtitleFromBlockItem);
  element.addEventListener("mouseleave", setSubtitleToDefault); 
  element.addEventListener("click", getfocus);
}

function getfocus() {
  
  contactUsElement.value = this.getAttribute("data-contact-us");
  contactUsElement.focus();
}

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
  return [curtop];
  }
}

var slider = tns({
  "container": "#tech-list",
  "items": 3,
  "speed": 300,
  "responsive": {
    "300": {
      "items": 2
    },
    "600": {
      "items": 3
    },
    "900": {
      "items": 4
    }
  },
  "autoplay": true,
  "autoplayHoverPause": true,
  "autoplayTimeout": 1500,
  'controls': false,
  'autoplayButtonOutput': false,
  "autoplayHoverPause": false,
  'nav': false
});
