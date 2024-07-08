Overview
The Simple Todo List App is a basic web application that allows users to add, remove, and mark tasks as completed. This application is built using HTML, CSS, and JavaScript.

Features
Add new tasks
Remove tasks
Mark tasks as completed
Display all tasks in a list
Getting Started
Installation
Clone the repository using git clone <repository-url>
Open the index.html file in a web browser
Usage
Enter a new task in the input field
Click the "Add Task" button to add the task to the list
Click on a task to mark it as completed
Click the "Remove" button to remove a task from the list
Technical Details
HTML Structure
The application uses a simple HTML structure with the following elements:

index.html: The main HTML file that contains the user interface
input element: Used to enter new tasks
button element: Used to add new tasks
ul element: Used to display the task list
li elements: Used to display individual tasks
CSS Styles
The application uses CSS to style the user interface. The styles are defined in the styles.css file.

body element: Sets the font family and text alignment
input element: Sets the width, padding, and border styles
button element: Sets the background color, text color, and padding styles
ul element: Sets the list style and padding styles
li elements: Sets the padding and border styles
.completed class: Sets the text decoration and color for completed tasks
JavaScript Code
The application uses JavaScript to add functionality to the user interface. The code is defined in the script.js file.

taskList array: Stores the task objects
addTask function: Adds a new task to the taskList array and clears the input field
displayTasks function: Loops through the taskList array
