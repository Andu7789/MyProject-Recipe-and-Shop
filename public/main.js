



//Dropdown section for recipes
let dropdownCuisineID = document.getElementById("dropdownCuisine");
let dropdownMealTypeID = document.getElementById("dropdownMealType");
let dropdownDishTypeID = document.getElementById("dropdownDishType");

//Recipe Container - Main
let recipeMainContainerID = document.getElementById("recipeMainContainer");
//Search and reset container
let seacrhBarID = document.getElementById("seacrhBar");
let resetButtonID = document.getElementById("resetButton");
let searchButtonID = document.getElementById("searchButton");
//recipe card container
let cardsContainerID = document.getElementById("cardsContainer");

//NavBar
let recipesMenuID = document.getElementById("recipesMenu");
let shopID = document.getElementById("shop");
let videosMenuID = document.getElementById("videosMenu");
let newsLetterID = document.getElementById("newsLetter");
let MemoryDestructID = document.getElementById("MemoryDestruct");
let accountButtontID = document.getElementById("accountButton");
let tempButtonID = document.getElementById("tempButton");

//Vidoes container - Main
let videoscontainerID = document.getElementById("videoscontainer");

//Video elements
let btnboilID = document.getElementById("btnboil");
let btnpoachID = document.getElementById("btnpoach");
let video1ID = document.getElementById("video1");
let video2ID = document.getElementById("video2");
let btnbac1ID = document.getElementById("btnbac1");
let btnbac2ID = document.getElementById("btnbac2");

//email confirmation popup
let alertboxID = document.getElementById("alertbox");
let messageCloseButtonD = document.getElementById("messageCloseButton");

//Shooping container - Main
let shoppingcontainerID = document.getElementById("shoppingcontainer");

//Shopping cards container - Main
let cardsContainerShopID = document.getElementById("cardsContainerShop");

//Shopping cart container
let cartContainerID = document.getElementById("cartContainer");
let shoppingCartHeadingID = document.getElementById("shoppingCartHeading");

//Checkout container - Main
let checkoutContainerID = document.getElementById("checkoutContainer");

//Checkout left and right containers
let checkoutContainerTopID = document.getElementById("checkoutContainerTop");
let checkoutContainerLeftID = document.getElementById("checkoutContainer-left");
let checkoutContainerrightID = document.getElementById(
  "checkoutContainer-right"
);
let checkoutContainerBottomID = document.getElementById(
  "checkoutContainerBottom"
);

let checkoutContainerBottom2ID = document.getElementById(
  "checkoutContainerBottom2"
);

//Account container - Main
let accountContainerID = document.getElementById("accountContainer");

//Account container - information (wording)
let accountContainer2ID = document.getElementById("accountContainer2");
let accountContainer3ID = document.getElementById("accountContainer3");

//Account Elements (buttons)
let yourAddressessButtonID = document.getElementById("yourAddressessButton");
let discountCodesButtonID = document.getElementById("discountCodesButton");
let previousOrdersButtonID = document.getElementById("previousOrdersButton");

//Add new address container
let addAddressFormConatinerID = document.getElementById(
  "addAddressFormContainer"
);
//Add new address button - used in the form where you populate the new address you are going to add
let addAddressButtonID = document.getElementById("addAddressButton");

//Add new address Elements
let line_1ID = document.getElementById("line_1");
let line_2ID = document.getElementById("line_2");
let post_townID = document.getElementById("post_town");
let postcodeID = document.getElementById("postcode");
let phonenumberID = document.getElementById("phonenumber");

//ProdcutView container
let productViewImgID = document.getElementById("productViewImg");
let productViewTitleID = document.getElementById("productViewTitle");
let productViewPriceID = document.getElementById("productViewPrice");
let productViewQtyID = document.getElementById("productViewQty");
let productViewAddButtonID = document.getElementById("productViewAddButton");
let productViewDescriptionID = document.getElementById(
  "productViewDescription"
);
let carouselImg1ID = document.getElementById("carouselImg1");
let carouselDesc1ID = document.getElementById("carouselDesc1");
let carouselImg2ID = document.getElementById("carouselImg2");
let carouselImg3ID = document.getElementById("carouselImg3");
let carouselDesc3ID = document.getElementById("carouselDesc3");
let carousel1captionID = document.getElementById("carousel1-caption");
let carousel2captionID = document.getElementById("carousel2-caption");
let carousel3captionID = document.getElementById("carousel3-caption");
let productViewInsufficientStockID = document.getElementById(
  "productViewInsufficientStock"
);
let productViewNumberInCartID = document.getElementById(
  "productViewNumberInCart"
);

//Search and reset container (shopping)
let seacrhBarShoppingID = document.getElementById("seacrhBarShopping");
let resetButtonShoppingID = document.getElementById("resetButtonShopping");
let searchButtonShoppingID = document.getElementById("searchButtonShopping");
let dropdownFilterTypeID = document.getElementById("dropdownFilterType");
let fruitButtonID = document.getElementById("fruitButton");
let dropdownCuisine2ID = document.getElementById("dropdownCuisine2");
let dropdownMealType2ID = document.getElementById("dropdownMealType2");
let dropdownDishType2ID = document.getElementById("dropdownDishType2");
let searchButton2ID = document.getElementById("searchButton2");
let closeButtonID = document.getElementById("closeButton");
let closeButton1ID = document.getElementById("closeButton1");
let carouselExampleCaptionsID = document.getElementById(
  "carouselExampleCaptions"
);

//Choose new delivery address container - in checkout
let chooseNewAddressContainerID = document.getElementById(
  "chooseNewAddressContainer"
);
//let backToShoppingButton1ID = document.getElementById("backToShoppingButton1");

let productViewContainerID = document.getElementById("productViewContainer");

//delivery slot container
let chooseDeliverySlotContainerID = document.getElementById(
  "chooseDeliverySlotContainer"
);
let chooseDeliverySlotContainerTopID = document.getElementById(
  "chooseDeliverySlotContainerTop"
);
let chooseDeliverySlotContainerBottomID = document.getElementById(
  "chooseDeliverySlotContainerBottom"
);
let OneID = document.getElementById("one");
let TwoID = document.getElementById("two");
let ThreeID = document.getElementById("three");


let apikey = "40441ec58e3ea7ae607a45ed2385fcdb";
let appid = "166089c0";


// code for Google log on
const publishableKey = "pk_test_Y2FwYWJsZS1raXRlLTgyLmNsZXJrLmFjY291bnRzLmRldiQ"; // <- Add Publishable Key here

