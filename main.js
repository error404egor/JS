function random_(from, to) {
    return (from + Math.floor(Math.random() * (to - from + 1)))
}



const heading = document.getElementById('hello')
const bttn = document.querySelectorAll(".bttn")[0]
const bttn2 = document.querySelectorAll(".bttn")[1]
function change_styles(node) {
    node.style.color = "white"
    node.style.backgroundColor = "red"
    node.style.textAlign = "center"
}

change_styles(heading)

heading.style.textAlign
function change_styles(node) {
    node.style.color = "white"
    node.style.backgroundColor = "black"
    node.style.textAlign = "center"
}



console.log("1")
bttn.onmouseover = () => {
    console.log("ON!")
    bttn.style.left = String(random_(10, 90)) + "vw"
    bttn.style.top = String(random_(40, 80)) + "vh"
}

bttn.onclick = () => {
    alert("Как ты это сделал?")
}

heading.onclick = () => {
    if (heading.style.backgroundColor === "black") {
        heading.style.backgroundColor = "white"
        heading.style.color = "black"
    } else {
        heading.style.backgroundColor = "black"
        heading.style.color = "white"
    }

}


bttn2.onclick = () => {
    alert("Поздравляем, вы дурачок!")
}


