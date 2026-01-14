import {user_input,products,header,brand,fil,card,popup} from "./vari.js"
var i;
 function fil_calculator(index) {
  return new Promise(() => {
    withDelay(() => {
      if (fil[index].qty > 0) {
        fil[index].qty--;
        console.log(
          "Added to cart:",
          "BRAND:",
          fil[index].brand,
          "MODEL:",
          fil[index].model
        );
        renderproduc(user_input);
        console.log("Remaining stock:", fil[index].qty);
        showPopup("Item added to cart");
        popup.style.background = "#00fe04ff";
      } else {
        showPopup("Item is not available currently. We are re-stocking.");
        console.error(
          `the ${fil[index].model} is now out of stock re-stock it now `
        );
      }
    });
  });
}

 function calculator(index) {
  return new Promise(() => {
    withDelay(() => {
      // <!-- THIS IF–ELSE CONDITION IS USED TO CHECK THE PRODUCT QTY WHEN THE ADD TO CART BUTTON IS CLICKED -->

      if (products[index].qty > 0) {
        // <!-- IT SHOWS THE REMAINING PRODUCT QTY AND MODEL NAME WHEN THE QTY IS GREATER THAN 0 -->
        products[index].qty--;
        console.log(
          "Added to cart:",
          "BRAND:",
          products[index].brand,
          "MODEL:",
          products[index].model
        );
        console.log("Remaining stock:", products[index].qty);
        renderproduc(user_input);

        // <!-- THIS showPopup FUNCTION DISPLAYS A POP-UP MESSAGE WHEN AN ITEM IS ADDED TO THE CART-->
        showPopup("Item added to cart");
        popup.style.background = "#00fe04ff";

        // <!-- THIS ELSE PART WORKS WHEN THE PRODUCT QTY IS LESS THAN OR EQUAL TO 0, AND IT DISPLAYS AN OUT-OF-STOCK MESSAGE-->
      } else {
        showPopup("Item is not available. We are re-stocking.");
        console.error(
          `the ${products[index].model} is now out of stock re-stock it now `
        );
      }
    });
  });
}

export function renderproduc(u) {
  // <!-- 4.CLEAR EXISTING PRODUCTS BEFORE RENDERING NEW ONES -->
  cart.innerHTML = "";


  // <!-- 5. CREATING AN IF–ELSE CONDITION TO DISPLAY PRODUCTS BASED ON THE USER-SELECTED BRAND; IF NO BRAND IS SELECTED, THE DEFAULT VALUE IS “ALL,” SO ALL PRODUCTS FROM THE API ARE RENDERED -->
  if (user_input == "all") {
    for (i = 0; i < products.length; i++) {
      // <!-- 6. CREATING A CARD DIV TO RENDER EACH PRODUCT IN A SEPARATE CARD -->
      var card = document.createElement("div");
      card.id = "card";

      // <!-- 7. GETTING THE IMAGE FROM LOCAL STORAGE USING THE MODEL NAME AS THE SRC, SINCE IT WAS SAVED WITH THE SAME NAME -->
      var img = document.createElement("img");
      img.id = "images";
      img.src = `./img/${products[i].model}.jpg`;
      card.appendChild(img);

      // <!-- 8. SENDING THE PRODUCT DETAILS TO THE LINE FUNCTION ALONG WITH THE CARD DIV SO IT CAN APPEND THE DETAILS INTO THE CARD -->
      for (var j in products[i]) {
        if (j === "qty") continue;
        line(card, j.toUpperCase(), products[i][j]);
      }
      // <!-- 9. CREATING THE ADD TO CART BUTTON USING AN IF–ELSE CONDITION: IF THE QTY IS 0, THE BUTTON TURNS RED AND DISPLAYS “OUT OF STOCK”; OTHERWISE, THE BUTTON REMAINS UNCHANGED -->
      var btn = document.createElement("button");
      btn.innerText = "Add to cart";
      btn.id = i;
      btn.classList.add("cartbtn");
      if (products[i].qty <= 0) {
        btn.classList.add("atc-btn");
        btn.classList.remove("cartbtn");
        btn.innerText = "Out of stock";
      } else {
        btn.classList.remove("atc-btn");
        btn.innerText = "Add to cart";
      }

      // <!-- 10. ADDING AN EVENT LISTENER TO THE ADD TO CART BUTTON SO THE QTY DECREASES WHEN IT IS CLICKED -->
      btn.addEventListener("click", function () {
        calculator(this.id);
      });
      // <!-- 11. FINALLY, APPENDING THE ADD TO CART BUTTON TO THE CARD AND THE CARD TO THE CART -->
      card.appendChild(btn);
      cart.appendChild(card);
    }
    // <!-- THIS ELSE PART WORKS THE SAME AS THE IF PART; HOWEVER, WHEN THE USER CLICKS A FILTER BUTTON, THE DEFAULT VALUE IS UPDATED TO THE USER-SELECTED VALUE, SO ONLY THE SELECTED PRODUCTS ARE RENDERED -->
  } else {
    fil = products.filter((p) => p.brand === user_input);
    console.log(fil);
    for (i = 0; i < fil.length; i++) {
      var card = document.createElement("div");
      card.id = "card";
      var img = document.createElement("img");
      img.id = "images";
      img.src = `./img/${fil[i].model}.jpg`;
      card.appendChild(img);
      for (var j in fil[i]) {
        if (j === "qty") continue;
        line(card, j.toUpperCase(), fil[i][j]);
      }

      var btn = document.createElement("button");
      btn.innerText = "Add to cart";
      btn.id = i;
      btn.classList.add("cartbtn");

      if (fil[i].qty <= 0) {
        btn.classList.add("atc-btn");
        btn.classList.remove("cartbtn");
        btn.innerText = "Out of stock";
        // btn.disabled = true;
      } else {
        btn.classList.remove("atc-btn");
        btn.innerText = "Add to cart";
        // btn.disabled = false;
      }
      btn.addEventListener("click", function () {
        fil_calculator(this.id);
      });

      card.appendChild(btn);

      cart.appendChild(card);
    }
  }
}

function line(card, h, b) {
  let bd = document.createElement("p");
  bd.innerText = h + " : " + b;
  card.appendChild(bd);
}

export function withDelay(callback) {
  loader.style.display = "flex";
  setTimeout(function () {
    loader.style.display = "none";
    callback();
  }, 1500);
}


export function fil_btn(){
   for (i = 0; i < brand.length; i++) {
      var fill_btn = document.createElement("button");
      fill_btn.innerText = brand[i];
      fill_btn.id = i;
      fill_btn.classList.add("fillbutton");
      var spn = document.createElement("span");
      spn.classList.add("text");
      fill_btn.appendChild(spn);
      header.appendChild(fill_btn);
      fill_btn.addEventListener("click", function () {
        var selectedBrand = brand[this.id];
        withDelay(() => {
          user_input = selectedBrand;
          renderproduc(user_input);
        });
      });
    }
}

 function showPopup(msg) {
  popup.innerText = msg;
  popup.style.display = "block";

  // <!-- THIS setTimeout FUNCTION REMOVES THE POP-UP AFTER THE DESIRED TIME; IN THIS CASE, IT IS SET TO 1.5 SECONDS-->
  setTimeout(function () {
    popup.style.display = "none";
    popup.style.background = "rgb(255, 0, 0)";
  }, 1000);
}