const startClerk = async () => {
  const Clerk = window.Clerk;

  try {
    // Load Clerk environment and session if available
    await Clerk.load();

    const userButton = document.getElementById("user-button");
    const authLinks = document.getElementById("auth-links");

    Clerk.addListener(({ user }) => {
      // Display links conditionally based on user state
      authLinks.style.display = user ? "none" : "block";
    });

    if (Clerk.user) {
      // Mount user button component
      Clerk.mountUserButton(userButton);
      userButton.style.marginRight = "25px";
    }
  } catch (err) {
    console.error("Error starting Clerk: ", err);
  }
};
let temp1ID = document.getElementById("temp1");
(() => {
  const script = document.createElement("script");
  script.setAttribute("data-clerk-publishable-key", publishableKey);
  script.async = true;
  script.src = `https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;
  script.crossOrigin = "anonymous";
  script.addEventListener("load", startClerk);
  script.addEventListener("error", () => {
    document.getElementById("no-frontend-api-warning").hidden = false;
  });
  temp1ID.appendChild(script);
})();

class cart {
  constructor() {
    this.cartItems = [];
    this.totalItemsInCart = 0;
    this.totalPrice = 0;
    this.cartTotalPrice = 0;
  }
}

class order {
  constructor() {
    this.customerOrder = [];
    this.orderNumber = 1;
  }
}

let cartClass = new cart();
let orderClass = new order();

let addressStreetNameArray = [];
let selectedAddressIndex = "";
let counter2 = 0;
const ordersArray = [];
let jsonProdcutInfo;
let numOfItemsMaster;
let inCartElement;
let storeForProductID;
let deliveryDay;
let deliverySlotTime;
let deliveryPrice = 0;
let deliveryDate;
let tableCount = 0;
let finalPriceofOrder = 0;
let deliverySlotInformation = "";
let savedAddress = [];
let finalCheckOutButton;
let counter3 = 0;
let counterBuildAddress = 1;
let discountPercantageValue = 0;
let selectedSlotId = null;
let dicountAmount = 0;
let counterDiscountCode = 1;
let searchType = "";
let titleForProductSearch = "";

let cartIcon = document.getElementById("cartIcon");
let cartItemCount = document.getElementById("cartItemCount");

requestURL = `https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=166089c0&app_key=${apikey}`;

dropdownCuisineID.innerHTML = "Cusine Type";
dropdownMealTypeID.innerHTML = "Meal Type";
dropdownDishTypeID.innerHTML = "Dish Type";

dropdownCuisine2ID.innerHTML = "Cusine Type";
dropdownMealType2ID.innerHTML = "Meal Type";
dropdownDishType2ID.innerHTML = "Dish Type";

//populate the button text with the chosen dropdown in the recipe section
const selectItem = (event, value, buttonID) => {
  event.preventDefault();
  let button = document.getElementById(buttonID);
  button.innerHTML = value;

  if (value === "Price - High to Low" || value === "Price - Low to High") {
    value === "Price - Low to High" ? (filterChoice = 1) : (filterChoice = -1); //used for the value in the DB search on the server

    //API calls to return the product cards depending on what cards are currently shown
    if (!searchType && !titleForProductSearch) {

      filterShoppingCardsAllAPI(filterChoice); //used if all cards are currently shown
    } else if (!titleForProductSearch) {

      filterShoppingCardsAPI(filterChoice); //used if the cards shown are a type, like fruit
    } else {

      filterShoppingCardsSearchAPI(filterChoice);  //used if the cards shown are the result of a search
    }
  }
};

// Screen settings for Recipe Page
recipesMenuID.addEventListener("click", function () {
  recipesMenuID.classList.add("active");
  videosMenuID.classList.remove("active");
  shopID.classList.remove("active");
  recipeMainContainerID.classList.remove("hidden");
  videoscontainerID.classList.add("hidden");
  video1ID.classList.add("hidden");
  video2ID.classList.add("hidden");
  shoppingcontainerID.classList.add("hidden");
  checkoutContainerID.classList.add("hidden");
  accountContainerID.classList.add("hidden");
  productViewContainerID.classList.add("hidden");
  cartContainerID.classList.remove("hidden");
});

// Screen settings for Video Page
videosMenuID.addEventListener("click", function () {
  recipesMenuID.classList.remove("active");
  videosMenuID.classList.add("active");
  shopID.classList.remove("active");
  recipeMainContainerID.classList.add("hidden");
  videoscontainerID.classList.remove("hidden");
  video1ID.classList.add("hidden");
  video2ID.classList.add("hidden");
  shoppingcontainerID.classList.add("hidden");
  accountContainerID.classList.add("hidden");
  productViewContainerID.classList.add("hidden");
  cartContainerID.classList.add("hidden");
  checkoutContainerID.classList.add("hidden");
});

btnboilID.addEventListener("click", function () {
  video1ID.classList.remove("hidden");
  videoscontainerID.classList.add("hidden");
});

btnpoachID.addEventListener("click", function () {
  video2ID.classList.remove("hidden");
  videoscontainerID.classList.add("hidden");
});

btnbac1ID.addEventListener("click", function () {
  videoscontainerID.classList.remove("hidden");
  video1ID.classList.add("hidden");
  video2ID.classList.add("hidden");
});

btnbac2ID.addEventListener("click", function () {
  videoscontainerID.classList.remove("hidden");
  video2ID.classList.add("hidden");
});

// Settings for the when the Reset button is clicked on the recipe page - sets the dropdpown values to the headings names 
resetButtonID.addEventListener("click", function () {
  dropdownCuisineID.innerHTML = "Cusine Type";
  dropdownMealTypeID.innerHTML = "Meal Type";
  dropdownDishTypeID.innerHTML = "Dish Type";
  seacrhBarID.value = "";
});

resetButtonShoppingID.addEventListener("click", function () {
  seacrhBarShoppingID.value = "";
});

//Close button on the Product View Page - there are 2
closeButton1ID.addEventListener("click", function () {
  closeButtonViewSettings();
});

//Close button on the Product View Page - there are 2
closeButtonID.addEventListener("click", function () {
  closeButtonViewSettings();
});


const closeButtonViewSettings = () => {
  displayShopSettings();

   //API calls to return the product cards depending on what cards are currently shown
  if (!searchType && !titleForProductSearch) {
    generateShoppingUIFirstBuild(); //used if all cards were showing prior to entering this page
  } else if (!titleForProductSearch) {
    generateShoppingUI(searchType);  //used if the cards shown are the result of a search prior to entering this page
  } else {
    searchShopItems; //used if the cards shown are a type, like fruit, prior to entering this page
  }

  productViewContainerID.classList.add("hidden");
  closeButton1ID.classList.remove("hidden");
};

// Settings for displaying the shop page
shopID.addEventListener("click", function () {
  displayShopSettings();
  generateShoppingUIFirstBuild();
});

// Setting for displaying the checkout page
const createCheckoutDisplaySettings = () => {
  checkoutContainerID.classList.remove("hidden");
  cartContainerID.classList.add("hidden");
  shoppingcontainerID.classList.add("hidden");
  productViewContainerID.classList.add("hidden");
  recipeMainContainerID.classList.add("hidden");
  accountContainer.classList.add("hidden");
  shopID.classList.remove("active");
  recipesMenuID.classList.remove("active");
};

// Setting for displaying the Product View page
const createProductViewDisplaySettings = () => {
  if (productViewContainerID.classList.contains("hidden")) {
    productViewContainerID.classList.remove("hidden");
  }
  shoppingcontainerID.classList.add("hidden");
  shopID.classList.remove("active");
  dropdownCuisine2ID.innerHTML = "Cusine Type";
  dropdownMealType2ID.innerHTML = "Meal Type";
  carouselExampleCaptionsID.classList.add("hidden");
  closeButtonID.classList.add("hidden");
  closeButton1ID.classList.remove("hidden");
};

// Settings for displaying the shop page
const displayShopSettings = () => {
  shopID.classList.add("active");
  recipesMenuID.classList.remove("active");
  videosMenuID.classList.remove("active");
  shoppingcontainerID.classList.remove("hidden");
  cardsContainerShopID.classList.remove("hidden");
  checkoutContainerID.classList.add("hidden");
  recipeMainContainerID.classList.add("hidden");
  videoscontainerID.classList.add("hidden");
  video1ID.classList.add("hidden");
  video2ID.classList.add("hidden");
  accountContainerID.classList.add("hidden");
  productViewContainerID.classList.add("hidden");
  cartContainerID.classList.remove("hidden");
};

// Settings for displaying the Account Popup
accountButtontID.addEventListener("click", function () {
  videoscontainerID.classList.add("hidden");
  shoppingcontainerID.classList.add("hidden");
  recipeMainContainerID.classList.add("hidden");
  accountContainer.classList.remove("hidden");
  accountContainer2ID.classList.add("hidden");
  accountContainer3ID.classList.add("hidden");
  productViewContainerID.classList.add("hidden");
  cartContainerID.classList.add("hidden");
  checkoutContainer.classList.add("hidden");
  shopID.classList.remove("active");
  recipesMenuID.classList.remove("active");
  videosMenuID.classList.remove("active");
});

//function to create default values for the recipe search if a user doesn't select anything
function check() {
  cusineValue = dropdownCuisineID.innerHTML;
  if (cusineValue === "Cusine Type") {
    cusineValue = "British";
  }
  mealTypeValue = dropdownMealTypeID.innerHTML;
  if (mealTypeValue === "Meal Type") {
    mealTypeValue = "Dinner";
  }
  dishTypeValue = dropdownDishTypeID.innerHTML;
  if (dishTypeValue === "Dish Type") {
    dishTypeValue = "Main Course";
  }
  searchBarValue = seacrhBarID.value;
  if (searchBarValue === "") {
    searchBarValue = "Beef";
  }
  cusineValue2 = dropdownCuisine2ID.innerHTML;
  if (cusineValue2 === "Cusine Type") {
    cusineValue2 = "British";
  }
  mealTypeValue2 = dropdownMealType2ID.innerHTML;
  if (mealTypeValue2 === "Meal Type") {
    mealTypeValue2 = "Dinner";
  }
  dishTypeValue2 = dropdownDishType2ID.innerHTML;
  if (dishTypeValue2 === "Dish Type") {
    dishTypeValue2 = "Main Course";
  }
  dropdownFilterTypeValue = dropdownFilterTypeID.innerHTML;
}
//used for when a user hits 'enter key' whilst the cursor is in the recipe search bar
seacrhBarID.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    check(); //check to see if a user has selected any of the dropdowns, if not, use the defualt choices
    getRecipes();
  }
});

//used for when a user hits 'enter key' whilst the cursor is in the shop search bar
seacrhBarShoppingID.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchShopItems();
  }
});

const fetchRecipesProductView = () => {
  check();
  getRecipes2();
};

searchButtonID.addEventListener("click", function () {
  check();
  getRecipes();
  //generateShoppingUI();
});
window.onload = () => {
  requestURL = `https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=166089c0&app_key=${apikey}`;
  getRecipes();
};

const getRecipes = async () => {
  cardsContainerID.innerHTML = "";
  check(); //return the values to be used in the API call
  let requestURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchBarValue}&app_id=${appid}&app_key=${apikey}&cuisineType=${cusineValue}&meal_Type=${mealTypeValue}&dishType=${dishTypeValue}`;
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Please try again - data not available");
    return false;
  }
  let data = await response.json();
  generateUI(data.hits); //call the fucntion with the API data
};

