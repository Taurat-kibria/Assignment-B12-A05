
// heart icon feature

const cards = document.getElementsByClassName('heart_icon')

for(const card of cards){
    card.addEventListener('click', function () {
        let heartCount = parseInt(document.getElementById('heart_count').innerText);
        heartCount = heartCount + 1;
        document.getElementById('heart_count').innerText = heartCount
        
    })
    }


    
    // const callBtns = document.querySelectorAll('.call_btn')
    // const cardTittle = document.getElementsByClassName('card_tittle')
    // const cardNum = document.getElementsByClassName('card_num')
    
    const AllCard = document.getElementsByClassName('card');
    
    for(const tem of AllCard){
        
        tem.querySelector('.call_btn').addEventListener('click',function(){
             const cardTittle = tem.querySelector('.card_tittle').innerText
            const cardNum = tem.querySelector('.card_num').innerText

            alert(cardTittle +"\nNumber: " + cardNum)
            
            // call button feature
            let token = parseInt(document.getElementById('gold_count').innerText)
            token = token - 20;
            if(token < 20){
                alert('Insufficient coins')
            }
            document.getElementById('gold_count').innerText = token

            
            

           

        })

        
    }
    

    
    
    // for(const btn of callBtns){
    //     btn.addEventListener('click',function(){
            
    //         let token = parseInt(document.getElementById('gold_count').innerText)
    //         token = token - 20;
    //         if(token < 20){
    //             alert('Insufficient coins')
    //         }
    //         document.getElementById('gold_count').innerText = token
    //     })
    // }




