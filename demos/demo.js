var demoControls = document.createElement("div");
demoControls.innerHTML = "<div>Switch layout:</div>";
demoControls.className = "demo-controls";
document.body.appendChild(demoControls);

var switchLayout = function(){
  document.body.setAttribute("class", this.dataset.styleSrc);
};

for(var i = 1; i < 8; i++) {
  var toggle = document.createElement("a");
  toggle.className = "toggle";
  toggle.innerHTML = "Layout " + i;
  toggle.dataset.styleSrc = "layout-" + i;
  toggle.addEventListener("click", switchLayout);
  demoControls.appendChild(toggle);
};