const getRecipes2 = async () => {
  closeButtonID.classList.remove("hidden");
  closeButton1ID.classList.add("hidden");

  carouselExampleCaptionsID.classList.remove("hidden");

  let productType = jsonProdcutInfo[0].title;
  let requestURL2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${productType}&app_id=${appid}&app_key=${apikey}&cuisineType=${cusineValue2}&meal_Type=${mealTypeValue2}`;
  let response2 = await fetch(requestURL2);
  if (!response2.ok) {
    alert("Please try again - data not available");
    return false;
  }
  let data2 = await response2.json();
  carouselImg1.src = data2.hits[0].recipe.image;
  carouselImg2.src = data2.hits[1].recipe.image;
  carouselImg3.src = data2.hits[2].recipe.image;
  carouselImg1.classList.add("imghover");
  carouselImg2.classList.add("imghover");
  carouselImg3.classList.add("imghover");

  carousel1captionID.innerHTML = data2.hits[0].recipe.label;
  carousel2captionID.innerHTML = data2.hits[1].recipe.label;
  carousel3captionID.innerHTML = data2.hits[2].recipe.label;

  carouselImg1.onclick = function () {
    window.open(data2.hits[0].recipe.url, "_blank");
  };
  carouselImg2.onclick = function () {
    window.open(data2.hits[1].recipe.url, "_blank");
  };
  carouselImg3.onclick = function () {
    window.open(data2.hits[2].recipe.url, "_blank");
  };
};

const generateUI = (articles) => {
  articles.forEach((item) => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="card mt-5 ms-4 text-center customBorderThinner" style="width: 13rem;">
      <a href="${item.recipe.url}" target="_blank">
        <img src="${item.recipe.image}" class="card-img-top" alt="${item.recipe.label}">
      </a>
      <h5 class="card-title">
        <a href="${item.recipe.url}" class="card-link" target="_blank">${item.recipe.label}</a>
      </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-capitalize">${item.recipe.mealType}</li>
        <li class="list-group-item text-capitalize">${item.recipe.dishType}</li>
        <li class="list-group-item text-capitalize">${item.recipe.cuisineType}</li>
        <li class="list-group-item"> Serves ${item.recipe.yield}</li>
      
      </ul>
    </div>`;
    cardsContainerID.appendChild(card);
  })
};

/*
/*<i class="fa-regular fa-heart fa-lg my-3 carthover" style="color: #155263;" id="heart" onclick="toggleHeartStyle(this, '${item.recipe.url}', '${item.recipe.label}', '${item.recipe.image}')"></i>

function toggleHeartStyle(heartIcon, url, label, image) {
  const computedStyle = getComputedStyle(heartIcon);
  const currentColor = computedStyle.color;

  // Toggle between the two styles
  if (currentColor === "rgb(21, 82, 99)") {
    const newHeartIcon = document.createElement("i");
    newHeartIcon.className = "fa-solid fa-heart fa-lg my-3 imghover";
    newHeartIcon.style.color = "#FFCC47";
    heartIcon.parentNode.replaceChild(newHeartIcon, heartIcon);
  } else {
    const newHeartIcon = document.createElement("i");
    newHeartIcon.className = "fa-regular fa-heart fa-lg my-3 imghover";
    newHeartIcon.style.color = "#155263";
    heartIcon.parentNode.replaceChild(newHeartIcon, heartIcon);
  }

}*/

//  To set the colour of the button (type) on the shopping page - shows it as a different colour so you can see which type is being shown
const setActive = (buttonId) => {
  // Remove 'active' class from all buttons
  let buttons = document.querySelectorAll('.btnYellow');// for all buttons with this class
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  // Add 'active' class to the clicked button
  let clickedButton = document.getElementById(buttonId);
  clickedButton.classList.add('active');
}

