function getCost(coffee) {
  let count = 0;
  const size = document.querySelector(`input[name=${coffee}-size]:checked`).value;
  const milk = document.querySelector(`input[name=${coffee}-milk]:checked`).value;
  let sizeCheck = ["small",3,"medium",4,"large",5]
  let milkCheck = ["whole",0.5,"almond",1,"oat",0.5,"noMilk", 0]

  if (coffee == 'cappuccino') {
  for(let i = 0; i < sizeCheck.length; i++) {
    if (sizeCheck[i] === size) {
      count = sizeCheck[i+1]
    }
  } for(let i = 0; i < milkCheck.length; i++) {
    if (milkCheck[i] === milk) {
      count += milkCheck[i+1];
    }
  }
} if (coffee == 'americano') {
  for(let i = 0; i < sizeCheck.length; i++) {
    if (sizeCheck[i] === size) {
      count = sizeCheck[i+1]
    }
  } for(let i = 0; i < milkCheck.length; i++) {
    if (milkCheck[i] === milk) {
      count += milkCheck[i+1];
    }
  }
} 
return count;
}

function getCostEsp(coffee) {
  const size = document.querySelector(`input[name=${coffee}-size]:checked`).value;
    switch (size) {
    case "small":
      return 2;
    case "medium":
      return 3;
    case "large":
      return 4;
  }
}

function showPopup(name, cost) {
  let recipe = ""
  if (name == "Espresso") {
   recipe = `Recipe: \n 
   1. Grind your coffee.\n 
   2. Boil Water.\n 
   3. Add the coffee grounds into the press.\n 
   4. Fill the press with the remaining water and stir.\n 
   5. Let the coffee steep.\n 
   6. Press the piston/plunger.\n`};
  if (name == "Cappuccino") {
  recipe = `Recipe:\n 
  1. Brew the coffee. ... \n 
  2. While your coffee is brewing, heat the milk. ... Use the thermometer to determine when the milk reaches about 155°F, which is the ideal temperature for frothing milk.\n
  3. Use the whisk to froth the milk. ... Pour the milk and milk foam slowly over the coffee. ...\n
  4. Serve and enjoy.\n`};
    if (name == "Americano") {
  recipe = `Recipe: 
  1. Fill a mug approx 2/3rds full with hot water. \n 
  2. Brew a single or double espresso (as per taste or order) directly into the mug containing hot water. \n 
  Enjoy your Americano!\n \n `};

  document.querySelector(".coffee-name").textContent = name;
  document.querySelector(".recipe").textContent = recipe;
  document.querySelector(".cost").textContent = `Cost: $${cost}`;
  document.querySelector("#overlay").style.display = "block";
  document.querySelector("#popup").style.display = "block";
}

function hidePopup() {
  document.querySelector("#overlay").style.display = "none";
  document.querySelector("#popup").style.display = "none";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);