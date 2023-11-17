var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 1000000000 +"px";
    } 
  });
}

$(document).ready(function () {
  $("[data-fancybox]").fancybox({
      buttons: ["slideShow", "fullScreen", "thumbs", "close"],
  });
});


document.ondragstart = noselect;
document .onselectstart = noselect;
document .oncontextmenu = noselect;
function noselect() {return false;}