//Build the shopping cards with the items type selected by the user
const generateShoppingUI = (type) => {
  if (localStorage.getItem("strObj") == null) {
    //check to see if this is the 1st time of using the site - so the LocalStorage is empty
    orderClass.orderNumber = 1;
  } else {
    const strObjFromStorageOrderNumber = localStorage.getItem("strObjOrderNum"); //get the orderNumber from LocalStorage
    const objFromStorageOrderNUmber = JSON.parse(strObjFromStorageOrderNumber);
    orderClass.orderNumber = objFromStorageOrderNUmber;
  }
  titleForProductSearch = "";
  dropdownFilterTypeID.innerHTML = "Filter";

 

  searchType = type;
  const requestData = {
    type: type,
  };
  console.log(type);

  fetch("/api/getItemsFromDB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setActive(type + 'Button');
      //let clickedButton = document.getElementById(type + 'Button');
    //clickedButton.classList.toggle('active');
      buildShopCards(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
};
generateShoppingUI(); //call the function and send it the API data


//Buiilds the shopping cards with all the items
const generateShoppingUIFirstBuild = () => {
  if (localStorage.getItem("strObj") == null) {
    //check to see if this is the 1st time of using the site - so the LocalStorage is empty
    orderClass.orderNumber = 1;
  } else {
    const strObjFromStorageOrderNumber = localStorage.getItem("strObjOrderNum"); //get the orderNumber from LocalStorage
    const objFromStorageOrderNUmber = JSON.parse(strObjFromStorageOrderNumber);
    orderClass.orderNumber = objFromStorageOrderNUmber;
  }
  dropdownFilterTypeID.innerHTML = "Filter";
  searchType = "";

  fetch("/api/getItemsFromDBFirstBuild")
    .then((response) => response.json())
    .then((data) => {
      buildShopCards(data);
      setActive('allButton');
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const generateProductView = async (event, productId, inputbox) => {

  carouselExampleCaptions;
  storeForProductID = productId;

  createProductViewDisplaySettings();
  const jsonProductInfo = await getProductInfoFrommDatabase(productId);
  const product = jsonProductInfo[0];
  const inputboxID = document.getElementById(inputbox);
  if (inputboxID === null) {
    numOfItems = 0;
    productViewQtyID.classList.add("hidden");
    productViewAddButtonID.classList.add("hidden");

    productViewPriceID.innerHTML = `£${product.price} - Out of Stock`;
    productViewPriceID.style.color = "red";
    productViewPriceID.style.fontWeight = "bold";
  } else {
    numOfItems = parseInt(inputboxID.value, 10);
    productViewQtyID.value = numOfItems;
    productViewQtyID.pattern = "\\d*"; // Allow only numeric input
    productViewQtyID.style.width = "100px";
    productViewQtyID.style.height = "40px";
    productViewQtyID.style.borderRadius = "10px";
    productViewQtyID.style.textAlign = "center";
    productViewPriceID.innerHTML = `£${product.price}`;
    productViewPriceID.style.color = "black";
    productViewPriceID.style.fontWeight = "normal";
    productViewQtyID.classList.remove("hidden");
    productViewAddButtonID.classList.remove("hidden");

    productViewInsufficientStockID.textContent = `Stock: ${product.stock}`;
    productViewInsufficientStockID.style.color = "black";
    productViewInsufficientStockID.style.fontWeight = "normal";
    productViewInsufficientStockID.style.fontSize = "16px";

    productViewNumberInCartID.style.textAlign = "center";
    productViewNumberInCartID.textContent = `In cart: ${product.orderQty}`;
    productViewNumberInCartID.style.fontSize = "16px";
    productViewNumberInCartID.style.backgroundColor = "white";

    if (product.orderQty > 0) {
      productViewNumberInCartID.style.fontWeight = "bold";
      productViewNumberInCartID.style.backgroundColor = "#e0ebeb";
    }

    productViewAddButtonID.onclick = (event) => {
      if (product.stock < parseInt(productViewQtyID.value, 10)) {
        productViewInsufficientStockID.textContent = `Not enough Stock`;
        productViewInsufficientStockID.style.color = "red";
        productViewInsufficientStockID.style.fontWeight = "bold"; // Make the text bold
      } else {
        productViewInsufficientStockID.textContent = `Stock: ${product.stock}`;
        productViewInsufficientStockID.style.color = "black";
        productViewInsufficientStockID.style.fontWeight = "normal";
        AddToCart(
          event,
          "productViewQty",
          product.price,
          product.title,
          product.ID,
          product.image
        );
      }
    };
  }

  productViewTitleID.innerHTML = product.title;
  productViewImgID.src = `data:image/png;base64,${product.image}`;

  productViewDescriptionID.innerHTML = product.Description;
  productViewQtyID.value = numOfItems;

};

async function getProductInfoFrommDatabase(productId) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID: productId }),
  };

  const response = await fetch("/apigetProductInfo", options);
  jsonProdcutInfo = await response.json();
  return jsonProdcutInfo;
}

const AddToCart = (event, inputbox, price, title, ID, image) => {
  //when a user clicks on the 'add' button for an item, the screen scrolls to the cart area
  event.preventDefault();
  document.getElementById("cartContainer").focus();
  document.getElementById("cartContainer").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  const inputboxID = document.getElementById(inputbox); //get the ID of the input box in line with the 'add' button they pressed
  let numOfItems = parseInt(inputboxID.value, 10);
  inCartElement.textContent = `In cart: ${numOfItems}`;
  productViewNumberInCartID.textContent = `In cart: ${numOfItems}`;

  //change the background of the "in Cart" depending on the value
  if (numOfItems > 0) {
    productViewNumberInCartID.style.backgroundColor = "#e0ebeb";
  } else {
    productViewNumberInCartID.style.backgroundColor = "white";
  }

  let itemTotalPrice = numOfItems * price;

  const existingProductIndex = cartClass.cartItems.findIndex(
    (item) => item.title === title
  ); //check to see if the item is already in the shopping cart

  if (existingProductIndex !== -1) {
    //if the item IS in the cart already then update the cart num of items and the total price

    cartClass.cartItems[existingProductIndex].quantity = numOfItems;
    cartClass.cartItems[existingProductIndex].totalPrice = itemTotalPrice;
  } else {
    //if it IS NOT already in the cart, add it

    const product = {
      title: title,
      price: price,
      quantity: numOfItems,
      totalPrice: itemTotalPrice,
      orderNumber: orderClass.orderNumber,
      image: image,
    };

    cartClass.cartItems.push(product);
  }

  cartClass.totalPrice += itemTotalPrice;
  UpdateCurrentOrderQTYAPI(numOfItems, ID);
  //When a user has items in the cart and then reduces the number to zero 0 remove that item from the cart
  if (numOfItems === 0) {
    const indexToRemove = cartClass.cartItems.findIndex(
      (item) => item.title === title
    );

    if (indexToRemove !== -1) {
      // Remove the item at the found index
      cartClass.cartItems.splice(indexToRemove, 1);
    } else {
    }
  }
  updateCartUI();
  //update the cart icon value
  cartClass.totalItemsInCart = 0
  cartClass.cartItems.forEach((qty) => {
    cartClass.totalItemsInCart = cartClass.totalItemsInCart + qty.quantity;
  });
  cartItemCount.textContent = cartClass.totalItemsInCart;

  //check to see which version of the shopping cards to show.  If user has clicked the shop tab then searchtype will be blank so show all items
  if (!searchType && !titleForProductSearch) {
    generateShoppingUIFirstBuild();
  } else if (!titleForProductSearch) {
    //if user has NOT used the search bar then display the items corresponding to the item type
    generateShoppingUI(searchType);
  } else {
    searchShopItems; //display items requested via the search bar
  }
};

const buildShopCards = (data) => {
  cardsContainerShopID.innerHTML = "";
  data.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.style.border = "1px solid #155263"
    productDiv.style.borderRadius = "10px";
    productDiv.style.padding = "10px"; // Add padding for better spacing
    productDiv.style.margin = "0 10px 10px 0";
    productDiv.style.textAlign = "center";
    productDiv.style.width = "220px";
    productDiv.classList = " mt-4"

    const imageElement = document.createElement("img");
    imageElement.src = `data:image/png;base64,${product.image}`;
    imageElement.alt = product.title;
    imageElement.style.borderRadius = "10px";
    imageElement.style.width = "150px";
    imageElement.style.height = "150px";
    imageElement.style.marginBottom = "10px";
    imageElement.classList.add("imghover");
    if (product.stock === 0) {
      imageElement.onclick = (event) => {
        generateProductView(event, product.ID, 0);
      };
    } else {
      imageElement.onclick = (event) => {
        generateProductView(event, product.ID, `inputbox${product.ID}`);
      };
    }
    productDiv.appendChild(imageElement);

    const titleElement = document.createElement("h4");
    titleElement.textContent = product.title;
    titleElement.classList.add("imghover");
    titleElement.onclick = (event) => {
      generateProductView(event, product.ID, `inputbox${product.ID}`);
    };
    productDiv.appendChild(titleElement);

    const priceElement = document.createElement("p");
    priceElement.style.textAlign = "center";
    priceElement.textContent = `Price: £${product.price}`;
    productDiv.appendChild(priceElement);

    const stockElement = document.createElement("p");
    productDiv.appendChild(stockElement);

    inCartElement = document.createElement("p");
    productDiv.appendChild(inCartElement);

    productDiv.style.background = "white";
    stockElement.style.textAlign = "center";

    if (product.stock === 0) {
      stockElement.textContent = `Out of Stock`;
      stockElement.style.color = "Red";
      stockElement.style.fontWeight = "bold"; // Make the text bold
      stockElement.style.fontSize = "26px";
      productDiv.style.background = "white";
    } else {
      stockElement.textContent = `Stock: ${product.stock}`;
      inCartElement.style.textAlign = "center";
      if (product.orderQty > 0) {
        inCartElement.style.fontWeight = "bold";
        inCartElement.style.backgroundColor = "#e0ebeb";
      }
      inCartElement.textContent = `In cart: ${product.orderQty}`;
      // Adding input box for each item
      const inputElement = document.createElement("input");
      inputElement.type = "number";
      inputElement.classList.add("m-2");
      inputElement.id = `inputbox${product.ID}`;
      inputElement.min = 0; // Set the minimum value to 1
      inputElement.max = 30;
      inputElement.placeholder = "1";
      inputElement.value = 1; // Set the minimum value to 1
      if (product.orderQty > 1) {
        inputElement.value = product.orderQty;
      }
      inputElement.pattern = "\\d*"; // Allow only numeric input
      inputElement.style.width = "100px";
      inputElement.style.height = "40px";
      inputElement.style.borderRadius = "10px";
      inputElement.style.textAlign = "center";
      productDiv.appendChild(inputElement);

      // Adding button for each item
      const addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.style.height = "40px";
      addButton.classList.add("btn", "btnYellow", "rounded");
      addButton.onclick = (event) => {
        if (product.stock < parseInt(inputElement.value, 10)) {
          stockElement.textContent = `Not enough Stock`;
          stockElement.style.color = "red";
          stockElement.style.fontWeight = "bold"; // Make the text bold
        } else {
          stockElement.textContent = `Stock: ${product.stock}`;
          stockElement.style.color = "black";
          stockElement.style.fontWeight = "normal";
          AddToCart(
            event,
            `inputbox${product.ID}`,
            product.price,
            product.title,
            product.ID,
            product.image
          );
        }
      };
      productDiv.appendChild(addButton);
    }

    cardsContainerShopID.appendChild(productDiv);
  });
  if (data.length === 0) {
    const productDiv = document.createElement("div");
    productDiv.style.border = "1px solid #ccc";
    productDiv.style.borderRadius = "10px";
    productDiv.style.padding = "10px"; // Add padding for better spacing
    productDiv.style.margin = "0 10px 10px 0";
    productDiv.style.textAlign = "center";
    productDiv.style.width = "500px";
    productDiv.textContent = "No items match your search";
    productDiv.style.fontWeight = "bold";
    productDiv.style.color = "red";
    cardsContainerShopID.appendChild(productDiv);
  }
};
const searchShopItems = () => {
  titleForProductSearch = seacrhBarShoppingID.value;
  const requestBody = { title: titleForProductSearch };

  //set all type buttons to 'not selected colour'
  let buttons = document.querySelectorAll('.btnYellow');// for all buttons with this class
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  fetch("/api/POSTFindSearchItems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      buildShopCards(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const updateCartUI = () => {
  cartContainerID.innerHTML = "";
  cartClass.cartTotalPrice = 0;
  const heading = document.createElement("div");
  heading.innerHTML = `<div style="font-size: 24px; margin-bottom: 15px;">
                          <h2 class="mt-2 text-center"><b>Shopping Cart</b></h2>
                       </div>`;
  cartContainerID.appendChild(heading);
  //create the line of details for the item being added to the cart
  cartClass.cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.innerHTML = `
                                <div class="cart-item">
                                <span>${item.title}</span>
                                <span>Qty: ${item.quantity}</span>
                                <span><b>Total Price: £${item.totalPrice.toFixed(2)}</b></span>
                                <b class="deletex" onclick="removeFromCart(${index}, '${item.title}')">X</b>
                                </div>`;
    cartContainerID.appendChild(cartItemElement);
    cartClass.cartTotalPrice += item.totalPrice;

  });

  //Add the 'checkout' button
  const totalElement = document.createElement("div");
  totalElement.innerHTML = `<div <h4 class="mt-2"><b>Sub Total: £${cartClass.cartTotalPrice.toFixed(2)}</b></h4>
                            </div>
                            <div <button class="btn my-3 btn-default btn-sm btnYellow rounded " onclick=createCheckout()  id="btnCheckout">Checkout</button>
                            </div>`;
                            
  cartContainerID.appendChild(totalElement);
};

//detele the item fron the cart ARRAY when a user has clicked on 'x'
const removeFromCart = (index, title) => {
  const removedQuantity = cartClass.cartItems[index].quantity;
  cartClass.cartItems.splice(index, 1);
  cartClass.cartTotalPrice = cartClass.cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  cartClass.totalItemsInCart -= removedQuantity;
  cartItemCount.textContent = cartClass.totalItemsInCart; //udpates the number shown on the shopping cart

  // Update stock control and UI
  setStockControlToZeroAPI(title);
  updateCartUI();

  if (!searchType && !titleForProductSearch) {
    generateShoppingUIFirstBuild();
  } else if (!titleForProductSearch) {
    generateShoppingUI(searchType);
  } else {
    searchShopItems;
  }

  if (!productViewContainerID.classList.contains("hidden")) {
    getTtitleAPI(title);
  }
};
//clear out all items in LocalStorage
/*MemoryDestructID.addEventListener("click", () => {
  localStorage.clear();
  orderClass.orderNumber = 1;
  if (localStorage.getItem("strObj") == null) {
    alert("local storage - strobj is clear");
  }
});*/
//Gets the current default address
const getDefaultAddress = () => {
  let addresses = JSON.parse(localStorage.getItem("addresses")) || []; //get the current ADDRESSES stored in localStorage or return and empty ARRAY
  let defaultAddress = addresses.find((address) => address.Default === "TRUE");
  return defaultAddress;
};

function createCheckout() {
  let totalItems = 0;
  checkoutContainerTopID.innerHTML = "";
  checkoutContainerLeftID.innerHTML = "";
  checkoutContainerrightID.innerHTML = "";
  cartClass.cartTotalPrice = 0;
  createCheckoutDisplaySettings();
  let itemsText = "";

  cartClass.cartItems.forEach((qty) => {
    totalItems += qty.quantity;
  });
  totalItems < 2 ? (itemsText = "item") : (itemsText = "items");

  const totalIteminCart = document.createElement("div");
  totalIteminCart.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-4">
                              <div>
                                <p class="mb-1"><b>${totalItems}</b> ${itemsText} in your shopping cart</p>
                              </div>`;
  checkoutContainerTopID.appendChild(totalIteminCart);

  cartClass.cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.innerHTML = `
<div class="card mb-3 ms-2 customBorderThinner">
  <div class="card-body">
    <div class="d-flex justify-content-between">
    <div class="cart-item">
        <img src="data:image/png;base64,${
          item.image
        }" alt="Product Image" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; margin-right: 10px;">
      </div>
      <div class="cart-item">
        <span>${item.title}</span>
      </div>
      <div>
        <span>Qty: ${item.quantity}</span>
      </div>
      <div class="text-right">
        <span><b>Total: £${item.totalPrice.toFixed(2)}</b></span>
      </div>
    </div>
  </div>
