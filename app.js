var prompt = require('sync-prompt').prompt
var chalk = require('chalk');

var home = [], play = [], school = [];
var task

var response = prompt('Do you want to add to your To Do List? (y)es (n)o ');

while(response != 'q' && response != 'n'){
  if(response === 'h'){
    task = prompt('What would you like to do at home? ');
      home.push(task);
  }else if(response === 's'){
    task = prompt('What do you have to do for school? ');
      school.push(task);
  }else if(response === 'p'){
    task = prompt('What would you like to do for fun? ');
      play.push(task);
  }
  
  
response = prompt('What list would you like to add a task to: (h)ome, (s)chool, or (p)lay? Or (q)uit. ');
} 

console.log('Your Home tasks are: ' + home);
console.log('Your School tasks are: ' + school);
console.log('Your Play tasks are: ' + play);



