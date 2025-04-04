var addtask = document.querySelector('#add-task');
var taskname = document.querySelector('#taskname');
var taskdescription = document.querySelector('#taskdescription');
var taskstatus = document.querySelector('#taskstatus');

let task_data = {
    name: taskname.value,
    detail: taskdescription.value,
    status: taskstatus.value
}

addtask.addEventListener('click', function () { 
    if (taskname.value !== ''){
    localStorage.setItem(task_data.name, JSON.stringify(task_data));

}
    else{
        alert('空白です。');
    }
 }, false);

window.addEventListener('load', function(){

    var list = document.getElementById('list');

    var li = document.createElement('li');

    let tasks = JSON.parse(localStorage.getItem('rrfee'));
    
    li.innerHTML = tasks;
    
    list.appendChild(li);
})





//document.querySelector()でDOM要素を取得
//addEventListerner()でクリックイベントを設定
//innerHTMLやappendChild()でタスクをリストに追加