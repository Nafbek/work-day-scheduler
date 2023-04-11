# work-day-scheduler

## Description

This is the fifth homework project aimed at developing a simple work day scheduler where the user can enter their events and save them in local storage corresponding to the time block by clicking the save button. The application checks whether the user is saving an empty input before saving it in local storage. Additionally, a logic that changes the behavior of each time block after comparing it with the current hour is used to indicate whether it is in the past, present, or future. The color red indicates past, while yellow and green represent the present and future times, respectively. The current day is displayed at the top of the calendar. Moreover, the app will persist the user's input even after the page refreshes.

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Installation

You can clone this particular repository (follow this link  https://github.com/Nafbek/work-day-scheduler ) form GitHub, and paste it to your local machine. Unzip the repository directory, then open the 'index.html' file in any of your prefered web browser. No additional software is required to run this application.

## Usage

After opening the 'index.html' file in your preferred browser, you can use the description text area to enter any events that you want to schedule for the day. Once you have entered your input, you can save it by clicking the save button on the right side of the text area. Your saved data will be stored in the local storage, which means you can access it even if you close and reopen the page. When you refresh the page, you will still be able to see your previous input in the text area. Additionally, the time blocks in the scheduler will change color depending on whether they are in the past, present, or future relative to the current time. 


You can either double click on the file "Animation.gif" in the repository or on the follwing syntax link to view the animation of the animation that demonstrate the functionality of the application.

![alt text](Animation.gif)


## Credits

I would like to thank Torres Juan, a tutor, for his help in clarifying my understanding of some concepts and for recommending the use of the siblings function in my code. I am also grateful to Phillip Clark for providing clear direction on how to simplify my code writing.

Day.js (https://day.js.org/en/) library is used to set the date and time.



## License

The MIT License applies (check here https://github.com/Nafbek/work-day-scheduler/blob/main/LICENSE for details).




