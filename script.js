

$(function () {

  var saveButton = $('.saveBtn')
  var userInput = $('.description')
  var timeBlockEl = $('.time-block')
  var hourBlock = $('[data-hour]')



  saveButton.on('click', function (e) {

    //  
    var eventDescription = $(this).siblings('.description');   
    //var eventDescription = $(this).siblings(userInput); why not working??
    var userActualValue = eventDescription.val();
    var uniqueId = eventDescription.parent().attr('id');

    //
    var storeUserData = JSON.parse(localStorage.getItem(uniqueId)) || [];

    //
    if (userActualValue.trim() === '' || storeUserData.some(function (obj) {
      return obj.userActualValue === userActualValue
    })) {
      e.preventDefault();
      return;

    }

    console.log(eventDescription.val())

    storeUserData.push({ id: uniqueId, userActualValue })


    // localStorage.setItem("user event",JSON.stringify(storeUserData))  
    localStorage.setItem(uniqueId, JSON.stringify(storeUserData))

  })

  //?? TimeBlock in the '#hour-9' takes the future class. why not changing??
  for (var i = 0; i < timeBlockEl.length; i++) {          //check selectors carefully



    hourValue = parseInt(hourBlock.eq(i).text().match(/\d+/)[0]);
    if (hourBlock.eq(i).text().includes('PM') && hourValue !== 12) {
      hourValue += 12;
    }

    if (hourValue === dayjs().hour()) {
      console.log('present')
      timeBlockEl.eq(i).removeClass('past future')
      timeBlockEl.eq(i).addClass('present')

    } else if (hourValue < dayjs().hour()) {  //convert text to milliseconds
      console.log('past')


      timeBlockEl.eq(i).removeClass('present future')
      timeBlockEl.eq(i).addClass('past')
    } else {
      console.log('future')
      timeBlockEl.eq(i).removeClass('present past')
      timeBlockEl.eq(i).addClass('future')
    }
  }



  // TODO: Add code to display the current date in the header of the page.

  var currentDayEl = $('#currentDay');
  var timeNow = dayjs().format('dddd, MMMM DD')

  currentDayEl.text(timeNow);

});