let prices1 = document.getElementsByClassName('card-text');
let counts1 = document.getElementsByClassName('number');

let allSum1 = document.getElementsByClassName('el-text')[0];
let allSumWithDelivery1 = document.getElementsByClassName('el-text1')[0];

function totalPriceCalc(event){
    let sumsum=0;
    for(let i=0;i<prices1.length; i++){
        sumsum += Number (prices1[i].innerHTML) *  Number (counts1[i].value);
    }
    if(sumsum == 0){
        allSumWithDelivery1.innerHTML = 0;
    }
    else{
        allSumWithDelivery1.innerHTML = sumsum+200;
    }
    allSum1.innerHTML= sumsum;
}

function countValidation(event){
    if (event.target.value <=0){
        event.target.value = 1;
    }
}

for (let i = 0; i<counts1.length;i++){
    counts1[i].addEventListener('change',countValidation);
    counts1[i].addEventListener('change',totalPriceCalc);
}
