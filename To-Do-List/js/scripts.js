// business logic
function Task(taskName, prioritize, timeofDay,timeFrame, notes1, color1) {
  this.taskName = taskName;
  this.prioritize = prioritize;
  this.timeofDay = timeofDay;
  this.timeFrame = timeFrame;
  this.notes = notes1;
  this.color = color1;
}
// user interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var inputtedTaskName = $("input#new-task-name").val();
    var inputtedPrioritize = $("input#new-prioritize").val();
    var inputtedTimeFrame = $("input#new-timeframe").val();
    var inputtedTimeofday = $("input#new-timeofday").val();
    var inputtedNotes = $("input#new-notes").val();
    var inputtedColor = $("input#color").val();

    var newTask = new Task(inputtedTaskName, inputtedPrioritize, inputtedTimeFrame, inputtedTimeofday, inputtedNotes, inputtedColor);

    $("#outputTask").append("<li><span class='task'>" + newTask.taskName + "</span></li>");
      $("input#new-task-name").val("");
      $("input#new-prioritize").val("");
      $("input#new-timeframe").val("");
      $("input#new-timeofday").val("");
      $("input#new-notes").val("");
      $("input#color").val("");

  });
});
