let adminMainContainerID = document.getElementById("adminMainContainer");
let adminContainer2ID = document.getElementById("adminContainer2");
let adminContainer3ID = document.getElementById("adminContainer3");
let adminContainer4ID = document.getElementById("adminContainer4");
let adminContainer5ID = document.getElementById("adminContainer5");
let mainContainerID = document.getElementById("mainContainer");

let discountCodesButtonID = document.getElementById("discountCodesButton");
let stockControlButtonID = document.getElementById("stockControlButton");
let failedLogonID = document.getElementById("failedLogon");
let MemoryDestructID = document.getElementById("MemoryDestruct");

let loginSuccessful = false;
let userNameInputID = document.getElementById("userNameInput")
let passwordInputID = document.getElementById("passwordInput")
let accountButtonID = document.getElementById("accountButton")
let accountButtonLogoffID = document.getElementById("accountButtonLogoff")


//var userNameValueID = document.getElementById("userNameInput").value;

let lastIDDiscountCode = 0;

discountCodesButtonID.addEventListener("click", () => {
  document.getElementById("adminContainer2").classList.remove("hidden");
  document.getElementById("adminContainer3").classList.remove("hidden");
  document.getElementById("adminContainer4").classList.add("hidden");
  document.getElementById("adminContainer5").classList.add("hidden");
  discountCodesButtonID.classList.add("active");
  stockControlButtonID.classList.remove("active");



  checkDiscountCodeALLAPI();
});

stockControlButtonID.addEventListener("click", () => {
  document.getElementById("adminContainer4").classList.remove("hidden");
  document.getElementById("adminContainer2").classList.add("hidden");
  document.getElementById("adminContainer3").classList.add("hidden");
  stockControlButtonID.classList.add("active");
  discountCodesButtonID.classList.remove("active");
});



//clear out all items in LocalStorage
MemoryDestructID.addEventListener("click", () => {
  localStorage.clear();
  if (localStorage.getItem("strObj") == null) {
    alert("local storage - strobj is clear");
  }
});

function setActive(buttonId) {
  // Remove 'active' class from all buttons
  let buttons = document.querySelectorAll(".btnYellow"); // for all buttons with this class
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  let clickedButton = document.getElementById(buttonId);
  console.log(buttonId);
  clickedButton.classList.add("active");
}

const buildDiscountCodes = (codes) => {
  adminContainer2ID.innerHTML = "";
  adminContainer3ID.innerHTML = "";
  lastIDDiscountCode = codes.length;
  codes.forEach((item) => {
    const discountCodeRow = document.createElement("div");
    discountCodeRow.innerHTML = `<div class="container customBorderThinner mt-2 border-1 rounded text-center p-2 bg-white text-dark">
                                  <div class="row">
                                    <div class="col">
                                      <input type="text" class="form-control customBorderThinner border-1 rounded ms-5 mt-3 mb-3" id="discountCodeTitle${item.ID}"
                                      value="${item.code}" style="width:200px">
                                    </div>
                                    <div class="col">
                                      <input type="number" class="form-control customBorderThinner border-1 rounded ms-1 mt-3 mb-3" id="discountCodePercentage${item.ID}"
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
    adminContainer2ID.appendChild(discountCodeRow);
  });

  addDiscountCodeButtons();
};
//add the buttons at the bottom after creating the discount codes
const addDiscountCodeButtons = () => {
  //document.getElementById("adminContainer2").classList.remove('hidden')
  //document.getElementById("adminContainer3").classList.remove('hidden')
  const discountCodesButtonElement = document.createElement("div");
  discountCodesButtonElement.innerHTML = `</div>
                                      <div <button class="btn my-3 btn-default btn btnYellow rounded " onclick=hideDiscountButtons() >Close Discount Codes</button></div>
                                      <div <button class="btn ms-3 my-3 btn-default btn btnYellow rounded " onclick=addDiscountCodeIputs() ">Add Discount Code</button>
                                    </div>`;
  adminContainer3ID.appendChild(discountCodesButtonElement);
  //adminContainer2ID.appendChild(adminContainer3ID);
};

const hideDiscountButtons = () => {
  document.getElementById("adminContainer2").classList.add("hidden");
  document.getElementById("adminContainer3").classList.add("hidden");
  discountCodesButtonID.classList.remove("active");
  stockControlButtonID.classList.remove("active");
};

const addDiscountCodeIputs = () => {
  const discountCodeRowAdd = document.createElement("div");
  discountCodeRowAdd.innerHTML = `<div class="container customBorderThinner mt-2 mb-1 border-1 rounded text-center p-2 bg-white text-dark">
                                <div class="row">
                                  <div class="col">
                                    <input type="text" class="form-control customBorderThinner border-1 rounded ms-5 mt-3 mb-3" id="discountCodeTitleNew"
                                    value="" style="width:200px">
                                  </div>
                                  <div class="col">
                                    <input type="number" class="form-control customBorderThinner border-1 rounded ms-1 mt-3 mb-3" id="discountCodePercentageNew"
                                    value="" style="width:70px" min="1" max="100">
                                  </div>
                                  <div class="col">
                                    <div class="">
                                      <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btnYellow rounded"
                                      onclick="addDiscountCodeAPI(${
                                        lastIDDiscountCode + 1
                                      },document.getElementById('discountCodeTitleNew').value, document.getElementById('discountCodePercentageNew').value)">Update
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
  adminContainer2ID.appendChild(discountCodeRowAdd);
};

