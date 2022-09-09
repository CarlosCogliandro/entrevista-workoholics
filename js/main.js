
const pinkBtn = document.getElementById('pink')
const blackBtn = document.getElementById('black')
const imgChange = document.getElementById('imgChange')

pinkBtn.onclick = function(){
    imgChange.src ="./images/Tshirt1.png";
}

blackBtn.onclick = function(){
    imgChange.src ="./images/Tshirt2.png";
}

