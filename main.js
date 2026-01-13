  // <!-- CREATION OF PRODUCTS API-->
 const products = [
   {
     brand: "SAMSUNG",
     model: "Galaxy S24 FE 5G",
     display: "6.5 AMOLED 120Hz",
     chip: "Snapdragon 8 Gen 1",
     ram: "8GB",
     storage: "128GB",
     camera: "50MP + ultrawide",
     battery: "4500mAh",
     charging: "25W",
     price: 39999,
     note: "Flagship-lite, smooth UI",
     qty: 10,
   },
   {
     brand: "SAMSUNG",
     model: "Galaxy A55 5G",
     display: "6.6 Super AMOLED 120Hz",
     chip: "Exynos 1480",
     ram: "8GB",
     storage: "128GB",
     camera: "50MP + 12MP + 5MP",
     battery: "5000mAh",
     charging: "25W",
     price: 39999,
     note: "Best mid-range Samsung with premium build",
     qty: 10,
   },
   {
     brand: "SAMSUNG",
     model: "Galaxy S23",
     display: "6.1 Dynamic AMOLED 120Hz",
     chip: "Snapdragon 8 Gen 2",
     ram: "8GB",
     storage: "128GB",
     camera: "50MP + 12MP + 10MP",
     battery: "3900mAh",
     charging: "25W",
     price: 49999,
     note: "Compact flagship with excellent camera and performance",
     qty: 10,
   },
   {
     brand: "SAMSUNG",
     model: "Galaxy S23 FE",
     display: "6.4 AMOLED 120Hz",
     chip: "Exynos 2200 / Snapdragon variant",
     ram: "8GB",
     storage: "128GB",
     camera: "50MP + 12MP + 8MP",
     battery: "4500mAh",
     charging: "25W",
     price: 39999,
     note: "Fan Edition flagship balance phone",
     qty: 10,
   },
   {
     brand: "SAMSUNG",
     model: "Galaxy S25 Ultra",
     display: "6.9 Dynamic AMOLED",
     chip: "Snapdragon 8 Elite",
     ram: "12GB",
     storage: "256GB+",
     camera: "200MP quad setup",
     battery: "5000mAh",
     charging: "Fast charging",
     price: 109999,
     note: "Top-tier camera and performance",
     qty: 10,
   },
   {
     brand: "SAMSUNG",
     model: "Galaxy Z Fold7 5G",
     display: "Foldable AMOLED",
     chip: "Flagship Snapdragon",
     ram: "12GB+",
     storage: "256GB+",
     camera: "Premium multi-camera",
     battery: "Large dual-cell",
     charging: "Fast charging",
     price: 149999,
     note: "Only worth it if you need foldable productivity",
     qty: 10,
   },
   {
     brand: "VIVO",
     model: "X300 Pro 5G",
     display: "6.78 AMOLED 120Hz",
     chip: "Dimensity 9500",
     ram: "16GB",
     storage: "512GB",
     camera: "200MP + 50MP + 50MP",
     battery: "6510mAh",
     charging: "Fast charging",
     price: 109999,
     note: "Excellent camera + performance combo",
     qty: 10,
   },
   {
     brand: "VIVO",
     model: "X300",
     display: "6.31 AMOLED",
     chip: "Dimensity 9500",
     ram: "12GB",
     storage: "256GB",
     camera: "200MP + 50MP",
     battery: "6040mAh",
     charging: "Fast charging",
     price: 75999,
     note: "Flagship power at lower cost",
     qty: 10,
   },
   {
     brand: "VIVO",
     model: "V60e",
     display: "6.77 AMOLED",
     chip: "Mid-range SoC",
     ram: "8GB",
     storage: "128GB",
     camera: "200MP",
     battery: "6500mAh",
     charging: "Fast charging",
     price: 15660,
     note: "Best under-20k for camera + battery",
     qty: 10,
   },
   {
     brand: "VIVO",
     model: "V50 5G",
     display: "AMOLED",
     chip: "Mid-range SoC",
     ram: "8GB",
     storage: "128GB",
     camera: "50MP",
     battery: "Large battery",
     charging: "Fast charging",
     price: 39999,
     note: "Balanced mid-range phone",
     qty: 10,
   },
   {
     brand: "OPPO",
     model: "Find X9 Pro",
     display: "6.78 AMOLED",
     chip: "Dimensity 9500",
     ram: "12GB",
     storage: "256GB",
     camera: "200MP + 50MP + 50MP",
     battery: "7500mAh",
     charging: "Fast charging",
     price: 109999,
     note: "Flagship rival to Vivo X300 Pro",
     qty: 10,
   },
   {
     brand: "OPPO",
     model: "Reno15c",
     display: "AMOLED",
     chip: "Mid-range SoC",
     ram: "8GB",
     storage: "128GB",
     camera: "Good camera setup",
     battery: "Long battery life",
     charging: "Fast charging",
     price: 28000,
     note: "Balanced daily-use phone",
     qty: 10,
   },
   {
     brand: "OPPO",
     model: "F29 Pro 5G",
     display: "6.7 AMOLED",
     chip: "Dimensity 7300",
     ram: "8GB",
     storage: "128GB",
     camera: "50MP + 2MP",
     battery: "5000mAh",
     charging: "Fast charging",
     price: 24000,
     note: "Decent budget 5G phone",
     qty: 10,
   },
   {
     brand: "OPPO",
     model: "A6x 5G",
     display: "LCD",
     chip: "Entry-level 5G",
     ram: "6GB",
     storage: "128GB",
     camera: "Basic camera",
     battery: "5000mAh",
     charging: "Standard",
     price: 13000,
     note: "Best for tight budgets",
     qty: 10,
   },
   {
     brand: "ONEPLUS",
     model: "15R 5G",
     display: "6.83 AMOLED 165Hz",
     chip: "Snapdragon 8 Gen 5",
     ram: "12GB",
     storage: "256GB",
     camera: "50MP + 8MP",
     battery: "7400mAh",
     charging: "Fast charging",
     price: 47999,
     note: "Monster performance, average camera",
     qty: 10,
   },
   {
     brand: "ONEPLUS",
     model: "15",
     display: "AMOLED",
     chip: "Snapdragon 8 Elite",
     ram: "16GB",
     storage: "512GB",
     camera: "Triple 50MP",
     battery: "7300mAh",
     charging: "120W",
     price: 72999,
     note: "True flagship all-rounder",
     qty: 10,
   },
   {
     brand: "ONEPLUS",
     model: "Nord CE 5G",
     display: "AMOLED",
     chip: "Mid-range Snapdragon",
     ram: "8GB",
     storage: "128GB",
     camera: "Decent camera",
     battery: "Large battery",
     charging: "Fast charging",
     price: 24999,
     note: "Good value mid-range phone",
     qty: 10,
   },
   {
     brand: "ONEPLUS",
     model: "Nord 5G",
     display: "AMOLED",
     chip: "Upper mid-range Snapdragon",
     ram: "8GB",
     storage: "256GB",
     camera: "Good camera",
     battery: "Large battery",
     charging: "Fast charging",
     price: 31998,
     note: "Strong under-35k option",
     qty: 10,
   },
   {
     brand: "ONEPLUS",
     model: "13R 5G",
     display: "AMOLED",
     chip: "Snapdragon 8 Gen 2",
     ram: "12GB",
     storage: "256GB",
     camera: "Balanced camera",
     battery: "Large battery",
     charging: "Fast charging",
     price: 37999,
     note: "Best balance of performance and value",
     qty: 10,
   },
   {
     brand: "REALME",
     model: "Narzo 60 5G",
     display: "6.43 AMOLED 120Hz",
     chip: "Dimensity 6020",
     ram: "8GB",
     storage: "128GB",
     camera: "64MP + 2MP",
     battery: "5000mAh",
     charging: "33W",
     price: 17000,
     note: "Budget AMOLED + decent performance",
     qty: 10,
   },
   {
     brand: "REALME",
     model: "12 Pro 5G",
     display: "6.7 Curved AMOLED 120Hz",
     chip: "Snapdragon 6 Gen 1",
     ram: "8GB",
     storage: "256GB",
     camera: "50MP OIS + 32MP telephoto",
     battery: "5000mAh",
     charging: "67W",
     price: 25000,
     note: "Camera-focused midrange phone",
     qty: 10,
   },
   {
     brand: "REALME",
     model: "GT 6",
     display: "6.78 AMOLED 120Hz",
     chip: "Snapdragon 7+ Gen 3",
     ram: "12GB",
     storage: "256GB",
     camera: "50MP Sony LYT-808",
     battery: "5500mAh",
     charging: "120W",
     price: 35000,
     note: "Performance monster for the price",
     qty: 10,
   },
   {
     brand: "REALME",
     model: "GT 6 Pro",
     display: "6.78 LTPO AMOLED 120Hz",
     chip: "Snapdragon 8s Gen 3",
     ram: "16GB",
     storage: "512GB",
     camera: "50MP + 50MP telephoto",
     battery: "5800mAh",
     charging: "120W",
     price: 40000,
     note: "Almost flagship-level power",
     qty: 10,
   },
   {
     brand: "IQOO",
     model: "Z9 5G",
     display: "6.67 AMOLED 120Hz",
     chip: "Dimensity 7200",
     ram: "8GB",
     storage: "128GB",
     camera: "50MP Sony IMX882",
     battery: "5000mAh",
     charging: "44W",
     price: 18000,
     note: "Best performance under 20k",
     qty: 10,
   },
   {
     brand: "IQOO",
     model: "Neo 7 Pro",
     display: "6.78 AMOLED 120Hz",
     chip: "Snapdragon 8+ Gen 1",
     ram: "12GB",
     storage: "256GB",
     camera: "50MP + 8MP",
     battery: "5000mAh",
     charging: "120W",
     price: 35000,
     note: "Hardcore gaming phone",
     qty: 10,
   },
   {
     brand: "IQOO",
     model: "Neo 9 Pro",
     display: "6.78 AMOLED 144Hz",
     chip: "Snapdragon 8 Gen 2",
     ram: "16GB",
     storage: "256GB",
     camera: "50MP Sony IMX920",
     battery: "5160mAh",
     charging: "120W",
     price: 36000,
     note: "Flagship performance at mid price",
     qty: 10,
   },
   {
     brand: "IQOO",
     model: "12 5G",
     display: "6.78 LTPO AMOLED 144Hz",
     chip: "Snapdragon 8 Gen 3",
     ram: "16GB",
     storage: "512GB",
     camera: "50MP + 64MP telephoto",
     battery: "5000mAh",
     charging: "120W",
     price: 53000,
     note: "True flagship killer",
     qty: 10,
   },
   {
     brand: "XIAOMI",
     model: "Redmi Note 13 Pro 5G",
     display: "6.67 AMOLED 120Hz",
     chip: "Snapdragon 7s Gen 2",
     ram: "8GB",
     storage: "128GB",
     camera: "200MP",
     battery: "5100mAh",
     charging: "67W",
     price: 25000,
     note: "Camera beast, average performance",
     qty: 10,
   },
   {
     brand: "XIAOMI",
     model: "14 Civi",
     display: "6.55 AMOLED 120Hz",
     chip: "Snapdragon 8s Gen 3",
     ram: "12GB",
     storage: "512GB",
     camera: "50MP Leica",
     battery: "4700mAh",
     charging: "67W",
     price: 27000,
     note: "Premium design + camera",
     qty: 10,
   },
   {
     brand: "XIAOMI",
     model: "14",
     display: "6.36 LTPO AMOLED 120Hz",
     chip: "Snapdragon 8 Gen 3",
     ram: "12GB",
     storage: "512GB",
     camera: "50MP Leica triple cam",
     battery: "4610mAh",
     charging: "90W",
     price: 70000,
     note: "Compact flagship",
     qty: 10,
   },
   {
     brand: "XIAOMI",
     model: "14 Ultra",
     display: "6.73 LTPO AMOLED 120Hz",
     chip: "Snapdragon 8 Gen 3",
     ram: "16GB",
     storage: "512GB",
     camera: "50MP quad Leica",
     battery: "5300mAh",
     charging: "90W",
     price: 100000,
     note: "DSLR-level phone camera",
     qty: 10,
   },
   {
     brand: "HONOR",
     model: "X9b 5G",
     display: "6.78 Curved AMOLED 120Hz",
     chip: "Snapdragon 6 Gen 1",
     ram: "8GB",
     storage: "256GB",
     camera: "108MP",
     battery: "5800mAh",
     charging: "35W",
     price: 25000,
     note: "Insane battery + durability",
     qty: 10,
   },
   {
     brand: "HONOR",
     model: "90 5G",
     display: "6.7 AMOLED 120Hz",
     chip: "Snapdragon 7 Gen 1",
     ram: "12GB",
     storage: "512GB",
     camera: "200MP",
     battery: "5000mAh",
     charging: "66W",
     price: 30000,
     note: "Camera-centric phone",
     qty: 10,
   },
   {
     brand: "HONOR",
     model: "Magic 5 Pro",
     display: "6.81 LTPO OLED 120Hz",
     chip: "Snapdragon 8 Gen 2",
     ram: "12GB",
     storage: "512GB",
     camera: "50MP triple cam",
     battery: "5100mAh",
     charging: "66W",
     price: 90000,
     note: "Premium global flagship",
     qty: 10,
   },
   {
     brand: "HONOR",
     model: "Magic 6 Pro",
     display: "6.8 LTPO OLED 120Hz",
     chip: "Snapdragon 8 Gen 3",
     ram: "16GB",
     storage: "512GB",
     camera: "50MP + 180MP telephoto",
     battery: "5600mAh",
     charging: "80W",
     price: 110000,
     note: "Top-tier camera & display",
     qty: 10,
   },
 ];

 console.table(products);

  // <!-- CREATION OF L0OADER DIV-->
 var loader = document.createElement("div");
 loader.id = "loader";

 var spinner = document.createElement("div");
 spinner.className = "spinner";

 loader.appendChild(spinner);
