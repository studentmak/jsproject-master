

export function Task(name, creationDate, endDone, isDone = false) {
    this.name = name;
    this.creationDate = creationDate || new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    this.endDone = endDone;
    this.isDone = isDone;
  
   this.setDone = function(){ 
    this.isDone = true
    this.endDone = new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
   }
  
  
  this.unsetDone = function() {
    this.isDone = false
    this.endDone = null
  }
  }
  
 export function TaskList() {
    this.list = []
    
      this.add = function(task) {
        this.list.push(task)
      }
      this.delite = function(task) {
        this.list.splice(this.list.indexOf(task), 1)
      }
      
      this.getLength = function() {
        return this.list.length
      }
  
      this.getTask = function(i) {
        return this.list[i]
      }
  
  
  }
