
$(document).ready(() => {
  // console.log("document loaded");

  // declare variable with empty string
  let saveUserInput = "";

  // set text of element to show time using moment
  $("#currentDay").text(moment().format("dddd h:mm A"));

  //   declare current time variable and use for moment reference
  let currentTime = moment().hour();
  //   console.log(currentTime);

  // function that takes input and saves to sessionStorage

  $(".calendar-text").each(function () {
    // console.log($(this))
    let eleId = $(this).attr("id");
    // console.log(eleId)
    let localVal = sessionStorage.getItem(eleId);
    // console.log(localVal)
    if (localVal !== null) {
      $(this).val(localVal);
    }
    // set currentTime to moment reference for hour blocks
    currentTime = moment().hour();
    // console.log(currentTime)

    // focus on data-hour for block, then if statements for color coding
    let timeBlock = $(this).attr("data-hour");

    if (timeBlock > currentTime) {
      $(this).addClass("future");
    } else if (timeBlock < currentTime) {
      $(this).addClass("past");
    } else if (timeBlock == currentTime) {
      $(this).addClass("present");
    }
  });

  // jquery onclick for each button

  $(".saveBtn").on("click", function () {
    // console.log("click")
    // Capture text-area input content
    saveUserInput = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .val();

    let eleId = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .attr("id");

    // add extra class to be remove later in sessionStorage
    // console.log(eleId)
    sessionStorage.setItem(eleId, saveUserInput);
    });

  // function that refreshes page
  $(".saveBtn").on("click", () => {
    // location.reload();
  });
  // function that clears data on click
  // look into randomClass to remove specific item from local storage
  $(".clearBtn").on("click", () => {
    window.sessionStorage.clear("input");
    location.reload();
  });
});


