const currency_one = document.getElementById('currency-1');
const currency_two = document.getElementById('currency-2');

const amount_one = document.getElementById('amount-1');
const amount_two = document.getElementById('amount-2');

const rateText = document.getElementById('rate');
const swap = document.getElementById('swapbtn');

currency_one.addEventListener('change',calMoney);
currency_two.addEventListener('change',calMoney);
amount_one.addEventListener('input',calMoney);
amount_two.addEventListener('input',calMoney);

function calMoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/7c79dec03fa16580bad7e5c9/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[two]
        rateText.innerText = `1 ${one} = ${rate} ${two}`;
        amount_two.value=(amount_one.value*rate).toFixed(2);
       
    })
}
swap.addEventListener('click',()=>{
    // เอา 1 ไปเก็บ เอา 2 มาแทน 1 จากนั้นเอาที่เก็บมาแทน 2//
    const temp = currency_one.value;  // ค่าจากต้นทาง //
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calMoney();

})


calMoney(); 