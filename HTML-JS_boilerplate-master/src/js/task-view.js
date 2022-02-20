

export function drawTaskList(taskList, taskSelection) {
    for (let i = 0; i < taskList.getLength(); i++){

        const newTask = document.createElement('div')
        newTask.classList.add('task-o')
      
      
        const label = document.createElement('label')
        label.classList.add('checkbox')
      
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox')

        checkbox.onchange = function() {
            if (checkbox.checked) {
              openTaskList.delete(task)
              doneTaskList.add(task)
            }
            else {
              doneTaskList.delete(task)
              openTaskList.add(task)
            }
          } 

        const divText = document.createElement('div')
         divText.classList.add('text-to')
         divText.setAttribute('id', "taskto")
         divText.textContent = taskList.getTask(i).name

         divText.ondblclick = function (){
            let text = divText.textContent
            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.value = text 
            divText.textContent = ''
            divText.appendChild(input)
            input.focus()
        
            input.onblur = function() {
                taskList.getTask(i).name= input.value
              divText.TextContent = input.value
            }
          }

          divText.ondblclick = function (){
            let text = divText.textContent
            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.value = text 
            divText.textContent = ''
            divText.appendChild(input)
            input.focus()
        
            input.onblur = function() {
              divText.TextContent = input.value
            }
          }

          const divTime = document.createElement ('div')
          const divTimeOpen = document.createElement('div')
          divTimeOpen.classList.add('time-open')
          divTimeOpen.textContent = taskList.getTask(i).creationDate

          const divTimeDone = document.createElement ('div')
            divTimeDone.classList.add('time-done')

            checkbox.onclick = function() {
    
                if (checkbox.checked) {
                  divTime.appendChild(divTimeOpen)
                  divTime.appendChild(divTimeDone)
                  
                } else {
                  divTime.appendChild(divTimeOpen)
                  divTime.removeChild(divTimeDone)
                }
              }


              const trashButton = document.createElement('button')
              trashButton.classList.add('trash-but')
            
              const divTrash = document.createElement('div')
              divTrash.classList.add('trash')
            
              
              
              const itrash = document.createElement('i')
              itrash.classList.add('fa')
              itrash.classList.add('fa-trash')
              itrash.setAttribute('aria-hidden', 'true')
            
              trashButton.onclick = function() {
                newTask.remove()
              }
            
              const clearOpen = document.querySelector('.clear-open')
              clearOpen.ondblclick = function(){
                openTaskopenSelection.innerHTML=''
              }
            
              const clearDone = document.querySelector('.clear-done')
              clearDone.ondblclick = function(){
                openTaskdoneSelection.innerHTML= ''
              }

          
          
          
          
          taskSelection.appendChild(newTask)
          label.appendChild(checkbox)
          divTrash.appendChild(itrash)
          trashButton.appendChild(divTrash)
          divTime.appendChild(divTimeOpen)
          
          newTask.appendChild(label)
          newTask.appendChild(divText)
          newTask.appendChild(divTime)
          newTask.appendChild(trashButton)

         

         
    }
}