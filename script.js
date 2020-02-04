// saves description to users cache tied to data hour
$(".saveBtn").on("click", function() {
  var hour = this.parentElement.getAttribute("data-hour");
  var description = this.parentElement.querySelector("textarea").value;
  localStorage.setItem(hour, description);
});

//retrive data from local cache

$(".time-block").each(function() {
  var hour = this.getAttribute("data-hour");
  var savedDescript = localStorage.getItem(hour);
  this.querySelector("textarea").value = savedDescript;
});

// display the description into correct place
