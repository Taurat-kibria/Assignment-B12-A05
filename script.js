
// heart icon feature

const cards = document.getElementsByClassName('heart_icon')

for (const card of cards) {
    card.addEventListener('click', function () {
        let heartCount = parseInt(document.getElementById('heart_count').innerText);
        heartCount = heartCount + 1;
        document.getElementById('heart_count').innerText = heartCount

    })
}



const AllCard = document.getElementsByClassName('card');

for (const tem of AllCard) {

    tem.querySelector('.call_btn').addEventListener('click', function () {
        const cardTittle = tem.querySelector('.card_tittle').innerText
        const cardNum = tem.querySelector('.card_num').innerText

        alert(cardTittle + "\nNumber: " + cardNum)

        // call button feature
        let token = parseInt(document.getElementById('gold_count').innerText)
        token = token - 20;
        if (token < 20) {
            alert('Insufficient coins')
        }
        document.getElementById('gold_count').innerText = token



        



        // call history funtionality

        const time = new Date().toLocaleTimeString();

        let div = document.createElement('div')
        div.innerHTML = `
            <div class="flex justify-between items-center bg-[#fafafa]
             rounded-lg p-4 mt-4 ">

                <div class="l">
                    <h1 id="call_his_tit" class="text-lg font-semibold">
                    ${cardTittle}</h1>
                    <p id="call_his_num" class="text-[#5c5c5c] text-lg font-normal">
                    ${cardNum}</p>
                </div>

                <div class="r">
                    <p class="text-[#5c5c5c] text-lg font-normal">
                    ${time} AM</p>
                </div>
            </div>
            `
        // clear btn funtionality
        document.getElementById('call_his_parent').appendChild(div)
        document.getElementById("clear_btn")
            .addEventListener('click', function () {
                div.innerHTML = ``

            })


    })

    // copy btn features
        tem.querySelector('.copy_btn')
         .addEventListener('click', function(){
            let copyCount = parseInt(document.getElementById('copy_count').innerText)
            copyCount += 3;
            document.getElementById('copy_count').innerText = copyCount;
            const cardNum = tem.querySelector('.card_num').innerText

            navigator.clipboard.writeText(cardNum);

         })


}