var b = document.getElementsByTagName("body")[0];
 b.appendChild(loader);

  // <!-- iNJECTION OF CSS IN HEAD -->
 var style = document.createElement("style");
 style.innerHTML = `
 .cartbtn {
   border: none;
   background: #000000;
   color: #fff;
   padding: 12px 24px;
   font-size: 15px;
   font-weight: 600;
   border-radius: 6px;
   display: block;
   margin: 0 auto 12px auto;
   width: 30%;
   height: auto;
   cursor: pointer;
   transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
   }
  
   .atc-btn {
   border: none;
   background: #ff0000;
   color: #fff;
   padding: 12px 24px;
   font-size: 15px;
   font-weight: 600;
   border-radius: 6px;
   display: block;
   margin: 0 auto 12px auto;
   width: 30%;
   height: auto;
   cursor: not-allowed;
  
   }
   .cartbtn span {
     letter-spacing: 0.5px;
     }
    
     .cartbtn:hover {
       background: #2ecc71;
       transform: translateY(-2px);
       box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
       }
      
       .fillbutton {
         border: none;
         background: #111;
   color: #fff;
   padding: 12px 10px;
   margin: 10px 1%;
   font-size: 15px;
   font-weight: 600;
   border-radius: 6px;
   cursor: pointer;
   transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
   }

 .fillbutton span {
   letter-spacing: 0.5px;
 }

 .fillbutton:hover {
   background: #2ecc71;
   transform: translateY(-5px);
   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
   }
  
   #images {
     display: block;
     margin: 0 auto 12px auto;
     width: 30%;
     height: 250px;
     }
    
     #loader {
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: rgba(0, 0, 0, 0.5);
       display: none;
       justify-content: center;
       align-items: center;
       z-index: 2000;
       }
      
       .spinner {
         width: 60px;
         height: 60px;
         border: 6px solid #ccc;
         border-top: 6px solid #2ecc71;
         border-radius: 50%;
         animation: spin 1s linear infinite;
         }
        
         @keyframes spin {
           0% {
             transform: rotate(0deg);
             }
   100% {
     transform: rotate(360deg);
   }
 }

 #popup {
   position: fixed;
   top: 20px;
   right: 20px;
   padding: 14px 18px;
   color: #fff;
   border-radius: 6px;
   display: none;
   z-index: 1000;
   font-weight: 600;
   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
   }
  
   #card
  {
 border:1px solid #ccc;
 background:#fff;
 padding:12px;
 margin-bottom:12px;
 border-radius:8px;
 }
   `;
 var head = document.querySelector("head");
 head.appendChild(style);

  // <!-- CREATION OF LOADER FUNCTION -->
 function withDelay(callback) {
   loader.style.display = "flex";
   setTimeout(function () {
     loader.style.display = "none";
     callback();
   }, 1500);
 }

  // <!-- EXCRACTING BRAND NAME FOR FILTER BUTTON -->

 var temp = products.map((p) => p.brand);
 var brand = [];
 for (i = 0; i < temp.length; i++) {
   if (!brand.includes(temp[i])) {
     brand.push(temp[i]);
   }
 }
  console.table(temp);
 console.table(brand);

  // <!-- SETTING THE DEFAULT USER INPUT TO “ALL” TO DISPLAY ALL PRODUCTS INITIALLY  -->
 let user_input = "all";
  // <!-- CREATING THE HEADER TO INSERT THE FILTER BUTTONS -->
 var header = document.createElement("div");
 header.id = "header";
 b.appendChild(header);
  // <!-- CREATION OF FILTER BUTTON -->
  // <!-- 1. IT IS INSIDE THE LOADER FUNCTION SO IT LOADS ALONG WITH THE RENDERED PRODUCTS -->
 withDelay(() => {
    // <!-- 2. THE FILTER BUTTONS ARE CREATED USING PREVIOUSLY EXTRACTED BRANDS -->

   for (i = 0; i < brand.length; i++) {
     var fill_btn = document.createElement("button");
     fill_btn.innerText = brand[i];

      // <!-- 3. SETTING THE FILTER BUTTON’S ID AS THE BRAND ARRAY INDEX SO IT CAN BE USED LATER -->
     fill_btn.id = i;
     fill_btn.classList.add("fillbutton");
     var spn = document.createElement("span");
     spn.classList.add("text");
     fill_btn.appendChild(spn);
     header.appendChild(fill_btn);

      // <!-- 4. CREATING AN EVENT LISTENER FOR THE FILTER BUTTON SO THE USER CAN SELECT A BRAND -->
     fill_btn.addEventListener("click", function () {
        // <!-- 5. GETTING THE BRAND NAME USING THE FILTER BUTTON’S PREVIOUSLY SET ID TO IDENTIFY THE USER-SELECTED BRAND -->
       var selectedBrand = brand[this.id];
        // <!-- 6. CALLING THE RENDER PRODUCTS FUNCTION INSIDE THE WITHDELAY FUNCTION SO IT CAN DISPLAY THE LOADER -->
       withDelay(() => {
          // <!-- 7. SETTING THE USER INPUT VARIABLE TO THE PREVIOUSLY STORED USER-SELECTED VALUE -->
         user_input = selectedBrand;
          // <!-- 8. CALLING THE RENDER FUNCTION INSIDE THE FILTER BUTTON EVENT LISTENER TO DISPLAY PRODUCTS BASED ON USER SELECTION -->
         renderproduc(user_input);
       });
     });
   }
 });

  // let user_input = prompt("Enter Which brand mobile you want?");
  // console.log(user_input);

  // <!-- CREATION OF FUNCTION FOR P TAG TO CREATE LINES IN THE CARD-->
 function line(card, h, b) {
   let bd = document.createElement("p");
   bd.innerText = h + " : " + b;
   card.appendChild(bd);
 }

  // <!-- 1. CREATING A CART TO ADD ALL PRODUCTS IN ONE DIV -->
 var cart = document.createElement("div");
  // <!-- 2. ADDING THE CART TO THE BODY TO REDER THE PRODUCTS-->
 cart.id = "cart";
 b.appendChild(cart);
 var fil;

  // <!-- 3. CREATING THE CARDS TO ADD THE CART-->
  // <!-- THE CARDS ARE PRODUCRS DISPLAYER-->
 var card = document.createElement("div");

  // <!-- CREATION REDNDER-PRDOUCTS FUNCTIONS TO RENDER THE PRODUCTS -->
 function renderproduc(u) {
    // <!-- 4.CLEAR EXISTING PRODUCTS BEFORE RENDERING NEW ONES -->
   cart.innerHTML = "";
   user_input = u;

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
       card.id="card"
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
          btn.disabled = true;
       } else {
         btn.classList.remove("atc-btn");
         btn.innerText = "Add to cart";
          btn.disabled = false;
       }
       btn.addEventListener("click", function () {
         fil_calculator(this.id);
       });

       card.appendChild(btn);
      
       cart.appendChild(card);
     }
   }
 }

  // <!-- THIS FUNCTION HANDLES THE ADD-TO-CART LOGIC BY CHECKING PRODUCT STOCK, DECREASING THE QTY, AND SHOWING A SUCCESS OR OUT-OF-STOCK MESSAGE WITH A LOADER EFFECT -->
 function calculator(index) {
   return new Promise((resolve,reject) => {
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
        
          // <!-- THIS showPopup FUNCTION DISPLAYS A POP-UP MESSAGE WHEN AN ITEM IS ADDED TO THE CART-->
         showPopup("Item added to cart");
         popup.style.background = "#00fe04ff";
        
          // <!-- THIS ELSE PART WORKS WHEN THE PRODUCT QTY IS LESS THAN OR EQUAL TO 0, AND IT DISPLAYS AN OUT-OF-STOCK MESSAGE-->
       } else {
        
          // <!-- HERE, THE renderProducts FUNCTION IS CALLED TO CHANGE THE ADD TO CART BUTTON TO AN OUT-OF-STOCK BUTTON AND UPDATE ITS COLOR TO RED -->
         renderproduc(user_input)
         showPopup("Item is not available. We are re-stocking.");
         console.error(
           `the ${products[index].model} is now out of stock re-stock it now `
         );
       }
     });
   });
 }
  // <!-- THIS FUNCTION WORKS THE SAME AS THE PREVIOUS CALCULATOR FUNCTION, BUT IT OPERATES ON USER-SELECTED PRODUCTS -->
 function fil_calculator(index) {
   return new Promise((resolve,reject) => {
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
         console.log("Remaining stock:", fil[index].qty);
         showPopup("Item added to cart");
         popup.style.background = "#00fe04ff";
       } else {
         renderproduc(user_input)
         showPopup("Item is not available currently. We are re-stocking.");
         console.error(
           `the ${fil[index].model} is now out of stock re-stock it now `
         );
       }
     });
   });
 }

  // <!-- THIS IS WHERE THE POP-UP IS CREATED BY CREATING A DIV AND APPENDING IT TO THE BODY-->
 var popup = document.createElement("div");
 popup.id = "popup";
 b.appendChild(popup)

  // <!-- THIS IS WHERE THE showPopup FUNCTION IS CREATED-->
 function showPopup(msg) {
   popup.innerText = msg;
   popup.style.display = "block";

    // <!-- THIS setTimeout FUNCTION REMOVES THE POP-UP AFTER THE DESIRED TIME; IN THIS CASE, IT IS SET TO 1.5 SECONDS-->
   setTimeout(function () {
     popup.style.display = "none";
     popup.style.background = "rgb(255, 0, 0)";
   }, 1000);
 }
  // <!-- THIS IS WHERE THE PRODUCTS ARE RENDERED BEFORE THE USER SELECTS A DESIRED BRAND BY CLICKING THE FILTER BUTTONS -->

 withDelay(() => {
   renderproduc(user_input);
 });






//  var temp = products.map((p) => p.model);
//  var brand = [];
//   for (i = 0; i < temp.length; i++) {
//    if (!brand.includes(temp[i])) {
//      brand.push(temp[i]);
//    }
//  }
//  console.log(products);
//  console.log(brand)

//  document.writeln("<ol>")
//  for(i=0;i<brand.length;i++){
//     var img=document.createElement("img")
//     img.id="images"
//   img.src=`./img/${brand[i]}.jpg`
//    document.body.appendChild(img)
//    document.writeln("<li>",brand[i],"<br>")
//   }



// var cart_box=document.createElement("button")
// cart_box.classList.add("cart_box")
// var c_img=document.createElement("img")
// c_img.src="./icons/cart-shopping-solid-full.svg"
// c_img.classList.add("c_img")
// cart_box.appendChild(c_img)
// b.appendChild(cart_box)



