//to store the input values
let TaskList=[]
console.log(TaskList)
//function ton save the task
// debugger;
function Savetask(){
//getting input values from the user
const Taskname=document.querySelector('#inputVal').value
console.log(Taskname)
if(Taskname.trim() !==''){
TaskData={
    taskId:TaskList.length+1,
    taskname:Taskname
}
console.log(TaskData)
//pushing all the data into empty array
TaskList.push(TaskData)
// empty the input values
document.querySelector('#inputVal').value=''
//calling the function to render the UI
RenderUi()
}
}
//function to render the ui
function RenderUi(){
    document.getElementById('list').innerHTML=''
for(let i=0;i<TaskList.length;i++){
    //creating the li items to display the tasks
    const ListItem=document.createElement('li')
    ListItem.classList.add('crud')  //used for cs styling

    //paragraph for storing the taskname
    const Paraele=document.createElement('p')//insert new val into para everytime
    Paraele.innerText=TaskList[i].taskname

    //appending the paragraph to listitems
    ListItem.appendChild(Paraele)

    //getting the ul list
    document.getElementById('list').appendChild(ListItem)//appending the li elements into ul tag

    //creating the div element
    const Divele=document.createElement('span')
    Divele.classList.add('task') //styling req 

    //creating edit icon 
    const EditIcon=document.createElement('i')
    EditIcon.classList.add('bi')
    EditIcon.classList.add('bi-pencil-square')
    //adding the functionality to delete icon
    EditIcon.addEventListener('click',Edittask)
    EditIcon.taskId=TaskList[i].taskId

    //creating delete icon
    const DeleteIcon=document.createElement('i')
    DeleteIcon.classList.add('bi')
    DeleteIcon.classList.add('bi-trash')
    //adding the functionality to delete Icon
    DeleteIcon.addEventListener('click',Deletetask)
    DeleteIcon.taskId=TaskList[i].taskId
    //appending delete and edit icon into div

    Divele.appendChild(EditIcon)
    Divele.appendChild(DeleteIcon)

    //appending divelement to li element
    ListItem.appendChild(Divele)


}
}
//function to edit task
function Edittask(e){
console.log(e.target)
const val=TaskList.find((ele)=>ele.taskId == e.target.taskId)
console.log(val)
document.querySelector('#inputVal').value=val.taskname
}
//function to delete the task
function Deletetask(e){
    const index=TaskList.findIndex((ele)=>ele.taskId == e.target.taskId)
    console.log(index);
    TaskList.splice(index,1)//splice(startposition,delete,add)
    RenderUi();
}

//function to remove all the task
function Removeall(){
    TaskList.splice(0)
    //to render the ui
    RenderUi()
}