
function apply(){
    let discountPercentage = 0;
    const totalPrice = document.getElementById("total-price").innerText;
    const convertTotalPrice = parseInt(totalPrice);
    

    const couponCode = document.getElementById("coupon-code").value ;

    if(couponCode === "NEW15"){
        discountPercentage = 15;
    }
    else if(couponCode === "Couple 20"){
        discountPercentage = 20;
    }

    const discountAmount = (convertTotalPrice * discountPercentage) / 100;
    
    const grandTotal = convertTotalPrice - discountAmount;

    document.getElementById("grand-total").innerText = grandTotal;

    console.log(grandTotal);
    
}
