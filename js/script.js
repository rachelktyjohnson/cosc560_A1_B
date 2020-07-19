let checkoutForm = document.querySelector("#payment-method");

let cashInfo = document.querySelector(".payment-cash");
let cardInfo = document.querySelector(".payment-card");
cashInfo.style.display="none";
cardInfo.style.display="none";

checkoutForm.addEventListener('change',function(){
    if(checkoutForm.value === "cash"){
        cardInfo.style.display="none";
        cashInfo.style.display="block";
    } else if (checkoutForm.value === "card"){
        cardInfo.style.display="block";
        cashInfo.style.display="none";
    }
})