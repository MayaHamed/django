const edit = document.getElementById("edit")
const name = document.getElementById("firstname")
edit.addEventListener("click", () => {
    // name.style.pointer - events = "all";
    console.log(1)
    name.style.pointerEvents = "auto";
})