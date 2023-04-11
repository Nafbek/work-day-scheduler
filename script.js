
//A function that runs after the browser has finished rendering all the elements
$(function () {

  //Declare variables and selects the DOM elements using JQuery
  var saveButton = $('.saveBtn')
  var timeBlockEl = $('.time-block')
  var hourBlock = $('[data-hour]')

  //Retrieves stored data from local storage
  for (var i = 0; i < timeBlockEl.length; i++) {
    var timeId = timeBlockEl[i].id
    var storeUserData = localStorage.getItem(timeId)

    //Check the availability of stored data under each time block and assign that value to the respective text area
    if (storeUserData) {
      $(timeBlockEl[i]).find('.description').val(storeUserData)
    }
  }

  //Add event listener to th save button
  saveButton.on('click', function (e) {

    e.preventDefault();
    //Selects the immediate textarea element to the save button
    var eventDescription = $(this).siblings('.description');

    //Get the user's input and the respective id of the parent element to use it as a key in a local storage
    var userActualValue = eventDescription.val();
    var timeId = eventDescription.parent().attr('id');


    //Validate if the input is empty
    if (!userActualValue) {
      return;
    }

    //Save user's input in local storage
    localStorage.setItem(timeId, userActualValue)

    eventDescription.val(userActualValue)

  })

  //A for loop over the length of the time block element
  for (var i = 0; i < timeBlockEl.length; i++) {

    //Get the hour text value, and parse into the integer and convert it to 24 hour time format
    hourValue = parseInt(hourBlock.eq(i).text().match(/\d+/)[0]);
    if (hourBlock.eq(i).text().includes('PM') && hourValue !== 12) {
      hourValue += 12;
    }

    //A logic that change the behavior of each time block after comparing it with the current hour 
    if (hourValue === dayjs().hour()) {
      timeBlockEl.eq(i).removeClass('past future')
      timeBlockEl.eq(i).addClass('present')

    } else if (hourValue < dayjs().hour()) {
      timeBlockEl.eq(i).removeClass('present future')
      timeBlockEl.eq(i).addClass('past')

    } else {
      timeBlockEl.eq(i).removeClass('present past')
      timeBlockEl.eq(i).addClass('future')
    }
  }

  //Display the current date in the header of the page
  var currentDayEl = $('#currentDay');
  var timeNow = dayjs().format('dddd, MMMM DD')
  currentDayEl.text(timeNow);

});