function random_(from, to) {
    return (from + Math.floor(Math.random() * (to - from + 1)))
}



const heading = document.getElementById('hello')
const bttn = document.querySelectorAll(".bttn")[0]
const bttn2 = document.querySelectorAll(".bttn")[1]
function change_styles(node) {
    node.style.color = "white"
    node.style.backgroundColor = "black"
    node.style.textAlign = "center"
}

change_styles(heading)


heading.style.textAlign




console.log("1")
bttn.onmouseover = () => {
    console.log("ON!")
    bttn.style.left = String(random_(10, 90)) + "vw"
    bttn.style.top = String(random_(40, 80)) + "vh"
}


bttn2.onmousemove = (event) => {
    console.log(event.clientX)
    console.log(bttn2.getBoundingClientRect().x)
    bttn2.style.left = String((event.clientX / document.documentElement.scrollWidth) * 100 - 10) + "%"
    bttn2.style.top = String(event.clientY / document.documentElement.scrollHeight * 100 - 5) + "%"
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


