const switchInput = document.querySelector("#switch");

//This indicates monthly or annually period
//0 -> Monthly
//1 -> Annualy
let period = 0;

switchInput.addEventListener("click", changePrice);

function changePrice() {
  const prices = [
    ["$19.99", "$24.99", "$39.99"],
    ["$199.99", "$249.99", "$399.99"]
  ];

  const domElements = [
    document.querySelector("#basic-price"),
    document.querySelector("#pro-price"),
    document.querySelector("#master-price")
  ];

  //Function to animate the switch
  animateSwitch(period);

  domElements.forEach((price, i) => {
    //if anual is active, switch to monthly
    if (period) {
      price.innerText = prices[0][i];
    } else {
      //Else switch to anual
      price.innerText = prices[1][i];
    }
  });

  //Change the period to monthly/annually
  period ? (period = 0) : (period = 1);
}

function animateSwitch(period) {
  const switchBall = document.querySelector("#switch-ball");

  const periodsName = [document.querySelectorAll(".switch-container span")][0];

  //Change the period's color

  if (period) {
    periodsName[1].style.color = "grey";
    periodsName[0].style.color = "black";
  } else {
    periodsName[0].style.color = "grey";
    periodsName[1].style.color = "black";
  }

  //Animate switch
  switchBall.classList.toggle("move");
}
