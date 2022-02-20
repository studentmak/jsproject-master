import { drawTaskList } from './js/task-view';
import {TaskList, Task} from './js/task-data';

import './style.css';







const textWelcomeOpenTask = document.querySelector('.task-open');
const textWelcomeDoneTask = document.querySelector('.task-done');

const divTextWelcomeOpen = document.createElement('div')
divTextWelcomeOpen.classList.add('div-text-welcome-open')

const WelcomeOpen = document.createElement('div')
WelcomeOpen.classList.add('text-Welcome-Open')
WelcomeOpen.textContent = "У вас нет незавершенных задач."


const divTextWelcomeDone = document.createElement('div')
divTextWelcomeDone.classList.add('div-text-welcome-done')

const WelcomeDone = document.createElement('div')
WelcomeDone.classList.add('text-Welcome-Done')
WelcomeDone.textContent = "У вас нет завершённых задач."

divTextWelcomeOpen.appendChild(WelcomeOpen)
textWelcomeOpenTask.appendChild(divTextWelcomeOpen)

divTextWelcomeDone.appendChild(WelcomeDone)
textWelcomeDoneTask.appendChild(divTextWelcomeDone)




let counterOpen = 0  //счётчики
let counterDone = 0
 
const newTaskButton = document.querySelector('.ADD')

let openTaskList = new TaskList()
let doneTaskList = new TaskList()


const openTaskopenSelection = document.querySelector('.task-open');
  const openTaskdoneSelection = document.querySelector('.task-done');


  newTaskButton.onclick = function () {
 let newTaskText = document.querySelector('.newTaskname').value 
 let task = new Task(newTaskText)
 openTaskList.add(task)
 drawTaskList(openTaskList, openTaskopenSelection)
  

 

  

  

  
 
  
  
  
  
   
  
  
  
  
  



}

// function addWelcomeOpen() {
//   if (counterOpen == 0){
//     textWelcomeOpenTask.appendChild(divTextWelcomeOpen)
//     console.log(divTextWelcomeOpen)
//   } else{
//     textWelcomeOpenTask.removeChild(divTextWelcomeOpen)
//   }
// }




