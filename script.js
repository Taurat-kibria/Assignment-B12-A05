
const cards = document.getElementsByClassName('heart_icon')

for(const card of cards){
    card.addEventListener('click', function () {
        const heartCount = document.getElementById('heart_count').innerText;
        console.log(heartCount)
    })
}