</div>`;

    checkoutContainerLeftID.appendChild(cartItemElement);
    addOrder(ordersArray, item); //add the item to the existing orders array
    cartClass.cartTotalPrice += item.totalPrice;
  });
  const cartItemElementTotal = document.createElement("div");
  cartItemElementTotal.innerHTML = `
<div class="card mb-3 ms-2 customBorderThinner">
<div class="card-body">
  <div class="d-flex justify-content-between">
    <div class="cart-item">
      <span></span>
    </div>
    <div>
      <span></span>
    </div>
    <div class="text-right">
      <span><b>Total Price: £${cartClass.cartTotalPrice.toFixed(2)}</b></span>
    </div>
  </div>
</div>
</div>`;

  checkoutContainerLeftID.appendChild(cartItemElementTotal);

  buildDefualtAddress(cartClass);
}
accountButtontID.addEventListener("click", function () {
  accountContainer.classList.remove("hidden");
  accountContainer2ID.classList.add("hidden");
});

const buildDefualtAddress = (cartClass) => {
  deliverySlotInformation =
    deliveryDay +
    " " +
    deliveryDate +
    " " +
    deliverySlotTime +chooseNewAddress
    " - £" +
    deliveryPrice.toFixed(2);
  finalPriceofOrder = cartClass.cartTotalPrice + deliveryPrice;

  //Decides if its the 1st time the checkout has been built then it uses the Default address.  If a user then chooses a new address AND goes away from  the screen and come back, it will then show the newly selected address and not redispaly the default address
  if (counterBuildAddress === 1) {
    OneID.innerHTML = "";
    let defaultAddress = getDefaultAddress(); //get the current DEFAULT address
    const deliveryAddressDefault = document.createElement("div");
    deliveryAddressDefault.innerHTML = `<div class="card text-dark rounded customBorderThinner ms-3">
                                      <div class="card-body ">
                                      <div class="d-flex justify-content-between align-items-center ">
                                          <b>Delivery Address</b>
                                          <button type="button" class="btn btnYellow btn-block btn-sm mt-3" onclick=chooseNewAddress() id="chooseNewAddress">change</button></div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${defaultAddress.line_1}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${defaultAddress.post_town}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${defaultAddress.postcode}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${defaultAddress.PhoneNo}</p>
                                          </div>
                                        </div>
                                        </div>`;
    OneID.appendChild(deliveryAddressDefault);
    checkoutContainerrightID.appendChild(OneID)
    savedAddress = [];
    savedAddress.push(
      defaultAddress.line_1,
      defaultAddress.post_town,
      defaultAddress.postcode,
      defaultAddress.PhoneNo
    );
    counterBuildAddress++;
    buildDeliverySlot();  
    buildDiscountCode();
    buildCheckoutButton();
 
  } else {
    OneID.innerHTML = "";
    const deliveryAddressDefault = document.createElement("div");
    deliveryAddressDefault.innerHTML = `<div class="card text-dark rounded customBorderThinner ms-3">
                                      <div class="card-body">
                                      <div class="d-flex justify-content-between align-items-center ">
                                          <b>Delivery Address</b>
                                          <button type="button" class="btn btnYellow btn-block btn-sm mt-3" onclick=chooseNewAddress() id="chooseNewAddress">change</button></div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${savedAddress[0]}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${savedAddress[1]}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${savedAddress[2]}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${savedAddress[3]}</p>
                                          </div>
                                        </div>
                                        </div>`;

    OneID.appendChild(deliveryAddressDefault);
    checkoutContainerrightID.appendChild(OneID)
    OneID.appendChild(TwoID)

    if (discountPercantageValue) {
      dicountAmount =
        //(cartClass.cartTotalPrice + deliveryPrice) *
        cartClass.cartTotalPrice * (discountPercantageValue / 100);
      finalPriceofOrder = finalPriceofOrder - dicountAmount;}
      finalCheckOutButton.innerHTML = `<div class="text-start">
                                    <button type="button" class="btn btnYellow btn-block btn-sm mt-3" onclick=createOrder() id="finalCheckOutButton">
                                      <div class="d-flex justify-content-between ">
                                      <div class="pe-3">£${finalPriceofOrder.toFixed(2)}</div>
                                      <div>Checkout <i class="fas fa-long-arrow-alt-right ps-3"></i></div>
                                      </div>
                                    </button>
                                  </div>`;
      discountCodeMessageID.innerHTML = `Great news, your code entitles you to ${discountPercantageValue}% off your order, saving you £${dicountAmount.toFixed(
        2
      )}`;
    }
  }


const buildDiscountCode = () => {
  const discountparts = document.createElement("div");
  discountparts.innerHTML = `
<div class="card text-dark rounded-3 ms-2 mt-2 customBorderThinner">
                                    <div class="card-body">
                                    <div class="mb-1"><b>Do you have a discount code?</b></div>
                                    <div class="d-flex justify-content-between align-items-center ">
                                    <input type="text" class="form-control customBorderThinner border-1 rounded me-2" style="width: 250px;" id="discountCodeInput" pattern="[a-zA-Z0-9]+" maxlength="15">
                                    <button class="btn btnYellow rounded btn-sm" type="button" id="discountCodeInputButton" onclick =CheckDiscountCode() >Apply</button>
                                    </div>
                                    <div class="my-1" id="discountCodeMessage"><b></b></div>   
                                    </div>`;
  TwoID.appendChild(discountparts);
  OneID.appendChild(TwoID)
};

const CheckDiscountCode = () => {
  discountCodeInputID = document.getElementById("discountCodeInput").value;
  checkDiscountCodeAPI(discountCodeInputID);
};

const calculateDiscount = (discountPercentage) => {
  discountCodeMessageID = document.getElementById("discountCodeMessage");
console.log({counterDiscountCode}, {discountPercentage});
  if (discountPercentage && counterDiscountCode === 1) {
    discountPercantageValue = discountPercentage;
    dicountAmount =
      //(cartClass.cartTotalPrice + deliveryPrice) *
      cartClass.cartTotalPrice *(discountPercantageValue / 100);
    finalPriceofOrder = finalPriceofOrder - dicountAmount;

    discountCodeMessageID.innerHTML = `Great news, your code entitles you to ${discountPercantageValue}% order, saving you £${dicountAmount.toFixed(
      2
    )}`;
    discountCodeMessageID.style.color = "green";
    discountCodeMessageID.style.fontWeight = "bold";
    counterDiscountCode++;
  } else {
    discountCodeMessageID.innerHTML = `Sorry but you can only use 1 code per shop`;
    discountCodeMessageID.style.color = "red";
    discountCodeMessageID.style.fontWeight = "bold";
  }
  if (!discountPercentage) {
    discountCodeMessageID.innerHTML = `Sorry, that code is not valid`;
    discountCodeMessageID.style.color = "red";
    discountCodeMessageID.style.fontWeight = "bold";
  }
  finalCheckOutButton.innerHTML = `<div class="text-start">
                                    <button type="button" class="btn btnYellow btn-block btn-sm mt-3" onclick=createOrder() id="finalCheckOutButton">
                                      <div class="d-flex justify-content-between ">
                                      <div class="pe-3">£${finalPriceofOrder.toFixed(2)}</div>
                                      <div>Checkout <i class="fas fa-long-arrow-alt-right ps-3"></i></div>
                                      </div>
                                    </button>
                                  </div>`;
};

const buildDeliverySlot = () => {
  console.log("buildDeliverySlot");
  const chooseDeliverySlotButton = document.createElement("div");
  chooseDeliverySlotButton.innerHTML = `<button type="button" class="btn btnYellow btn-block btn-sm mt-3 ml-auto ms-2" onclick=chooseDeliverySlot() id="chooseDilverySlotButton">
  <div class="d-flex justify-content-between ">
    <div>Choose Delivery Slot</div>
  </div>
  </button>
  <div class="mt-2 ms-2" id="deliveryTimeText"> Current Delivery Slot: </div>`;
  TwoID.appendChild(chooseDeliverySlotButton);
  OneID.appendChild(TwoID)
  
};

const buildCheckoutButton = () => {
console.log("buildCheckoutButton");
ThreeID.innerHTML = "";
finalCheckOutButton = document.createElement("div");

finalCheckOutButton.innerHTML = `<div class="text-start">
<button type="button" class="btn btnYellow btn-block btn-sm mt-3" onclick=createOrder() id="finalCheckOutButton">
  <div class="d-flex justify-content-between ">
  <div class="pe-3">£${finalPriceofOrder.toFixed(2)}</div>
  <div>Checkout <i class="fas fa-long-arrow-alt-right ps-3"></i></div>
  </div>
