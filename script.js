// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var saveButton = $('.saveBtn')
  // var userInput = $('.description')
  var timeBlockEl = $('.time-block')
  var hourBlock = $('.hour')


  
  // console.log(userInput)
  // console.log(hourBlock)


  saveButton.on('click', function(e){
    // 

    var eventDescription = $(this).siblings('.description');
    var userActualValue = eventDescription.val();
    var uniqueId = eventDescription.parent().attr('id');
    
    var storeUserData = JSON.parse(localStorage.getItem("user event"))  || [];
          //  or???? this?     var storeUserData = JSON.parse(localStorage.getItem(unique))  || [];
   
          //this logic has no effect on the submission of empty user value ??why not
          if (userActualValue.trim() === '' || storeUserData.includes(userActualValue)){
        e.preventDefault(); 
        return;
       
    }
     

    console.log(eventDescription.val())

      storeUserData.push({id:uniqueId, userActualValue})
  
     
  localStorage.setItem("user event",JSON.stringify(storeUserData))  
// similarly .. localStorage.setItem(unique,JSON.stringify(storeUserData)) 

 })





 







  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? ??? 24-hour format???????????????????????????????????????????????????

 //?? TimeBlock in the '#hour-9' takes the future class. why not changing??
  for(var i =0; i<timeBlockEl.length; i++){
    if(hourBlock.eq(i).text() -(1) ===dayjs().format('hA')){

      timeBlockEl.eq(i).removeClass('past future')
      timeBlockEl.eq(i).addClass('present')
    } else if(hourBlock.eq(i).text() -(1)< dayjs().format('hA')){  //convert text to milliseconds
      timeBlockEl.eq(i).removeClass('present future')
      timeBlockEl.eq(i).addClass('past')
    }else{
      timeBlockEl.eq(i).removeClass('present past')
      timeBlockEl.eq(i).addClass('future')
    }
  }


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var currentDayEl = $('#currentDay');
  var timeNow = dayjs().format('dddd, MMMM DD')

  currentDayEl.text(timeNow);
   
});