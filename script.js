const allSeats = document.getElementsByClassName("seat");
let count = 0;

for (const seat of allSeats) {
  seat.addEventListener("click", function handle(event) {
    count = count + 1;

    event.target.setAttribute("disabled", true);

    const seatNumber = event.target.innerText ;
    const seatPrice = document.getElementById('seat-price').innerText ;
    const seatTitle = document.getElementById('get-seat');

    const li = document.createElement('li');

    const p = document.createElement('p');
    p.innerText = seatNumber;
    const p2 = document.createElement('p');
    p2.innerText = seatPrice;
    li.appendChild(p);
    li.appendChild(p2);
    seatTitle.appendChild(li);

    const totalPrice = document.getElementById('total-price').innerText;
    const convertTotalPrice = parseInt(totalPrice);
    const sum = convertTotalPrice + parseInt(seatPrice);

    const grandTotal = document.getElementById('grand-total').innerText ;
    const convertGrandTotal = parseInt(grandTotal);
    const sum2 =  convertGrandTotal + parseInt(seatPrice) ;
    


    setInnerText('grand-total', sum2);
    setInnerText('total-price', sum);
    setInnerText('seat-count', count);
    
    event.target.setAttribute("disable", true);
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
      
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// Coupon code apply start ------
document.getElementById("coupon-code").addEventListener("keyup", function (event) {
  const text = event.target.value;
  const applyButton = document.getElementById("apply");

  if (text === "NEW15") {
    applyButton.removeAttribute("disabled");
    }
  if (text === "Couple 20") {
    applyButton.removeAttribute("disabled");
    }
  else {
    applyButton.setAttribute("disabled", true);
    }
  });
function apply() {
  const btnApply = document.getElementById("coupon-apply-container");
  btnApply.style.display = "none";
}