</button>
</div>`;

  ThreeID.appendChild(finalCheckOutButton);
  TwoID.appendChild(ThreeID)

  const deliveryTimeText = document.getElementById("deliveryTimeText");

  deliveryTimeText.style.fontWeight = "bold";
  deliveryTimeText.innerHTML += "No slot selected";
};

const chooseDeliverySlot = () => {
  console.log({deliveryPrice});
  finalPriceofOrder = finalPriceofOrder - deliveryPrice
  console.log({finalPriceofOrder});
  chooseDeliverySlotContainerID.classList.remove("hidden");
  checkoutContainerID.classList.add("hidden");

  if (tableCount === 0) {
    chooseDeliverySlotContainerTopID.innerHTML = "";
    chooseDeliverySlotContainerID.classList.remove("hidden");
    checkoutContainerID.classList.add("hidden");

    const apiURL = "/api/getDeliverySlotsFromDB";

    fetch("/api/getDeliverySlotsFromDB")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((schedule) => {
        // Create the table
        let table = document.createElement("table");

        // Create the header row with days of the week and dates
        let headerRow = table.insertRow(0);
        headerRow.insertCell(0); // Empty cell for the corner
        for (let i = 0; i < schedule.length; i++) {
          let cell = headerRow.insertCell(i + 1);
          cell.innerHTML = schedule[i].day + "<br>" + schedule[i].date;
          cell.style.textAlign = "center";
          cell.style.fontWeight = "bold";
          cell.style.fontSize = "16px";
        }

        // Create the data rows
        for (let j = 0; j < schedule[0].slots.length; j++) {
          let row = table.insertRow(j + 1);
          let headerCell = row.insertCell(0);
          headerCell.innerHTML = schedule[0].slots[j].time;
          headerCell.style.textAlign = "center";
          headerCell.style.fontWeight = "bold";
          headerCell.style.fontSize = "16px";

          for (let k = 0; k < schedule.length; k++) {
            let cell = row.insertCell(k + 1);
            let slot = schedule[k].slots[j];
            cell.style.textAlign = "center";

            cell.onclick = (function (currentCell, slot, day, date) {
              return function () {
                // Check if the clicked slot is different from the selected one
                if (selectedSlotId !== null && selectedSlotId !== slot.id) {
                  return;
                }

                // If the slot is "unavailable," do not allow selection
                if (slot.status === "unavailable") {
                  return;
                }

                // Toggle between "not booked" and "booked"
                slot.status =
                  slot.status === "not booked" ? "booked" : "not booked";

                // Deselect the previously selected cell, if any
                if (selectedSlotId !== null) {
                  var selectedCell = document.getElementById(selectedSlotId);
                  if (selectedCell) {
                    selectedCell.classList.remove("selected");
                  }
                }

                // Change the look of the clicked cell
                currentCell.classList.toggle(
                  "selected",
                  slot.status === "booked"
                );
                currentCell.classList.toggle(
                  "booked",
                  slot.status === "booked"
                );

                // Update the text content of the cellchooseDeliverySlot
                if (slot.status === "booked" || slot.status === "unavailable") {
                  currentCell.innerHTML = slot.status;
                } else {
                  currentCell.innerHTML =
                    slot.status + "<br>Price: £" + slot.price.toFixed(2);
                }

                // Update the selected cell reference
                selectedSlotId = slot.status === "booked" ? slot.id : null;
                if(selectedSlotId){ // update if a cell is selected
                  selectedSlotId = selectedSlotId;
                  deliveryDay = day;
                  deliveryDate = date;
                  deliverySlotTime = slot.time;
                  deliveryPrice = slot.price;
                } else {   //if no cell is selected then by setting deliverySlotTime to null it will not print any details on the checkout screen
                  deliverySlotTime = null
                  deliveryPrice = 0
                }
              };
            })(cell, slot, schedule[k].day, schedule[k].date);

            // Set initial styling based on the initial status
            cell.classList.toggle("selected", slot.status === "booked");
            cell.classList.toggle("booked", slot.status === "booked");
            cell.classList.toggle("unavailable", slot.status === "unavailable");
            if (cell.classList.contains("unavailable")) {
              cell.innerHTML = slot.status;
            } else {
              cell.innerHTML =
                slot.status + "<br>Price: £" + slot.price.toFixed(2);
            }
          }
        }

        chooseDeliverySlotContainerTopID.appendChild(table);
      })
      .catch((error) => {});
  }
  tableCount++;
  
  buildCheckoutButton
};

const deliveryConfirmSlot = () => {
  
  deliverySlotInformation =
    deliveryDay +
    " " +
    deliveryDate +
    " " +
    deliverySlotTime +
    " - £" +
    deliveryPrice.toFixed(2);

      //finalPriceofOrder = cartClass.cartTotalPrice + deliveryPrice;
      finalPriceofOrder = finalPriceofOrder + deliveryPrice;

  buildCheckoutButton();
  deliveryTimeText.innerHTML = "";
  chooseDeliverySlotContainer.classList.add("hidden");

  if (!deliverySlotTime) {
    deliveryTimeText.innerHTML += "No slot selected";
  } else {
    deliveryTimeText.innerHTML += deliverySlotInformation;
  }
  checkoutContainerID.classList.remove("hidden");
};

const chooseNewAddress = () => {
  checkoutContainerID.classList.add("hidden");
  chooseNewAddressContainer.classList.remove("hidden");
  let addresses = JSON.parse(localStorage.getItem("addresses")) || [];
  //let selectedAddressIndex = null; // Declare selectedAddressIndex here
  OneID.innerHTML = "";
  chooseNewAddressContainerID.innerHTML = "";
  selectedAddressIndex = 0; // if a user doesnt click on an address then the one strored first in the array will be displayed
  //Build up the addresses from MY address Book and add a radio button
  addresses.forEach((address, index) => {
    const createRadioBtnAddresses = document.createElement("div");
    createRadioBtnAddresses.innerHTML = `<div class="form-check customBorderThinner rounded mt-2 ps-5 py-3">
                                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${index}" ${
      index === 0 ? "checked" : ""
    }>
                                         <label class="form-check-label" for="flexRadioDefault${index}">
                                           <div class="cart-item">
                                              <span>${address.line_1}</span>
                                              <span>, ${
                                                address.post_town
                                              }</span>
                                              <span>, ${address.postcode}</span>
                                           </div>
                                         </label>
                                       </div>`;
    createRadioBtnAddresses
      .querySelector(".form-check-input")
      .addEventListener("click", function () {
        // Store the selected index in the variable
        selectedAddressIndex = index;
        //useSelectedAddress(selectedAddressIndex)
      });
    chooseNewAddressContainerID.appendChild(createRadioBtnAddresses);
  });

  const chooseNewAddressBtn = document.createElement("div");
  chooseNewAddressBtn.innerHTML = `<div>
                                    <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btnYellow rounded"
                                    onclick="useSelectedAddress(selectedAddressIndex)">Use this address
                                    </button>
                                    <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btnYellow rounded"
                                    onclick="CancelBtnUseThisAddress()">Cancel
                                    </button>
                                    <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btnYellow rounded"
                                    onclick="addNewAddress2()">Add new address
                                    </button>
                                  </div>`;
  chooseNewAddressContainerID.appendChild(chooseNewAddressBtn);
};
//function to call the add address window
const addNewAddress2 = () => {
  addAddressFormConatinerID.classList.remove("hidden");
  chooseNewAddressContainerID.classList.add("hidden");
  addAddressFormContainer.classList.remove("hidden");
  line_1ID.value = "";
  line_2ID.value = "";
  post_townID.value = "";
  postcodeID.value = "";
  phonenumberID.value = "";
  counter2 = 1; // used to show where the call has come from so it can then make a decision within new address form as to which windows to open again
};

const CancelBtnUseThisAddress = () => {
  chooseNewAddressContainerID.classList.add("hidden");
  checkoutContainerID.classList.remove("hidden");
  buildDefualtAddress(cartClass);
};

const useSelectedAddress = (index) => {
  chooseNewAddressContainerID.classList.add("hidden");
  checkoutContainerID.classList.remove("hidden");

  if (index !== null) {
    let addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    let selectedAddress = addresses[index];
    const deliveryAddressDefault = document.createElement("div");
    deliveryAddressDefault.innerHTML = `<div class="card text-dark rounded customBorderThinner ms-3">
                                        <div class="card-body ">
                                          <div class="d-flex justify-content-between align-items-center mb-1">
                                            <b>Delivery Address</b>
                                            <button type="button" class="btn btnYellow btn-block btn-sm mt-3" onclick=chooseNewAddress() id="chooseNewAddress">Change</button></div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${selectedAddress.line_1}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${selectedAddress.post_town}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                            <p class="mb-1">${selectedAddress.postcode}</p>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                          <p class="mb-1">${selectedAddress.PhoneNo}</p>
                                          </div>
                                        </div>
                                      </div>`;
    savedAddress = [];
    savedAddress.push(
      selectedAddress.line_1,
      selectedAddress.post_town,
      selectedAddress.Postcode,
      selectedAddress.PhoneNo
    );

    OneID.appendChild(deliveryAddressDefault);
  } else {
    console.log("No address selected.");
  }
  console.log(savedAddress);
  OneID.appendChild(TwoID)
  TwoID.appendChild(ThreeID)
};
//Function to add orders to the nested array
const addOrder = (orderArray, order) => {
  // Check if there is an existing order with the same order number
  const existingOrder = orderArray.find(
    (item) => item[0].orderNumber === order.orderNumber
  );
  if (existingOrder) {
    // If the order number already exists, add the new order to the existing order group
    existingOrder.push(order);
  } else {
    // If the order number doesn't exist, create a new order group with the new order
    orderArray.push([order]);
  }
};
//update the order array with the latest order when youy click the checkout button
const createOrder = () => {

  if (!deliverySlotTime){
    alert("You need to select a delivery slot before checking out")
    return;
  }
  else{
    sendEmailVariablesAPI();
    callEmailFunctionAPI();
    //set cart counter to zero
    cartItemCount.innerHTML = 0;
    UpdateStockControlAPI();
    updateOrderQtyToZeroAPI();
    alertboxID.classList.toggle("hidden")
    cartClass.cartItems = [];
    cartContainerID.classList.add("hidden");
  
    checkoutContainerID.classList.add("hidden");
    let counter = orderClass.orderNumber - 1;
    let storageArray = [];
    orderClass.customerOrder = cartClass.cartItems;
    //if there are no orders stored then store the current order
    if (localStorage.getItem("strObj") == null) {
      const strObj = JSON.stringify(ordersArray);
      localStorage.setItem("strObj", strObj);
    } else {
      //if orders already exist - pull the current order list from LocalStorage
      const strObjFromStorage = localStorage.getItem("strObj");
      let objFromStorage = JSON.parse(strObjFromStorage);
  
      objFromStorage = objFromStorage.concat(ordersArray); //add the current order to the end of the orders array
  
      const strObj = JSON.stringify(objFromStorage);
      localStorage.setItem("strObj", strObj); //put the array back into LocalStorage
    }
  
    orderClass.orderNumber = orderClass.orderNumber + 1;
  
    const strObjOrdeNum = JSON.stringify(orderClass.orderNumber);
    localStorage.setItem("strObjOrderNum", strObjOrdeNum); //put the order number into LocalStorage
  }

};

messageCloseButtonD.addEventListener("click", () => {
  console.log("clicked");
  alertboxID.classList.toggle("hidden")
 location.reload();
});

/*discountCodesButtonID.addEventListener("click", () => {
  accountContainer2ID.classList.remove("hidden");
  checkDiscountCodeALLAPI();
});
let lastIDDiscountCode = 0
const buildDiscountCodes = (codes) => {
  accountContainer2ID.innerHTML = "";
  accountContainer3ID.innerHTML = ""
  lastIDDiscountCode = codes.length
  codes.forEach((item) => {
    const discountCodeRow = document.createElement("div");
    discountCodeRow.innerHTML = `<div class="container border border-secondary mt-4 border-1 rounded text-center p-2 bg-white text-dark">
                                  <div class="row">
                                    <div class="col">
                                      <input type="text" class="form-control border border-secondary border-1 rounded ms-5 mt-3 mb-3" id="discountCodeTitle${item.ID}"
                                      value="${item.code}" style="width:200px">
                                    </div>
                                    <div class="col">
                                      <input type="number" class="form-control border border-secondary border-1 rounded ms-1 mt-3 mb-3" id="discountCodePercentage${item.ID}"
                                      value="${item.discPercent}" style="width:70px"  min="1" max="100">
                                    </div>
                                    <div class="col">
                                      <div class="">
                                        <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btnYellow rounded"
                                        onclick="updateDiscountCode(${item.ID}, document.getElementById('discountCodeTitle${item.ID}').value, document.getElementById('discountCodePercentage${item.ID}').value)">Update
                                        </button>
                                      </div>
                                    </div>
                                    <div class="col">
                                      <div class="">
                                        <button class="btn ms-1 mt-3 me-5 mb-3 btn-default btn-sm btnYellow rounded"
                                        onclick="deleteDiscountCode(${item.ID})">Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>`;
    accountContainer2ID.appendChild(discountCodeRow);

  });
  addDiscountCodeButtons()
   
};
   //add the buttons at the bottom after creating the discount codes
const addDiscountCodeButtons = () =>{
  document.getElementById("accountContainer2").classList.remove('hidden')
  document.getElementById("accountContainer3").classList.remove('hidden')
  const discountCodesButtonElement = document.createElement("div");
  discountCodesButtonElement.innerHTML = `</div>
                                      <div <button class="btn ms-1 mt-3 btn-default btn-sm btnYellow rounded " onclick=hideDiscountButtons() >Close Discount Codes</button></div>
                                      <div <button class="btn ms-3 mt-3 btn-default btn-sm btnYellow rounded " onclick=addDiscountCodeIputs() ">Add Discount Code</button>
                                    </div>`;
  accountContainer3ID.appendChild(discountCodesButtonElement);
  //accountContainer2ID.appendChild(accountContainer3ID);

}

const hideDiscountButtons = () => {

  document.getElementById("accountContainer2").classList.add('hidden')
  document.getElementById("accountContainer3").classList.add('hidden')
}

const addDiscountCodeIputs = () => {
  const discountCodeRowAdd = document.createElement("div");
  discountCodeRowAdd.innerHTML = `<div class="container border border-secondary mt-4 border-1 rounded text-center p-2 bg-white text-dark">
                                <div class="row">
                                  <div class="col">
                                    <input type="text" class="form-control border border-secondary border-1 rounded ms-5 mt-3 mb-3" id="discountCodeTitleNew"
                                    value="" style="width:200px">
                                  </div>
                                  <div class="col">
                                    <input type="number" class="form-control border border-secondary border-1 rounded ms-1 mt-3 mb-3" id="discountCodePercentageNew"
                                    value="" style="width:70px" min="1" max="100">
                                  </div>
                                  <div class="col">
                                    <div class="">
                                      <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btnYellow rounded"
                                      onclick="addDiscountCodeAPI(${lastIDDiscountCode+1},document.getElementById('discountCodeTitleNew').value, document.getElementById('discountCodePercentageNew').value)">Update
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="">
                                      <button class="btn ms-1 mt-3 me-5 mb-3 btn-default btn-sm btnYellow rounded"
                                      onclick="deleteDiscountCode()">Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>`;
  accountContainer2ID.appendChild(discountCodeRowAdd);
}

const updateDiscountCode = (ID, updatedCode, updatedPercentage) => {

  console.log('Updating discount ID:', ID);
  console.log('Updated Title:', updatedCode);
  console.log('Updated Percentage:', updatedPercentage);
  updateDiscountCodeAPI(ID, updatedCode, updatedPercentage)

};


const deleteDiscountCode = (ID) => {
  console.log(ID);
  deleteDiscountCodeAPI(ID)
};*/



//when you click the previous orders button, show teh orders by order number
previousOrdersButtonID.addEventListener("click", () => {
  accountContainer2ID.classList.remove("hidden");
  const strObjFromStorage = localStorage.getItem("strObj");
  let objFromStorage = JSON.parse(strObjFromStorage);

  accountContainer2.innerHTML = "";
  //iterate through each order number
  for (let i = 0; i < objFromStorage.length; i++) {
    const orderGroup = objFromStorage[i];
    const orderGroupElement = document.createElement("div");
    orderGroupElement.innerHTML = `<div class="container mt-3 mb-2 border rounded"
      <span><b>Order Number: ${i + 1}</b></span>`;
    //then iterate through the order
    for (let j = 0; j < orderGroup.length; j++) {
      const order = orderGroup[j];
      const cartItemElement = document.createElement("div");
      cartItemElement.innerHTML = `<div class="cart-item ms-4">

                                          <span>${order.title}</span>
                                          <span>Quantity: ${
                                            order.quantity
                                          }</span>
                                          <span>Total Price: £${order.totalPrice.toFixed(
                                            2
                                          )}</span> 
                                      </div>`;
      orderGroupElement.appendChild(cartItemElement);
    }
    accountContainer2ID.appendChild(orderGroupElement);
  }
  const ordersButtonElement = document.createElement("div");
  ordersButtonElement.innerHTML = `</div>
                                       <div <button class="btn ms-1 mt-3 btn-default btn-sm btnYellow rounded " onclick=document.getElementById("accountContainer2").classList.add('hidden')  id="btnCloseOrders">Close orders</button>
                                      </div>`;
  accountContainer2ID.appendChild(ordersButtonElement);
});

yourAddressessButtonID.addEventListener("click", function () {
  accountContainer2.innerHTML = "";
  accountContainer2ID.classList.remove("hidden");
  createAddressCards();
});

const getaddresses = async () => {
  //is this the 1st time you have run this or are there already addresses in local storage
  let addresses = JSON.parse(localStorage.getItem("addresses")) || [];
  if (addresses.length === 0) {
    //is this the 1st time
    let url = "address.json";

    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {}
  } else {
    //if not the 1st time, use the objects in local storage
    let addresses = JSON.parse(localStorage.getItem("addresses"));
    return addresses;
  }
};
getaddresses();

//does what it says on the tin (in the title!)
const fetchAndStoreAddresses = async () => {
  let addresses = await getaddresses();
  localStorage.setItem("addresses", JSON.stringify(addresses));
  return addresses;
};

// Function to set an address as default
const setDefaultAddress = (index) => {
  let addresses = JSON.parse(localStorage.getItem("addresses"));
  addresses.forEach((address, i) => {
    address.Default = i === index ? "TRUE" : ""; //sets the Default value of the object to TRUE or "" depending on if it is the one equal to INDEX
  });
  localStorage.setItem("addresses", JSON.stringify(addresses));
  createAddressCards(); // Update the UI after setting the default address
};

const RemoveAddress = (index) => {
  let addresses = JSON.parse(localStorage.getItem("addresses"));

  //checks to see if a user is trying to delete the default address and prevents them
  if (addresses[index].Default === "TRUE") {
    alert(
      "This is your default address, you must set another address as default before being able to delete this one"
    );
  } else if (index >= 0 && index < addresses.length) {
    addresses.splice(index, 1); //remove the address object at position equal to INDEX
  } else {
    console.log("Invalid index");
  }
  localStorage.setItem("addresses", JSON.stringify(addresses));
  createAddressCards();
};
//CURRENTLY NOT USED BUT THE ARRAY OF ADDRESSES COULD COME IN HANDY - *******************************************************************
document.addEventListener("DOMContentLoaded", () => {
  addresses = JSON.parse(localStorage.getItem("addresses")) || []; // Retrieve addresses from local storage or initialize an empty array

  // Update addressStreetNameArray with all street names from addresses
  addressStreetNameArray = addresses.map((address) => address.line_1);

  // Call createAddressCards function to initially populate the UI with addresses
  createAddressCards();
});
//***************************************

const createAddressCards = async () => {
  let addresses = JSON.parse(localStorage.getItem("addresses")) || [];

  // Sort addresses array based on Default property (TRUE comes first) - put the default one at the top
  addresses.sort((a, b) => (b.Default === "TRUE") - (a.Default === "TRUE"));
  //after sorting the array, put it back in localstorage so localstorage has the most up to date order, then call it again (this sorted out the issue where the default was not working because what was on  teh screen was not the same as in local storage)
  localStorage.setItem("addresses", JSON.stringify(addresses));
  addresses = JSON.parse(localStorage.getItem("addresses")) || [];
  //check if there is only 1 address then set it to default
  if (addresses.length === 1) {
    addresses[0].Default = "TRUE";
  }

  // Clear existing content in accountContainer2ID
  accountContainer2ID.innerHTML = "";
  addresses.forEach((address, index) => {
    const addressElement = document.createElement("div");
    const id = `address${index + 1}`;
    addressElement.innerHTML = `
    <div class="card text-dark rounded-3 mt-3">
        <div class="card-body">
            <div class="mb-3">
                <strong>Street Name:</strong> ${address.line_1}
            </div>
            <div class="mb-3">
                <strong>Town/City:</strong> ${address.post_town}
            </div>
            <div class="mb-3">
                <strong>Postcode:</strong> ${address.postcode}
            </div>
            <div class="mb-3">
                <strong>Phone Number:</strong> ${address.PhoneNo}
            </div>
        </div>
    </div>
