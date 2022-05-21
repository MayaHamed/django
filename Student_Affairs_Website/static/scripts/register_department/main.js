let data = JSON.parse(localStorage.students);
const  body = document.getElementById("body")
const  submit = document.getElementById("submit")
const departments = ["general",'ai','cs','ds','is','it'];
if(localStorage.students){
    let iner = [];
    for(let i = 0 ; i < data.length ; i++){
        const id = i;
        const temp= `
        <tr class="row"> 
        <td>${data[id].name}</td>
        <td>${data[id].id}</td>
        <td>${data[id].dep}</td>
        </tr>
        `
        iner.push(temp)
    }
    body.innerHTML = iner.join('');
}
const  search = document.getElementById("search")
const  searchByName = document.getElementById("name")
const  searchById = document.getElementById("id")
const  row = document.querySelectorAll(".row")
const  menu = document.querySelector(".menu")
const  dep = document.querySelectorAll(".dep")
searchByName.addEventListener("click",()=>{
    search.className = "name"
    search.placeholder = "Search For Student By Name";
})
searchById.addEventListener("click",()=>{
    search.className = "id"
    search.placeholder = "Search For Student By ID";
})
row.forEach((e)=>{
    e.addEventListener("click",()=>{
        row.forEach(e=>{e.classList.remove("active")})
        e.classList.add("active")
    })
})
dep.forEach((e)=>{
    e.addEventListener("click",()=>{
        menu.innerHTML = e.id;
    })
})
search.addEventListener("keyup",()=>{
    for(let i = 0 ; i < data.length ;i++){
        body.innerHTML = "";
    }
    for(let i = 0 ; i < data.length ;i++){
        if(data[i].name.toLowerCase().includes(search.value.toLowerCase()) && search.className == "name"){
            let row = `<tr class="row"> 
            <td>${data[i].name}</td>
            <td>${data[i].id}</td>
            <td>${data[i].dep}</td>
            </tr>`
            body.innerHTML +=row;
        }else if(data[i].id.includes(search.value) && search.className == "id"){
            let row = `<tr class="row"> 
            <td>${data[i].name}</td>
            <td>${data[i].id}</td>
            <td>${data[i].dep}</td>
            </tr>`
            body.innerHTML +=row;
        }
    }
})
submit.addEventListener("click",()=>{
    const student = document.querySelector(".active")
    const id = student.children[1].innerHTML
    let valid = true;
    if(student != null && departments.includes(menu.innerHTML.toLowerCase())){
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == id){
                if(+data[i].gpa <= 3){
                    valid = false;
                    alert("GPA Is Less Than 3")
                }
            }
            if(data[i].id == id && valid){
                data[i].dep = menu.innerHTML;
                localStorage.students = JSON.stringify(data);
                alert("Department Added Successfully")
                location.reload();
            }
        }
    }
    if(!departments.includes(menu.innerHTML.toLowerCase())){
        alert("Please Choose Department First")
    }
    if(student == null){
        alert("Please Choose Student")
    }
})