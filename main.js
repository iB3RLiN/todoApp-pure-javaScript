// let header = document.createElement('header'),
//     Contener = document.createElement('div') ,
//     logo = document.createElement('h1'),
//     opchinBtn = document.createElement('div'),
//     textLogo = 'elzero',
//     ;




// header.appendChild(Contener);
// Contener.appendChild(logo);
// Contener.appendChild(opchinBtn);
// logo.append(textLogo);





// console.log(Contener)

// let textinput = document.querySelector('.taskContener input');
// let addButton = document.querySelector('.taskContener button');
// let NoTaskMsg = document.querySelector('.taskContener1 p');


// addButton.onclick = function(){
//     if(textinput.value === ''){
//         console.log(NoTaskMsg);
//     }
//     else{
//         NoTaskMsg.remove();

//         let spanTasks = document.createElement('span');
//         let newTask = spanTasks.c = textinput.value;
//         let forme = spanTasks.appendChild(newTask);
//         document.body.append(forme)

        
//     }
    
// }
// Create WriteableStream







let taskInput = document.querySelector('.add-task input'),
    addButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector(".tasks-content"),
    noTaskMsg = document.querySelector('.tasks-content .no-tasks-message'),
    taskCount = document.querySelector('.tasks-count span'),
    completedTask = document.querySelector('.tasks-completed span');

window.onload = function(){
    taskInput.focus()
};

addButton.onclick = function(){
    if(taskInput.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Cant add Empty Task!',
            // footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    else{
        // noTaskMsg.remove();
        let noTasksMsg1 = document.querySelector(".no-tasks-message");

        // Check If Span With No Tasks Message Is Exist
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

        // Remove No Tasks Message
        noTasksMsg1.remove();

    }else{
        // Create Message Span Element
        let msgSpan = document.createElement("span");

        // Create The Text Message
        let msgText = document.createTextNode("No Tasks To Show");

        // Add Text To Message Span Element
        msgSpan.appendChild(msgText);

        // Add Class To Message Span
        msgSpan.className = 'no-tasks-message';

        // Append The Message Span Element To The Task Container
        tasksContainer.appendChild(msgSpan);

        // let NoTasksMsgSpan = document.createElement('span'),
        //     NoMsgText = document.createTextNode('No Tasks To Show');

        // NoTasksMsgSpan.appendChild(NoMsgText);
        // NoTasksMsgSpan.className = '.no-tasks-message';
        // tasksContainer.appendChild(NoTasksMsgSpan);
    }



        let mainSpan = document.createElement('span'),
            taskText = document.createTextNode(taskInput.value),
            delButton = document.createElement('span'),
            
            delText = document.createTextNode('Delete');



        mainSpan.className = 'task-box';
        delButton.className = 'delete';
        mainSpan.appendChild(taskText);
        mainSpan.appendChild(delButton);
        delButton.appendChild(delText);
        tasksContainer.appendChild(mainSpan);
        taskInput.value = '';
        taskInput.focus();

        // let repetTasks = document.querySelector('.task-box');
        // console.log(repetTasks.textContent.)
        // if(taskInput.value == repetTasks.value){
            
        // };
    }
};


document.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        e.target.parentNode.remove();
    };
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle("finished");
    };

    let findFinsh = document.getElementsByClassName('finished').length;
    completedTask.innerHTML = String(findFinsh);

    let taskLengthCount = document.getElementsByClassName('task-box').length;
    taskCount.innerHTML = String(taskLengthCount);
});


function noMsgTasks(){
    if(document.body.contains(document.querySelector('.no-tasks-message'))){
        noTaskMsg.remove();
    }else{
        let NoTasksMsgSpan = document.createElement('span'),
            NoMsgText = document.createTextNode('No Tasks To Show');

        NoTasksMsgSpan.appendChild(NoMsgText);
        NoTasksMsgSpan.className = '.no-tasks-message';
        tasksContainer.appendChild(NoTasksMsgSpan);
    }
}

// document.addEventListener('click',function(e){
//     if(e.target.className == 'tasks-completed'){
//         // let allTaskDelete = document.getElementsByClassName('finished');
        
//     };
    
// })


// let tasksForDel = document.querySelector('.task-box span');
// deleteALlTasks.onclick = function(){
    
//     console.log(tasksForDel);
// }






