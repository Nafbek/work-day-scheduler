
//A function that runs after the browser has finished rendering all the elements
$(function () {

  //Declare variables and selects the DOM elements
  var saveButton = $('.saveBtn')
  var userInput = $('.description')
  var timeBlockEl = $('.time-block')
  var hourBlock = $('[data-hour]')


  //Add event listener to th save button
  saveButton.on('click', function (e) {
   

    //Selects the immediate textarea element to the save button
    var eventDescription = $(this).siblings('.description');   

    //Get the user input and the respective id of the parent element to use it as a key in a local storage
    var userActualValue = eventDescription.val();
    var uniqueId = eventDescription.parent().attr('id');

    //Get user's input from the local storage using id
    var storeUserData = JSON.parse(localStorage.getItem(uniqueId)) || [];

    //Validate if the input already exists or if it is empty
    if (userActualValue.trim() === '' || storeUserData.some(function (obj) {
      return obj.userActualValue === userActualValue
    })) {
      e.preventDefault();
      return;
    }

    //Add new user's input and store in the updated array in local storage
    storeUserData.push({ id: uniqueId, userActualValue })
    localStorage.setItem(uniqueId, JSON.stringify(storeUserData))
  })

  //A for loop over the length of the time block element
  //?? TimeBlock in the '#hour-9' takes the future class. why not changing??
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