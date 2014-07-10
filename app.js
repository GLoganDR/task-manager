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


//Teacher's Code//
//
//var prompt = require('sync-prompt').prompt;
//var chalk = require('chalk');
//
//var play = [], home = [], school = [];
//
//var option = prompt('(p)lay, (h)ome, (s)chool or (q)uit: ');
//
//while(option != 'q'){
//  var task = prompt('Task: ');
//
//  switch(option){
//    case 'p':
//      plaly.push(task);
//      break;
//    case 'h':
//      home.push(task);
//      break;
//   case 's':
//      school.push(task);
//  }
//
//  option = prompt('(p)lay, (h)ome, (s)chool or (q)uit: ')
//}
//
//console.log(chalk.blue( 'Play Tasks: ', play));
//console.log(chalk.red('Home Tasks: ', home));
//console.log(chalk.green('School Tasks: ', school));