const updateDiscountCode = (ID, updatedCode, updatedPercentage) => {
  updateDiscountCodeAPI(ID, updatedCode, updatedPercentage);
};

const deleteDiscountCode = (ID) => {
  console.log(ID);
  deleteDiscountCodeAPI(ID);
};

const buildStockCards = (stock) => {
  adminContainer5ID.innerHTML = "";
  document.getElementById("adminContainer5").classList.remove("hidden");
  console.log({ stock });
  stock.forEach((item) => {
    const stockCodeRow = document.createElement("div");
    stockCodeRow.innerHTML = `<div class="container customBorderThinner mt-2 border-1 rounded text-center p-2 bg-white text-dark">
                                        <div class="row">
                                            <div class="col">
                                                <input type="text" class="form-control customBorderThinner border-1 rounded ms-5 mt-3 mb-3" id="stockTitle${item.ID}"
                                                    value="${item.title}" style="width:200px">
                                            </div>
                                            <div class="col">
                                                <input type="number" class="form-control customBorderThinner border-1 rounded ms-1 mt-3 mb-3" id="stockquantity${item.ID}"
                                                    value="${item.stock}" style="width:70px"  min="0" max="100">
                                            </div>
                                            <div class="col">
                                                <div class="">
                                                    <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btnYellow rounded"
                                                        onclick="updateStockAmountAPI(${item.ID}, parseInt(document.getElementById('stockquantity${item.ID}').value, 10))">Update
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
    adminContainer5ID.appendChild(stockCodeRow);
  });

  const stockButtonElement = document.createElement("div");
  stockButtonElement.innerHTML = `</div>
                                            <div <button class="btn my-3 btn-default btn btnYellow rounded " onclick=hideStockButtons() >Close Stock Control</button></div>
                                          </div>`;
  adminContainer5ID.appendChild(stockButtonElement);
};

const hideStockButtons = () => {
  document.getElementById("adminContainer4").classList.add("hidden");
  document.getElementById("adminContainer5").classList.add("hidden");
  stockControlButtonID.classList.remove("active");
  discountCodesButtonID.classList.remove("active");
};

const checkDiscountCodeALLAPI = () => {
  fetch("/api/POSTAllDiscountCodeAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      buildDiscountCodes(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const deleteDiscountCodeAPI = (ID) => {
  const requestData = {
    ID: ID,
  };
  console.log("2164", ID);
  fetch("/api/POSTdeleteDiscountCodeAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      buildDiscountCodes(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const updateDiscountCodeAPI = (ID, updatedCode, updatedPercentage) => {
  const requestData = {
    ID: ID,
    updatedCode: updatedCode,
    discPercent: updatedPercentage,
  };
  console.log({ requestData });
  fetch("/api/POSTupdateDiscountCodeAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      buildDiscountCodes(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const addDiscountCodeAPI = (ID, code, discPercent) => {
  const requestData = {
    ID: ID,
    code: code,
    discPercent: discPercent,
  };
  console.log({ requestData });
  fetch("/api/POSTAddDiscountCodeAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      buildDiscountCodes(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const generateStockListAPI = (type) => {
  searchType = type;
  const requestData = {
    type: type,
  };
  console.log({ requestData });
  fetch("/api/POSTgenerateStockListAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      setActive(type + "Button");
      buildStockCards(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const generateAllStockListAPI = () => {
  fetch("/api/generateAllStockListAPI")
    .then((response) => response.json())
    .then((data) => {
      setActive("allButton");
      buildStockCards(data);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const updateStockAmountAPI = (ID, stockQty) => {
  const requestData = {
    ID: ID,
    stock: stockQty,
  };
  console.log({ requestData });
  fetch("/api/POSTupdateStockAmountAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      //buildDiscountCodes(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function getLogonDetails() {
  // Get the value from the "Username" input field
  event.preventDefault();

  getLogonDetailsAPI();
  console.log("test",{loginSuccessful});
 

  // Add your logic here, for example, sending the username to the server or performing validation.
}

const getLogonDetailsAPI = () => {
  fetch("http://localhost:5051/Logon")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userNameValue = document.getElementById("userNameInput").value;
      let passwordValue = document.getElementById("passwordInput").value;

      console.log("Username entered:", userNameValue);
      console.log("Password entered:", passwordValue);

      // Use find to stop the loop when a match is found
      const foundEntry = data.find((entry) => {
        return userNameValue === entry.username && passwordValue === entry.password;
      });

      if (foundEntry) {
        mainContainerID.classList.remove("hidden");
        loginSuccessful = true;
        console.log({loginSuccessful});
        userNameInputID.classList.add("hidden")
        passwordInputID.classList.add("hidden")
        accountButtonID.classList.add("hidden")
        accountButtonLogoffID.classList.remove("hidden")
        failedLogon.classList.add("hidden")
      } else {
        console.log({loginSuccessful});
        failedLogonID.classList.remove("hidden");
        console.log("here");
        userNameInput.value = ""; 
        passwordInput.value = ""
      }
    })
    .catch((error) => console.error("Error:", error));
};

const showLogOn = () => {
        userNameInputID.classList.remove("hidden")
        passwordInputID.classList.remove("hidden")
        accountButtonID.classList.remove("hidden")
        accountButtonLogoffID.classList.add("hidden")
        mainContainerID.classList.add("hidden")
        userNameInput.value = ""; 
        passwordInput.value = ""

}
