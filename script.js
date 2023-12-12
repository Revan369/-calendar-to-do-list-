$(document).ready(function () {
    // Display current day
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  
    // Create timeblocks
    for (let hour = 9; hour <= 17; hour++) {
      // Create a new row for each hour
      let $row = $("<div>").addClass("row time-block");
  
      // Create the hour element
      let $hour = $("<div>").addClass("hour col-md-1").text(dayjs().hour(hour).format("hA"));
  
      // Create the textarea element
      let $textarea = $("<textarea>").addClass("description col-md-10");
  
      // Create the save button element
      let $saveBtn = $("<button>").addClass("saveBtn col-md-1").html('<i class="fas fa-save"></i>');
  
      // Append elements to the row
      $row.append($hour, $textarea, $saveBtn);
  
      // Set textarea background color directly using jQuery
      $textarea.css("background-color", "#d3d3d3"); // Adjust the color as needed
  
      // Append the row to the container
      $(".container").append($row);
    }
  
    // Add functionality to color-code timeblocks, allow user input, and save events in local storage
    // (This part will need more jQuery and event handling)
  });
