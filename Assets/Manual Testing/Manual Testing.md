# Test Cases

**Test Case 1**: Verify successful login with valid credentials

Description: Verify that a user can successfully log into the site using valid credentials.

**Steps:**

* Navigate to the Logon page.
* Click the "Sign in" button.
* Enter valid email address
* Click the "Continue" button.

**Expected Result:**

The user should be presented with the 'Verification' screen, asking for the code that has been sent to their email address

### Pass/Fail - **Pass**

---

**Test Case 2**: Verify Login failure with invalid credentials

Description: Verify that a user can NOT successfully log into the site using invalid credentials.

**Steps:**

* Navigate to the Logon page.
* Click the "Sign in" button.
* Enter invalid email address
* Click the "Continue" button.

**Expected Result:**

The user should be presented with the message 'Couldn't find your account'

### Pass/Fail - **Pass**

---

**Test Case 3**: Verify successful login using 'Continue with Google'

Description: Verify that a user can successfully log into the site using 'Continue with Google'.

**Steps:**

* Navigate to the Logon page.
* Click the "'Continue with Google" button


**Expected Result:**

The user should be presented with the 'Recipe' page and user icon is shown on the Nav bar next to the 'Account' button

### Pass/Fail - **Pass**

---

**Test Case 4**: Verify recipe search functionality with valid search item

Description: Verify that Recipe search returns recipes relating to the ingredient enetered in the search bar

**Steps:**

* Navigate to the Recipe page.
* Enter a valid food item
* Click the 'Search' button

**Expected Result:**

Cards are displayed relating to the search item

### Pass/Fail - **Pass**

---

**Test Case 5**: Verify recipe search functionality with invalid search item

Description: Verify that Recipe search returns no recipes if the search term is invalid - such as non food item or random text

**Steps:**

* Navigate to the Recipe page.
* Enter a invalid food item
* Click the 'Search' button

**Expected Result:**

No cards are displayed relating to the search item

### Pass/Fail - **Pass**

---

**Test Case 6**: Verify recipe 'Cuisine Type' functionality returns valid recipes

Description: Verify that when the 'Cuisine Type' is selected, the recipes returned are relevant

**Steps:**

* Navigate to the Recipe page.
* Enter a valid food item
* Select a country from the 'Cuisine Type'
* Click the 'Search' button

**Expected Result:**

Cards displayed all contain the selected contry in the card/county section

### Pass/Fail - **Pass**

---

**Test Case 7**: Verify recipe 'Meal Type' functionality returns valid recipes

Description: Verify that when the 'Meal Type' is selected, the recipes returned are relevant

**Steps:**

* Navigate to the Recipe page.
* Enter a invalid food item
* Select a Meal from the 'Meal Type'
* Click the 'Search' button

**Expected Result:**

Cards displayed all contain the selected Meal in the card/Meal section

### Pass/Fail - **Pass**

---

**Test Case 8**: Verify recipe 'Dish Type' functionality returns valid recipes

Description: Verify that when the 'Dish Type' is selected, the recipes returned are relevant

**Steps:**

* Navigate to the Recipe page.
* Enter a invalid food item
* Select a Dish from the 'Dish Type'
* Click the 'Search' button

**Expected Result:**

Cards displayed all contain the selected Dish in the card/Dish section

### Pass/Fail - **Pass**

---

**Test Case 9**: Verify shop page shows 'All items' on first visit

Description: Verify that when the user clicks on the 'Shop' tab they see 'All' the items and the 'All' type button is highlighted

**Steps:**

* Navigate to the Shop page.

**Expected Result:**

Cards displayed are ALL the items in the shop and the 'All' type button is highlighted

### Pass/Fail - **Pass**

---

**Test Case 10**: Verify 'Type' buttons display correct item cards

Description: Verify that when the user clicks each of the 'Type' buttons, only the item cards relating to each button are displayed

**Steps:**

* Navigate to the Shop page.
* Click each of the 'Type' buttons

**Expected Result:**

After each 'Type' button is clicked, item cards relating to each button are displayed i.e user clicks 'Fruit', all items displayed are fruit

### Pass/Fail - **Pass**

---

**Test Case 11**: Verify search fucntionality for 'no' results

Description: Verify when a user enters a search item for an item that is not stocked, no items are diaplayed

**Steps:**

* Navigate to the Shop page.
* Enter an item in the 'search' bar which is not stocked
* Click the 'Search' button

**Expected Result:**

After the user clicks the 'Search' button, no item cards are displayed and a message 'No items match your search' is displayed

### Pass/Fail - **Pass**

---

**Test Case 12**: Verify 'Out of Stock' functionality works

Description: Verify when an items stock value is equal to zeros, an 'Out of Stock' message is displayed

**Steps:**

* Navigate to the Shop page.
* Enter 'Limes' in the 'search' bar
* Click the 'Search' button

**Expected Result:**

After the user clicks the 'Search' button, 'Limes' item card is displayed with a message - 'Out of Stock'

### Pass/Fail - **Pass**

---