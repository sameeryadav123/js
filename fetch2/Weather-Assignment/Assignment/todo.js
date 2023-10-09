

const tableToDO=document.getElementById('toDetails');

const showData=async()=>{

    try {

        const response= await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data =await response.json();
        console.log(data)
        displayData(data)
        
    } catch (error) {
        console.log(error)
    }
}
showData()

const displayData=(data)=>{
data.forEach((ele)=>{

const rows=document.createElement('tr');
const id=document.createElement('td');
id.textContent="ID "+ele.id;

const title=document.createElement('td');
title.textContent="TITLE :"+ele.title;

const status=document.createElement('td');
status.textContent="Status   =>  "+ele.completed ;

rows.append(id,title,status);
tableToDO.appendChild(rows)


})
}