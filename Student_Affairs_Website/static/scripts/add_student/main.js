studentName = document.getElementById("studentName")
const id = document.getElementById("id")
const date = document.getElementById("date")
const gpa = document.getElementById("gpa")
const points = document.getElementById("points")
const level = document.getElementById("level")
const Status = document.getElementById("status")
const dep = document.getElementById("dep")
const year = document.getElementById("year")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const nationality = document.getElementById("nationality")
const male = document.getElementById("male")
const female = document.getElementById("female")
const nationalID = document.getElementById("national-id")
const btn = document.getElementById("btn")
const reset = document.getElementById("reset")
let gender ;
let inputs =document.getElementsByTagName("input")
let data = JSON.parse(localStorage.students);
const statuses = ["active","notactive"]
const departments = ["general",'ai','cs','ds','is','it'];
let nationalities = ['afghan','albanian','algerian','american','andorran','angolan','antiguans','argentinean','armenian','australian','austrian','azerbaijani','bahamian','bahraini','bangladeshi','barbadian','barbudans','batswana','belarusian','belgian','belizean','beninese','bhutanese','bolivian','bosnian','brazilian','british','bruneian','bulgarian','burkinabe','burmese','burundian','cambodian','cameroonian','canadian','cape verdean','central african','chadian','chilean','chinese','colombian','comoran','congolese','costa rican','croatian','cuban','cypriot','czech','danish','djibouti','dominican','dutch','east timorese','ecuadorean','egyptian','emirian','equatorial guinean','eritrean','estonian','ethiopian','fijian','filipino','finnish','french','gabonese','gambian','georgian','german','ghanaian','greek','grenadian','guatemalan','guinea-bissauan','guinean','guyanese','haitian','herzegovinian','honduran','hungarian','i-kiribati','icelander','indian','indonesian','iranian','iraqi','irish','italian','ivorian','jamaican','japanese','jordanian','kazakhstani','kenyan','kittian and nevisian','kuwaiti','kyrgyz','laotian','latvian','lebanese','liberian','libyan','liechtensteiner','lithuanian','luxembourger','macedonian','malagasy','malawian','malaysian','maldivan','malian','maltese','marshallese','mauritanian','mauritian','mexican','micronesian','moldovan','monacan','mongolian','moroccan','mosotho','motswana','mozambican','namibian','nauruan','nepalese','new zealander','nicaraguan','nigerian','nigerien','north korean','northern irish','norwegian','omani','pakistani','palauan','panamanian','papua new guinean','paraguayan','peruvian','polish','portuguese','palestinian','qatari','romanian','russian','rwandan','saint lucian','salvadoran','samoan','san marinese','sao tomean','saudi','scottish','senegalese','serbian','seychellois','sierra leonean','singaporean','slovakian','slovenian','solomon islander','somali','south african','south korean','spanish','sri lankan','sudanese','surinamer','swazi','swedish','swiss','syrian','taiwanese','tajik','tanzanian','thai','togolese','tongan','trinidadian/tobagonian','tunisian','turkish','tuvaluan','ugandan','ukrainian','uruguayan','uzbekistani','venezuelan','vietnamese','welsh','yemenite','zambian','zimbabwean']
male.addEventListener("click",()=>{
    gender = "Male";
})
female.addEventListener("click",()=>{
    gender = "Female";
})
let check = true;
btn.addEventListener("click",()=>{
    for (let i = 0; i < inputs.length - 3; i++) {
        if(inputs[i].value == ""){
            inputs[i].placeholder = "Please Fill This";
            inputs[i].style.backgroundColor = '#f3aeaec7';
        }
    }
    if(isNaN(+id.value) && id.value != ""){
        id.value = "";
        id.placeholder = "ID Must Be Numbers";
        id.style.backgroundColor = '#f3aeaec7';
    }
    else if(id.value.length != 8 && id.value != ""){
        id.value = "";
        id.placeholder = "ID Must Equal 8 Numbers";
        id.style.backgroundColor = '#f3aeaec7';
    }
    if((+gpa.value < 0 || +gpa.value > 4 )  && gpa.value != ""){
        gpa.value = "";
        gpa.placeholder = "GPA Must Be Between 0 and 4";
        gpa.style.backgroundColor = '#f3aeaec7';
    }
    if((+level.value < 1 || +level.value > 4)  && level.value != ""){
        level.value = "";
        level.placeholder = "Level Must Be Between 1 and 4";
        level.style.backgroundColor = '#f3aeaec7'
    }
    if((+year.value < 2018 || +year.value > 2022) && year.value != ""){
        year.value = "";
        year.placeholder = "Year Must Be Between 2018 and 2022";
        year.style.backgroundColor = '#f3aeaec7'
    }
    if(+points.value <= 1000){
        points.value = "";
        points.placeholder = "points Must Be More Than Or Equal 1000";
        points.style.backgroundColor = '#f3aeaec7'
    }
    if(!departments.includes(dep.value.toLowerCase())  && dep.value != ""){
        dep.value = "";
        dep.placeholder = "Department Not Found";
        dep.style.backgroundColor = '#f3aeaec7'
    }
    if(phone.value.length != 11  && phone.value != ""){
        phone.value = "";
        phone.placeholder = "Phone Must Equal 11 Numbers";
        phone.style.backgroundColor = '#f3aeaec7'
    }
    if(!statuses.includes(Status.value.toLowerCase())  && Status.value != ""){
        Status.value = "";
        Status.placeholder = "Status Must Equal Active or Not Active";
        Status.style.backgroundColor = '#f3aeaec7'
    }
    if(!nationalities.includes(nationality.value.toLowerCase())  && nationality.value != ""){
        nationality.value = "";
        nationality.placeholder = "Invalid Nationality";
        nationality.style.backgroundColor = '#f3aeaec7'
    }
    if(isNaN(+nationalID.value)  && nationalID.value != ""){
        nationalID.value = "";
        nationalID.placeholder = "National ID Must Be Numbers";
        nationalID.style.backgroundColor = '#f3aeaec7';
    }
    if(gender == undefined){
        check = false;
        alert("Please Choose Gender");
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == id.value){
            check =false;
            id.value = "";
            id.placeholder = "This ID Is Already Taken";
            id.style.backgroundColor = '#f3aeaec7'; 
        }
    }
    let change = dep.value;
    if(change.toLowerCase() == "general"){
        if(change[0] === "g"){
            dep.value = "General";
        }
    }
    change = Status.value
    if(change.toLowerCase() == "active"){
        if(change[0] === "a"){
            Status.value = "Active";
        }
    }else if(change.toLowerCase() == "notactive"){
        if(change[0] === "n"){
            Status.value = "NotActive";
        }
    }
    const obj = {
        name : studentName.value,
        id : id.value,
        gpa : gpa.value,
        gender : gender,
        level : level.value,
        status : Status.value,
        dep : dep.value == "General" ? dep.value:dep.value.toUpperCase(),
        email : email.value,
        birth : date.value,
        number : phone.value
    }
    for (let i = 0; i < inputs.length - 3; i++) {
        if(inputs[i].value == ""){
            check=false;
        }
    }
    if(check){
        data.push(obj);
        localStorage.students = JSON.stringify(data)
        alert("Student Added Successfully")
        location.reload();
    }
    check = true;
})

for (let i = 0; i < inputs.length - 3; i++) {
    inputs[i].addEventListener("keydown",()=>{
        inputs[i].style.backgroundColor = "white";
    })
}

reset.addEventListener("click",()=>{
    location.reload();
})
