var steps = ["model", "size", "condition"];
var current = 0;
var items = [];

var models = JSON.parse($("input#models")[0].value);
var sizes = JSON.parse($("input#sizes")[0].value);
var conditions = JSON.parse($("input#conditions")[0].value);

init();
function init() {
  current = 0;
  items = [];
  remark();
  hideNext();
  showOrHideTab();
  controlButtons();
  controlSelected();
  $("#sended").hide();
  $("#init").hide();
}

function controlSelected() {
  $("div.card").on("click", function(e) {
    selected(e.currentTarget.id);
    hideNext();
    remark();
  });
}

function cleanSelections() {
  $("div.card.selected").each(function(i, e) {
    $(e).removeClass("selected");
  });
}

function remark() {
  cleanSelections();

  $(`div#model-${items.model}.card`).addClass("selected");
  $(`div#size-${items.size}.card`).addClass("selected");
  $(`div#condition-${items.condition}.card`).addClass("selected");
}

//get the clicked id
function getId(id) {
  return id.replace(/\D/g, "");
}

//save the selected attribute
function selected(id) {
  id = getId(id);
  items[steps[current]] = id;
}

//hide the tab
function showOrHideTab() {
  for (var i = 0; i < steps.length; i++) {
    id = `#${steps[i]}`;
    current == i ? $(id).show() : $(id).hide();
  }
}

//check if no item was selected on current tab
function hideNext() {
  if (items[steps[current]]) $("#next").show();
  else $("#next").hide();
}

function controlButtons() {
  hideNext();

  //hide prev button
  current == 0 ? $("#prev").hide() : $("#prev").show();

  //show submit at end
  current == steps.length - 1
    ? $("#next").text("Submit")
    : $("#next").text("Next");
}

function showSummary() {
  $("#model_src")[0].src = models[items.model - 1].src;
  $("#model_name").text(models[items.model - 1].name);

  $("#size_src")[0].src = sizes[items.size - 1].src;
  $("#size_name").text(sizes[items.size - 1].name);

  $("#condition_src")[0].src = conditions[items.condition - 1].src;
  $("#condition_name").text(conditions[items.condition - 1].name);
}

//controll section display
function next(num) {
  current += num;
  showOrHideTab();
  controlButtons();
  remark();
  if (current == steps.length) {
    $("#sended").show();
    $("#prev").hide();
    $("#init").show();
    showSummary();
  }
}
