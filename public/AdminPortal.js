let adminMainContainerID = document.getElementById("adminMainContainer");
let adminContainer2ID = document.getElementById("adminContainer2");
let adminContainer3ID = document.getElementById("adminContainer3");
let adminContainer4ID = document.getElementById("adminContainer4");
let adminContainer5ID = document.getElementById("adminContainer5");

let discountCodesButtonID = document.getElementById("discountCodesButton");
let stockControlButtonID = document.getElementById("stockControlButton");

let lastIDDiscountCode = 0;

discountCodesButtonID.addEventListener("click", () => {
  document.getElementById("adminContainer2").classList.remove("hidden");
  document.getElementById("adminContainer3").classList.remove("hidden");
  document.getElementById("adminContainer4").classList.add("hidden");
  document.getElementById("adminContainer5").classList.add("hidden");
  checkDiscountCodeALLAPI();
});

stockControlButtonID.addEventListener("click", () => {
  document.getElementById("adminContainer4").classList.remove("hidden");
  document.getElementById("adminContainer2").classList.add("hidden");
  document.getElementById("adminContainer3").classList.add("hidden");
});

const buildDiscountCodes = (codes) => {
  adminContainer2ID.innerHTML = "";
  adminContainer3ID.innerHTML = "";
  lastIDDiscountCode = codes.length;
  codes.forEach((item) => {
    const discountCodeRow = document.createElement("div");
    discountCodeRow.innerHTML = `<div class="container border border-secondary mt-2 border-1 rounded text-center p-2 bg-white text-dark">
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
                                        <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btn-secondary rounded"
                                        onclick="updateDiscountCode(${item.ID}, document.getElementById('discountCodeTitle${item.ID}').value, document.getElementById('discountCodePercentage${item.ID}').value)">Update
                                        </button>
                                      </div>
                                    </div>
                                    <div class="col">
                                      <div class="">
                                        <button class="btn ms-1 mt-3 me-5 mb-3 btn-default btn-sm btn-secondary rounded"
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
                                      <div <button class="btn my-3 btn-default btn btn-secondary rounded " onclick=hideDiscountButtons() >Close Discount Codes</button></div>
                                      <div <button class="btn ms-3 my-3 btn-default btn btn-secondary rounded " onclick=addDiscountCodeIputs() ">Add Discount Code</button>
                                    </div>`;
  adminContainer3ID.appendChild(discountCodesButtonElement);
  //adminContainer2ID.appendChild(adminContainer3ID);
};

const hideDiscountButtons = () => {
  document.getElementById("adminContainer2").classList.add("hidden");
  document.getElementById("adminContainer3").classList.add("hidden");
};

const addDiscountCodeIputs = () => {
  const discountCodeRowAdd = document.createElement("div");
  discountCodeRowAdd.innerHTML = `<div class="container border border-secondary mt-2 mb-5 border-1 rounded text-center p-2 bg-white text-dark">
                                <div class="row">
                                  <div class="col">
                                    <input type="text" class="form-control border border-secondary border-1 rounded ms-5 mt-3 mb-5" id="discountCodeTitleNew"
                                    value="" style="width:200px">
                                  </div>
                                  <div class="col">
                                    <input type="number" class="form-control border border-secondary border-1 rounded ms-1 mt-3 mb-3" id="discountCodePercentageNew"
                                    value="" style="width:70px" min="1" max="100">
                                  </div>
                                  <div class="col">
                                    <div class="">
                                      <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btn-secondary rounded"
                                      onclick="addDiscountCodeAPI(${
                                        lastIDDiscountCode + 1
                                      },document.getElementById('discountCodeTitleNew').value, document.getElementById('discountCodePercentageNew').value)">Update
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col">
                                    <div class="">
                                      <button class="btn ms-1 mt-3 me-5 mb-3 btn-default btn-sm btn-secondary rounded"
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
    stockCodeRow.innerHTML = `<div class="container border border-secondary mt-2 border-1 rounded text-center p-2 bg-white text-dark">
                                        <div class="row">
                                            <div class="col">
                                                <input type="text" class="form-control border border-secondary border-1 rounded ms-5 mt-3 mb-3" id="stockTitle${item.ID}"
                                                    value="${item.title}" style="width:200px">
                                            </div>
                                            <div class="col">
                                                <input type="number" class="form-control border border-secondary border-1 rounded ms-1 mt-3 mb-3" id="stockquantity${item.ID}"
                                                    value="${item.stock}" style="width:70px"  min="0" max="100">
                                            </div>
                                            <div class="col">
                                                <div class="">
                                                    <button class="btn ms-1 mt-3 mb-3 btn-default btn-sm btn-secondary rounded"
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
                                            <div <button class="btn my-3 btn-default btn btn-secondary rounded " onclick=hideStockButtons() >Close Discount Codes</button></div>
                                          </div>`;
  adminContainer5ID.appendChild(stockButtonElement);
};

const hideStockButtons = () => {
  document.getElementById("adminContainer4").classList.add("hidden");
  document.getElementById("adminContainer5").classList.add("hidden");
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
      console.log();
      //buildDiscountCodes(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