`;

    const addressElement2 = document.createElement("div");
    //if default address, colour the backgroun
    if (address.Default === "TRUE") {
      // Select existing list items and change their background color
      const listItems = addressElement.querySelectorAll(".card");
      listItems.forEach((item) => {
        item.style.backgroundColor = "#f2f2f2"; // Set grey background color
      });
      //add the 'remove' link to ALL addresses
      addressElement2.innerHTML = `<div class="link-dark ms-3 mt-2"><b>This is your default address</b></div>`;
      const removeAddressButton = document.createElement("a");
      removeAddressButton.classList.add("link-dark", "ms-3", "mt-2");
      removeAddressButton.innerHTML = "<b>Remove</b>";
      removeAddressButton.addEventListener("click", () => {
        RemoveAddress(index);
      });
      addressElement2.appendChild(removeAddressButton);
      //if not the default address, add the 'remove' + 'Set as Default' links
    } else {
      const setDefaultButton = document.createElement("a");
      setDefaultButton.classList.add("link-dark", "ms-3", "mt-2");
      setDefaultButton.innerHTML = "<b>Set as Default</b>";
      setDefaultButton.addEventListener("click", () => {
        setDefaultAddress(index);
      });

      const removeAddressButton = document.createElement("a");
      removeAddressButton.classList.add("link-dark", "ms-3", "mt-2");
      removeAddressButton.innerHTML = "<b>Remove</b>";
      removeAddressButton.addEventListener("click", () => {
        RemoveAddress(index);
      });
      addressElement2.appendChild(setDefaultButton);
      addressElement2.appendChild(removeAddressButton);
    }

    accountContainer2ID.appendChild(addressElement);
    accountContainer2ID.appendChild(addressElement2);
  });
  //add the buttons at the bottom after creating the address cards
  const AddressesButtonElement = document.createElement("div");
  AddressesButtonElement.innerHTML = `</div>
                                      <div <button class="btn ms-1 mt-3 btn-default btn-sm btnYellow rounded " onclick=document.getElementById("accountContainer2").classList.add('hidden') >Close Addresses</button></div>
                                      <div <button class="btn ms-3 mt-3 btn-default btn-sm btnYellow rounded " onclick=initialiseAddressFormContainer() ">Add Addresses</button>
                                    </div>`;
  accountContainer2ID.appendChild(AddressesButtonElement);
};
// Fetch and store addresses, then create address cards
fetchAndStoreAddresses().then(() => {
  createAddressCards();
});

const initialiseAddressFormContainer = () => {
  addAddressFormContainer.classList.remove("hidden");
  line_1ID.value = "";
  line_2ID.value = "";
  post_townID.value = "";
  postcodeID.value = "";
  phonenumberID.value = "";
};

//add a new address
addAddressButtonID.addEventListener("click", () => {
  line_1 = line_1ID.value.trim();
  post_town = post_townID.value.trim();
  postcode = postcodeID.value.trim();
  phonenumber = phonenumberID.value.trim();

  if (line_1 !== "" && post_town !== "" && postcode !== "") {
    //if the 3 alphabetical fields are populated continue
    let addresses = JSON.parse(localStorage.getItem("addresses"));
    let newaddress = {
      line_1: line_1,
      post_town: post_town,
      postcode: postcode,
      PhoneNo: phonenumber,
      Default: "",
    };
    addresses.push(newaddress); //add the new address to the addresses array
    localStorage.setItem("addresses", JSON.stringify(addresses));
    createAddressCards();
    addAddressFormContainer.classList.add("hidden");
    if (counter2 === 1) {
      counter2 = 0;
      chooseNewAddress();
    }
  }
});
//cancel button on add address screen
const CancelBtnAddAddress = () => {
  addAddressFormConatinerID.classList.add("hidden");
};

//used for when clicking on the shopping cart - if there are items in the cart then go to the checkout
const checkForNumberofItemsInOrder = () => {
  if (cartClass.totalItemsInCart > 0) {
    createCheckout();
  } else {
    return;
  }
};
//used when the order is completed, to update the stock levels
const UpdateStockControlAPI = () => {
  fetch("/api/POSTUpdateDBStockNumbers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartClass.cartItems),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
//used to set the qty back to zero when its deleted from the cart
const setStockControlToZeroAPI = (title) => {
  const requestBody = { title: title };

  fetch("/api/POSTUpdateDBOrderQtyWhenDeleted", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//Used to track how many are in the cart
const UpdateCurrentOrderQTYAPI = (numberItems, ID) => {
  const requestData = {
    ID: ID,
    numOfItems: numberItems,
  };

  fetch("/api/POSTUpdateCurrentOrderQTY", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
};

const updateOrderQtyToZeroAPI = () => {
  fetch("/api/updateOrderQtyToZero", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle the response data as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors
    });
};

const getTtitleAPI = (title) => {
  const requestData = {
    title: title,
  };

  fetch("/api/GETTitleID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Assuming data is an array and you want the ID from the first document
      if (Array.isArray(data) && data.length > 0) {
        const titleID = data[0].ID;
        const titleIDInputBox = "inputbox" + titleID;

        //this is so that if you are on the prodcutview page and you delete an item from the cart which is NOT the same as the one you are displaying then do not call the function as that would then dispaly the productview for the item you just deleted
        if (storeForProductID === titleID) {
          generateProductView(event, titleID, titleIDInputBox);
        }
      } else {
        console.log("No documents found or invalid data structure");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const callEmailFunctionAPI = () => {
  fetch("/api/POSTSendCustomerEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartClass.cartItems),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
//Used to send the final price to  the server so this can then be used in the email to the customer
const sendEmailVariablesAPI = () => {
  const requestData = {
    finalPrice: finalPriceofOrder,
    deliverySlotInfo: deliverySlotInformation,
    deliverySlotDay: deliveryDay,
    deliverySlotTime: deliverySlotTime,
    deliveryPrice: deliveryPrice,
    deliveryDate: deliveryDate,
    savedAddress: savedAddress,
  };

  fetch("/api/POSTfinalPriceofOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const checkDiscountCodeAPI = (discountCode) => {
  const requestData = {
    discountCode: discountCode,
  };
  fetch("/api/POSTCheckDiscountCodeAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      calculateDiscount(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const filterShoppingCardsAPI = (filtervalue) => {
  const requestData = {
    type: searchType,
    filtervalue: filtervalue,
  };

  fetch("/api/getItemsFromDBAndFilter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      buildShopCards(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const filterShoppingCardsAllAPI = (filtervalue) => {
  const requestData = {
    filtervalue: filtervalue,
  };
  console.log({ filtervalue });
  fetch("/api/getAllItemsFromDBAndFilter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      buildShopCards(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const filterShoppingCardsSearchAPI = (filtervalue) => {
  const requestData = {
    title: titleForProductSearch,
    filtervalue: filtervalue,
  };
  console.log({ titleForProductSearch });
  fetch("/api/getSearchItemsFromDBAndFilter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      buildShopCards(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

