const input= document.querySelector('.input-box');
const taskList= document.querySelector('.task-list');
const add= document.querySelector('.add')
const alertMessage= document.querySelector('.alert');
const deleteAll = document.querySelector('.delete-all')

add.addEventListener('click',()=>{
if(input.value===''){
  alertMessage.textContent='you must add a list'
    setTimeout(()=>{
       alertMessage.textContent=''
    },3000)

}
else{
    let li= document.createElement('li')
    li.textContent=input.value
    taskList.appendChild(li) 
    let cancel= document.createElement('button')
    cancel.innerHTML='<i class="fa-solid fa-trash"></i>'
    li.appendChild(cancel)
    deleteAll.style.visibility="visible"
    saveItem()
}
input.value=''

})
 taskList.addEventListener('click', (e)=>{
    if(e.target.tagName==='LI'){
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active')
        }
        else{e.target.classList.add('active')}
        saveItem()
        
    }
    else if (e.target.tagName==='BUTTO N'){
        e.target.parentElement.remove()
        saveItem()
    }

 }, false);

 deleteAll.addEventListener('click',()=>{
    taskList.innerHTML=''
    deleteAll.style.visibility='hidden'
    saveItem()
 })

 function saveItem(){
    localStorage.setItem('data', taskList.innerHTML)
 }
 function showTask(){ 
    taskList.innerHTML=localStorage.getItem('data')

 }
 showTask()
