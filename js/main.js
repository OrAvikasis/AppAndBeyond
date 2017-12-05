var subtitleElement = document.getElementById("visible-subtitle");

var setSubtitleToDefault = function() {
 subtitleElement.textContent = subtitleElement.getAttribute("data-default"); 
};
setSubtitleToDefault();

var blockItemElements = document.getElementsByClassName("block-item");
var setSubtitleFromBlockItem = function(){
  subtitleElement.textContent = this.getAttribute("data-subtitle");
}
for (var element of blockItemElements) {
  element.addEventListener("mouseenter", setSubtitleFromBlockItem);
  element.addEventListener("mouseleave", setSubtitleToDefault); 
}


