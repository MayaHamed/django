const  search = document.getElementById("search")
const  body = document.getElementById("body")
let data = JSON.parse(localStorage.students);
let delteButton = document.querySelectorAll(".delete");

search.addEventListener("keyup",()=>{

    for(let i = 0 ; i < data.length ;i++){
        body.innerHTML = "";
    }
    for(let i = 0 ; i < data.length ;i++){
        if(data[i].name.toLowerCase().includes(search.value.toLowerCase()) && data[i].status == "Active"){
            let row = `<tr> 
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].gpa}</td>
            <td>${data[i].gender}</td>
            <td>${data[i].level}</td>
            <td>${data[i].status}</td>
            <td>${data[i].dep}</td>
            <td>${data[i].email}</td>
            <td>${data[i].birth}</td>
            <td>${data[i].number}</td>
            <td><i class="fa-solid fa-pen update"></i></td>
            <td><i class="fa-solid fa-trash delete"></i></td>
            </tr>`
            body.innerHTML +=row;
        }
        delteButton = document.querySelectorAll(".delete");
        delteButton.forEach((del)=>{
            del.addEventListener("click",()=>{
                    if(confirm("Are You Sure To Delete this Student!")) {
                        location.reload();
                    }
            })
        })
    }
})

// select delete button
delteButton.forEach((del)=>{
    del.addEventListener("click",()=>{
            if(confirm("Are You Sure To Delete this Student!")) {
                location.reload();
            }
    })
})