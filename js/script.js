

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
    li.classList.add("flex","justify-between");
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
    
    const haveSeats = document.getElementsByClassName("have-seats").innerText;
    let devid = 36 - parseInt(count);

    
    setInnerText('have-seats', devid);
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



