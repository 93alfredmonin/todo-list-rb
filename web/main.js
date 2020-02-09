let blueFild = document.querySelectorAll('.blue-fild'),
    tableOptions = document.querySelectorAll('.right'),
    tasksList = document.querySelectorAll('.tasks-list'),
    oneTask = document.querySelectorAll('.one-task'),
    taskOptions = document.querySelectorAll('.options'),
    addTodoListBtn = document.querySelectorAll('.btn-add-todo-list')[0], //кнопка для генирации шапки таблици
    headOfTable = document.querySelector('.head-of-table'),// для генирации шапки таблици при нажатии кнопки addTodoListBtn
    allTodoLists = document.querySelector('.all-todo-lists');//контейнер ждля всех таблиц
    console.log (headOfTable);

for(let i = 0; i < blueFild.length; i++){
    blueFild[i].addEventListener('mouseover', function(){
        for(let j = 0; j < tableOptions.length; j++){
            if(i == j){
                 tableOptions[j].style.opacity = "1";
            }
        }
        
    });
}

for(let i = 0; i < blueFild.length; i++){
    blueFild[i].addEventListener('mouseout', function(){
        for(let j = 0; j < tableOptions.length; j++){
            if(i == j){
                tableOptions[j].style.opacity = "0";
            }
        }
       
    });
}

for(let i = 0; i < oneTask.length; i++){
    oneTask[i].addEventListener('mouseover', function(){
        for(let j = 0; j < taskOptions.length; j++){
            if(i == j){
                 taskOptions[j].style.opacity = "1";
            }
        }
        
    });
}

for(let i = 0; i < oneTask.length; i++){
    oneTask[i].addEventListener('mouseout', function(){
        for(let j = 0; j < taskOptions.length; j++){
            if(i == j){
                 taskOptions[j].style.opacity = "0";
            }
        }
        
    });
}

addTodoListBtn.addEventListener('click', function(){
    let elem = document.createElement(headOfTable);
    allTodoLists.innerHTML = elem;
    //allTodoLists.insertAdjacentHTML('beforeEnd', headOfTable);
    //allTodoLists.innerText = headOfTable;
    //console.log(headOfTable.toString());
});