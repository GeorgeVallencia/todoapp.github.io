let input = document.querySelector('.new-list');
let addBtn = document.querySelector('.submit-btn');
let list = document.querySelector('.list');
let clearBtn = document.querySelector('.clear-btn');

//add btn disabled

 input.addEventListener('keyup', () => {
     if(input.value.trim() != 0){
         addBtn.classList.add('active');
     }else{
        addBtn.classList.remove('active');
     }
 })

//add new item to the list

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('list-items');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
        <i class='bx bx-check-square'></i>
        <i class='bx bx-x'></i>
        </div>
        `
        list.appendChild(newItem);
        input.value = '';
    }else{
        alert('please enter a task');
    }

});

//delete item from the list

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('bx-x')){ 
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('bx-check-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});

//clear all list

clearBtn.addEventListener('click', () => {
    if(clearBtn.click){
        list.innerHTML = '';
    }else{
        list.innerHTML = input.value;
    }
});

// //completed btn

// function completedList(){
// document.getElementsByClassName('bx-edit').addEventListener('click', () => {
//     p.style = 'text-decration: line-through;'
// })

// }



