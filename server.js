const express = require("express");
const path = require('path');
const app = express();
const fs = require("fs");
const Datastore = require("nedb");
const port = process.env.PORT || 3000;
require('dotenv').config()

app.listen(port, () => {
  console.log(`starting server at ${port}`);
});

app.use(express.static("public")); //listens for all files within the 'public' folder
app.use(express.json({ limit: "1mb" })); //need this for JSON to be allowed to be used

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add a route for the new HTML page
app.get('/AdminPortal', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'AdminPortal.html'));
});

// Add a route for the new HTML page
app.get('/Logon', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Logon.html'));
});

app.get('/api-keys', (req, res) => {
  const apiKey = process.env.API_KEY;
  const appId = process.env.APP_ID;

  res.json({ apiKey, appId });
});

const nodemailer = require('nodemailer');
require('dotenv').config()
let htmlContent = ""

let finalPriceofOrederServerSide
let deliverySlotInfoServerSide
let deliverySlotDayServerSide
let deliverySlotTimeServerSide
let deliveryPriceServerSide
let deliveryDateServerSide
let savedAddressServerSide = []

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.user,
      pass: process.env.pass,
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
      refreshToken: process.env.refreshToken,
    }
  });

const sendEmail = (data) =>{

const attachments = []
let htmlContent = `

<div style="margin-bottom: 10px;">
    <img src="cid:uniqueLogoId" alt="Logo" style="width: 200px; height: 100px; object-fit: cover; border-radius: 4px; margin-bottom: 10px; border: 1px solid #155263;">
    <br>
    Hello Andy,
    <br>
    <br>
    <div style="width: 500px;">
        Your order is scheduled to be delivered ${deliverySlotDayServerSide} ${deliveryDateServerSide} between ${deliverySlotTimeServerSide}.
    </div>
</div>
`;

  attachments.push({
    filename: 'Logo.png', 
    path: 'public/Logo/Logo2.png', 
    encoding: 'base64',
    cid: 'uniqueLogoId', 
  });

  data.forEach((item, index) => {
    attachments.push({
      filename: `image_${item.title.replace(/\s/g, '_')}.png`, // Adjust filename as needed
      content: item.image,
      encoding: 'base64',
      cid: `uniqueImageId${index+1}`, // Content-ID for the image
  });
  })
     // HTML content with embedded image
     data.forEach((item,index) => {

      htmlContent += `
      <div style="width: 500px; border-radius: 8px; border: 1px solid #155263; padding: 10px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
      <div style="flex: 1; display: flex; align-items: center;">
          <img src="cid:uniqueImageId${index + 1}" alt="Product Image" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; margin-right: 10px; ;padding: 5px">
      </div>
      <div style="flex: 1; display: flex; align-items: center; justify-content: center;border-radius: 8px ;width: 200px;padding: 20px">
          ${item.title}
      </div>
      <div style="flex: 1; display: flex; align-items: center; justify-content: center;border-radius: 8px;width: 100px; padding: 20px">
          Qty: ${item.quantity}
      </div>
      <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end;border-radius: 8px; width: 100px; padding: 20px">
          Price £${item.totalPrice.toFixed(2)}
      </div>
  </div>`
       
      
     })
     htmlContent += `
      <div style="width: 500px; border-radius: 8px; border: 1px solid #155263; padding: 10px; margin-bottom: 10px;">
          <span><b>Total Price of your order is £${finalPriceofOrederServerSide.toFixed(2)}, this includes your delivery charge of £${deliveryPriceServerSide.toFixed(2)}</b></span>
      </div>`;

      htmlContent += `<div style="width: 500px; border-radius: 8px; border: 1px solid #155263; padding: 10px; margin-bottom: 10px;">
    <span><b>Delivery Address:</b></span>`;

    savedAddressServerSide.forEach((addressLine) => {
      htmlContent += `<div><span>${addressLine}</span></div>`;

    })

htmlContent += `</div>`;
htmlContent += `
    <div style="width: 500px;">
    <br>
        Thankyou for shopping with us.
    </div>`

  // Example usage:
  const mailOptions = {
    from: 'andrew.britain@gmail.com', // Sender address
    to: 'andrew.britain@gmail.com', // Receiver address
    subject: 'Email with Embedded Image',
    html: htmlContent,
    attachments: attachments,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
}
// make a new database called database.db if it doesnt already exist
const databaseStock = new Datastore("databaseStock.db");
databaseStock.loadDatabase();
db1 = databaseStock;

const imagePath = "Img/Food/Beef Burger.png"; // Replace this with the actual path to your image file
const imageBuffer = fs.readFileSync(imagePath);
const base64Image = imageBuffer.toString("base64");

const imagePath1 = "Img/Food/Beef Fillet.png"; // Replace this with the actual path to your image file
const imageBuffer1 = fs.readFileSync(imagePath1);
const base64Image1 = imageBuffer1.toString("base64");

const imagePath2 = "Img/Food/Beef Mince.png"; // Replace this with the actual path to your image file
const imageBuffer2 = fs.readFileSync(imagePath2);
const base64Image2 = imageBuffer2.toString("base64");

const imagePath3 = "Img/Food/Chicken Breast.png"; // Replace this with the actual path to your image file
const imageBuffer3 = fs.readFileSync(imagePath3);
const base64Image3 = imageBuffer3.toString("base64");

const imagePath4 = "Img/Food/Peeled Prawns.png"; // Replace this with the actual path to your image file
const imageBuffer4 = fs.readFileSync(imagePath4);
const base64Image4= imageBuffer4.toString("base64");

const imagePath5 = "Img/Food/Salmon.png"; // Replace this with the actual path to your image file
const imageBuffer5 = fs.readFileSync(imagePath5);
const base64Image5= imageBuffer5.toString("base64");

const imagePath6 = "Img/Food/Sausages.png"; // Replace this with the actual path to your image file
const imageBuffer6 = fs.readFileSync(imagePath6);
const base64Image6= imageBuffer6.toString("base64");

const imagePath7 = "Img/Food/Whole Chicken.png"; // Replace this with the actual path to your image file
const imageBuffer7 = fs.readFileSync(imagePath7);
const base64Image7= imageBuffer7.toString("base64");

const imagePath8 = "Img/Food/Bananas.png"; // Replace this with the actual path to your image file
const imageBuffer8 = fs.readFileSync(imagePath8);
const base64Image8= imageBuffer8.toString("base64");

const imagePath9 = "Img/Food/Lemons.png"; // Replace this with the actual path to your image file
const imageBuffer9 = fs.readFileSync(imagePath9);
const base64Image9 = imageBuffer9.toString("base64");

const imagePath10 = "Img/Food/Limes.png"; // Replace this with the actual path to your image file
const imageBuffer10 = fs.readFileSync(imagePath10);
const base64Image10 = imageBuffer10.toString("base64");

const imagePath11 = "Img/Food/Oranges.png"; // Replace this with the actual path to your image file
const imageBuffer11 = fs.readFileSync(imagePath11);
const base64Image11 = imageBuffer11.toString("base64");

const imagePath12 = "Img/Food/Pineapple.png"; // Replace this with the actual path to your image file
const imageBuffer12 = fs.readFileSync(imagePath12);
const base64Image12 = imageBuffer12.toString("base64");

const imagePath13 = "Img/Food/Red Apples.png"; // Replace this with the actual path to your image file
const imageBuffer13 = fs.readFileSync(imagePath13);
const base64Image13 = imageBuffer13.toString("base64");

const imagePath14 = "Img/Food/Green Apples.png"; // Replace this with the actual path to your image file
const imageBuffer14 = fs.readFileSync(imagePath14);
const base64Image14 = imageBuffer14.toString("base64");

const imagePath15 = "Img/Food/Stawberries.png"; // Replace this with the actual path to your image file
const imageBuffer15 = fs.readFileSync(imagePath15);
const base64Image15 = imageBuffer15.toString("base64");

const imagePath16 = "Img/Food/Leeks.png"; // Replace this with the actual path to your image file
const imageBuffer16 = fs.readFileSync(imagePath16);
const base64Image16 = imageBuffer16.toString("base64");

const imagePath17 = "Img/Food/Carrots.png"; // Replace this with the actual path to your image file
const imageBuffer17 = fs.readFileSync(imagePath17);
const base64Image17 = imageBuffer17.toString("base64");

const imagePath18 = "Img/Food/Cauliflower.png"; // Replace this with the actual path to your image file
const imageBuffer18 = fs.readFileSync(imagePath18);
const base64Image18 = imageBuffer18.toString("base64");

const imagePath19 = "Img/Food/Sea Bream.png"; // Replace this with the actual path to your image file
const imageBuffer19 = fs.readFileSync(imagePath19);
const base64Image19 = imageBuffer19.toString("base64");

const imagePath20 = "Img/Food/Cod Fillets.png"; // Replace this with the actual path to your image file
const imageBuffer20= fs.readFileSync(imagePath20);
const base64Image20 = imageBuffer20.toString("base64");

const imagePath21 = "Img/Food/Whole Cod.png"; // Replace this with the actual path to your image file
const imageBuffer21= fs.readFileSync(imagePath21);
const base64Image21 = imageBuffer21.toString("base64");

const imagePath22 = "Img/Food/Smoked Haddock.png"; // Replace this with the actual path to your image file
const imageBuffer22= fs.readFileSync(imagePath22);
const base64Image22 = imageBuffer22.toString("base64");

const imagePath23 = "Img/Food/Cabbage.png"; // Replace this with the actual path to your image file
const imageBuffer23= fs.readFileSync(imagePath23);
const base64Image23 = imageBuffer23.toString("base64");

const imagePath24 = "Img/Food/New Potatoes.png"; // Replace this with the actual path to your image file
const imageBuffer24= fs.readFileSync(imagePath24);
const base64Image24 = imageBuffer24.toString("base64");

const imagePath25 = "Img/Food/Beefsteak tomato.png"; // Replace this with the actual path to your image file
const imageBuffer25= fs.readFileSync(imagePath25);
const base64Image25 = imageBuffer25.toString("base64");

const imagePath26 = "Img/Food/Red Cabbage.png"; // Replace this with the actual path to your image file
const imageBuffer26= fs.readFileSync(imagePath26);
const base64Image26 = imageBuffer26.toString("base64");

const imagePath27 = "Img/Food/Red Onion.png"; // Replace this with the actual path to your image file
const imageBuffer27= fs.readFileSync(imagePath27);
const base64Image27 = imageBuffer27.toString("base64");



let doc = [
  { ID: 1, title: "Beef Burgers", price: 3.99, image: base64Image, stock: 20, Description: `Succulent beef, simply seasoned with sea salt and black pepper. Gluten free.
  Tender and succulent beef seasoned with salt and black pepper1`, orderQty: 0, type: "meat"},
  { ID: 2, title: "Beef Fillet", price: 10, image: base64Image1, stock: 0, Description: `Beef fillet steak. 
  Every Tesco steak is 21 day matured for extra flavour chosen for melt in the mouth tenderness`, orderQty: 0, type: "meat"},
  { ID: 3, title: "Beef Mince", price: 5, image: base64Image2, stock:20, Description: `Lean beef steak mince 5% fat.
  Typical percentage fat content under 5%. Typical percentage collagen/ meat protein ratio under 12%. From Trusted Farms. We work in partnership with trusted farmers to ensure high welfare standards from farm to fork, to deliver great quality beef.
  Leaner selected cuts, finely ground for tenderness`, orderQty: 0, type: "meat"},
  { ID: 4, title: "Chicken Breast", price: 6.95, image: base64Image3, stock: 20, Description: `Fresh Class A skinless chicken breast fillets. Quality and welfare are at the heart of what we do.
  Our Welfare Approved Fed on a wholegrain diet for a succulent texture`, orderQty: 0, type: "meat"},
  { ID: 5, title: "Peeled Prawns", price: 8, image: base64Image4, stock: 0, Description: `Cooked and peeled king prawns (Litopenaeus vannamei).
  Responsibly sourcing our seafood is important to us, which is why our fish experts work with responsibly managed farms and fisheries to continually improve their high standards of quality, welfare and sustainability.
  Ready to Eat Responsibly Sourced`, orderQty: 0, type: "fish"}, 
  { ID: 6, title: "Salmon", price: 7.49, image: base64Image5, stock: 0, Description: `Boneless skin-on salmon (Salmo salar) side.
  Farmed in waters off the coast of Norway or Scotland. A versatile fish prepared with the skin on for ease of cooking and to give a fuller flavour. Responsibly sourcing our seafood is important to us which is why our fish experts work with responsibly managed farms and fisheries to continually improve their high standards of quality, welfare and sustainability.`, orderQty: 0, type: "fish"},
  { ID: 7, title: "Sausages", price: 3.29, image: base64Image6, stock: 0, Description: `Pork sausages with seasoning.
  Our sausages are made for us by a family run business who've taken pride in making sausages for more than 200 years. They are all made with 100% British pork which is hand trimmed by expertly trained butchers. The sausages are then seasoned and other carefully selected ingredients are added to enhance the rich, succulent flavour.`, orderQty: 0, type: "meat"},
  { ID: 8, title: "Whole Chicken", price: 5.55, image: base64Image7, stock: 0, Description: `Fresh Class A whole chicken without giblets.
  From Trusted Farms Our range of whole chickens are perfect for a succulent roast dinner, and midweek meals made from tasty leftovers. Use lean chicken breasts in a stir fry or salad and cook up tasty thighs and drumsticks in casseroles, on the barbecue, or in a curry.`, orderQty: 0, type: "meat"},   
  { ID: 9, title: "Bananas", price: 0.15, image: base64Image8, stock: 20, Description: `Responsibly Grown. Hand picked and gently ripened with a sweet flavour.`, orderQty: 0, type: "fruit"},
  { ID: 10, title: "Lemons", price: 0.45, image: base64Image9, stock: 20, Description: `Hand picked Grown for their sharp, zingy taste, ideal for cooking or drinks.`, orderQty: 0, type: "fruit"},
  { ID: 11, title: "Limes", price: 0.42, image: base64Image10, stock: 0, Description: `Hand picked Grown for their sharp, zingy taste, ideal for cooking or drinks.`, orderQty: 0, type: "fruit"}, 
  { ID: 12, title: "Oranges", price: 0.37, image: base64Image11, stock: 20, Description: `Sweet & Juicy and ready to eat`, orderQty: 0, type: "fruit"},
  { ID: 13, title: "Pineapple", price: 1.29, image: base64Image12, stock: 0, Description: `Harvested by hand Grown in tropical climates for their golden colour and sweet flavour`, orderQty: 0, type: "fruit"},
  { ID: 14, title: "Red Apples", price: 0.34, image: base64Image13, stock: 20, Description: `Responsibly Grown. Hand picked and gently ripened with a sweet flavour.`, orderQty: 0, type: "fruit"},
  { ID: 15, title: "Green Apples", price: 0.37, image: base64Image14, stock: 20, Description: `Responsibly Grown. Hand picked and gently ripened with a sweet flavour.`, orderQty: 0, type: "fruit"}, 
  { ID: 16, title: "Strawberries", price: 2.29, image: base64Image15, stock: 20, Description: `Delicately hand picked. Carefully selected when ripe for their sweet, juicy flavour.`, orderQty: 0, type: "fruit"},
  { ID: 17, title: "Leeks", price: 0.67, image: base64Image16, stock: 20, Description: `Locally grown at farmer Andy's`, orderQty: 0, type: "vegetable"},
  { ID: 18, title: "Carrots", price: 0.32, image: base64Image17, stock: 20, Description: `Locally grown at farmer Andy's`, orderQty: 0, type: "vegetable"},
  { ID: 19, title: "Cauliflower", price: 0.89, image: base64Image18, stock: 0, Description: `Locally grown`, orderQty: 0, type: "vegetable"},
  { ID: 20, title: "Sea Bream", price: 8.89, image: base64Image19, stock: 17, Description: `These sea bream fillets have a clean, delicate flavour and dense, juicy flesh. Pan-fried,…they are delicious enjoyed with new potatoes, or steam with ginger and spring onions and. serve with stir-fried pak choi.`, orderQty: 0, type: "fish"},
  { ID: 21, title: "Cod Fillets", price: 5.50, image: base64Image20, stock: 14, Description: `2 Defrosted skinless and boneless cod fillets.
  Line caught fish from well managed and responsible fisheries`, orderQty: 0, type: "fish"},
  { ID: 22, title: "Whole Cod", price: 12.99, image: base64Image21, stock: 8, Description: `This prime whole cod is chunky and succulent with a delicate flavour. It's boneless, skinless and easy to oven-bake`, orderQty: 0, type: "fish"},
  { ID: 23, title: "Smoked Haddock", price: 7.99, image: base64Image22, stock: 15, Description: `Defrosted, dyed, smoked skinless and boneless haddock fillets.  Line caught fish from well managed and responsible fisheries`, orderQty: 0, type: "fish"},
  { ID: 24, title: "Green Cabbage", price: 0.49, image: base64Image23, stock: 7, Description: `Mild in flavour and slightly earthy. Our organic pointed cabbage comes from dedicated farmers who work hand-in-hand with nature. They grow vegetables that are as good for the planet as your plate. Delicious in slaws, roasted or sauteed.`, orderQty: 0, type: "vegetable"},
  { ID: 25, title: "New Potatoes", price: 0.12, image: base64Image24, stock: 0, Description: `Perfect cold or hot Delicious in a salad or roasted.`, orderQty: 0, type: "vegetable"},
  { ID: 26, title: "Beefsteak tomato", price: 0.87, image: base64Image25, stock: 12, Description: `Intensely red beef tomato has a balanced acidity with a hint of sweetness and slight aroma, being tender yet crisp. Best when sliced or chopped in salads and sandwiches to give added richness.`, orderQty: 0, type: "vegetable"},
  { ID: 27, title: "Red Cabbage", price: 0.81, image: base64Image26, stock: 4, Description: `Sweet and colourful. Our organic cabbage comes from dedicated farmers who work hand-in-hand with nature. They grow vegetables that are as good for the planet as your plate. Braise red cabbage or shred thinly into slaws...`, orderQty: 0, type: "vegetable"},
  { ID: 28, title: "Red Onion", price: 0.34, image: base64Image27, stock: 7, Description: `SSweet and firm. ……Our organic onions come from dedicated farmers who work hand-in-hand with nature to grow vegetables that are as good for the planet as your plate. `, orderQty: 0, type: "vegetable"}
];

db1.remove({}, { multi: true }, function (err, newDocs) {
  if (err) {
    console.error('Error clearing the database:', err);
  } else {
    console.log('Doc - Database clearing completed:', newDocs);
  }
  
});
db1.insert(doc, function (err, newDocs) {
  if (err) {
    console.error('Error creating the database:', err);
  } else {
    console.log('Doc - Database creation completed:');
  }

});

const databaseDeliverySlots = new Datastore("databaseDeliverySlots.db");
databaseDeliverySlots.loadDatabase();
db2 = databaseDeliverySlots;

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Function to get the next day
function getNextDay(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + days);
  return nextDate;
}


let today = new Date(); // Get the current date
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let schedule = [
  {
    day: daysOfWeek[today.getDay()],
    date: formatDate(today), // Format the date as DD/MM
    slots: [
      { id: 'slot0', time: '8:00 AM - 10:00 AM', status: 'unavailable', price: 1.00 },
      { id: 'slot1', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot2', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot3', time: '2.00 PM - 4:00 PM', status: 'unavailable', price: 2.00 },
      { id: 'slot4', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.50 },
      { id: 'slot5', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4.00 },
      // Add more slots as needed
    ]
  },
  // Calculate the dates for the next days
  {
    day: daysOfWeek[(today.getDay() + 1) % 7],
    date: formatDate(getNextDay(today, 1)),
    slots: [
    { id: 'slot6', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1.00 },
      { id: 'slot7', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot8', time: '12:00 PM - 2:00 PM', status: 'unavailable', price: 1.50 },
      { id: 'slot9', time: '2.00 PM - 4:00 PM', status: 'unavailable', price: 2.00 },
      { id: 'slot10', time: '4:00 PM - 6:00 PM', status: 'unavailable', price: 3.50 },
      { id: 'slot11', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4.00 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 2) % 7],
    date: formatDate(getNextDay(today, 2)),
    slots: [
    { id: 'slot12', time: '8:00 AM - 10:00 AM', status: 'unavailable', price: 1.00 },
      { id: 'slot13', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot14', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot15', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2.00 },
      { id: 'slot16', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.50 },
      { id: 'slot17', time: '6.00 PM - 8:00 PM', status: 'unavailable', price: 4.00 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 3) % 7],
    date: formatDate(getNextDay(today, 3)),
    slots: [
    { id: 'slot18', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1.00 },
      { id: 'slot19', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot20', time: '12:00 PM - 2:00 PM', status: 'unavailable', price: 1.50 },
      { id: 'slot21', time: '2.00 PM - 4:00 PM', status: 'unavailable', price: 2.00 },
      { id: 'slot22', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.50 },
      { id: 'slot23', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4.00 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 4) % 7],
    date: formatDate(getNextDay(today, 4)),
    slots: [
    { id: 'slot24', time: '8:00 AM - 10:00 AM', status: 'unavailable', price: 1.00 },
      { id: 'slot25', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot26', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot27', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2.00 },
      { id: 'slot28', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.50 },
      { id: 'slot29', time: '6.00 PM - 8:00 PM', status: 'unavailable', price: 4.00 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 5) % 7],
    date: formatDate(getNextDay(today, 5)),
    slots: [
    { id: 'slot30', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1.00 },
      { id: 'slot31', time: '10:00 AM - 12:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot32', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot33', time: '2.00 PM - 4:00 PM', status: 'not booked', price: 2.00 },
      { id: 'slot34', time: '4:00 PM - 6:00 PM', status: 'unavailable', price: 3.50 },
      { id: 'slot35', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4.00 },
    ]
  },
  {
    day: daysOfWeek[(today.getDay() + 6) % 7],
    date: formatDate(getNextDay(today, 6)),
    slots: [
    { id: 'slot36', time: '8:00 AM - 10:00 AM', status: 'not booked', price: 1.00 },
      { id: 'slot37', time: '10:00 AM - 12:00 PM', status: 'unavailable', price: 1.50 },
      { id: 'slot38', time: '12:00 PM - 2:00 PM', status: 'not booked', price: 1.50 },
      { id: 'slot39', time: '2.00 PM - 4:00 PM', status: 'unavailable', price: 2.00 },
      { id: 'slot40', time: '4:00 PM - 6:00 PM', status: 'not booked', price: 3.50 },
      { id: 'slot41', time: '6.00 PM - 8:00 PM', status: 'not booked', price: 4.00 },
    ]
  },
  
];

db2.remove({}, { multi: true }, function (err, newDocs) {
  if (err) {
    console.error('Error clearing the database:', err);
  } else {
    console.log('Schedule - Database clearing completed:', newDocs);
  }
  
});
db2.insert(schedule, function (err, newDocs) {
  if (err) {
    console.error('Error creating the database:', err);
  } else {
    console.log('Schedule - Database creation completed:');
  }

});

const databasedicountCodes = new Datastore("databasedicountCodes.db");
databasedicountCodes.loadDatabase();
db3 = databasedicountCodes;

let discCode = [
  { ID: 1, code: "RecipeRealm10", discPercent: 10},
  { ID: 2, code: "RecipeRealm20", discPercent: 20},
  { ID: 3, code: "RecipeRealm30", discPercent: 30},
  { ID: 4, code: "50", discPercent: 50},

]

db3.remove({}, { multi: true }, function (err, newDocs) {
  if (err) {
    console.error('Error clearing the database:', err);
  } else {
    console.log('DiscCode - Database clearing completed:', newDocs);
  }
})

db3.insert(discCode, function (err, discCode) {
  if (err) {
    console.error('Error creating the database:', err);
  } else {
    console.log('DiscCode - Database creation completed:');
  }

});

// Retrieve schedule data from the database
app.get("/api/getDeliverySlotsFromDB", (req, res) => {
  db2.find({}, function (err, docs) {
    if (err) {
      console.error('Error retrieving schedule from the database:', err);
    } else {
      docs.sort((a, b) => {
        const dateA = convertToDateObject(a.date);
        const dateB = convertToDateObject(b.date);
        return dateA - dateB;
      });
      console.log('Retrieved and sorted schedule data from the database:');
      res.json(docs)
    }
});
})

function convertToDateObject(dateString) {
  const [day, month, year] = dateString.split('/');
  return new Date(`${month}/${day}/${year}`);
}

app.get("/api/getItemsFromDBFirstBuild", (req, res) => {
  db1.find({}).sort({ title: 1 }).exec((err, items) => {
    if (err) {
      console.error('getItemsFromDBFirstBuild:', err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('getItemsFromDBFirstBuild: Success');
      res.json(items);
    }
  });
});

app.post('/api/getItemsFromDB', (req, res) => {
  const type = req.body.type;
  console.log({type});

  db1.find({type: type}, (err, docs) => {
    if(err) {
      console.error('getItemsFromDB: ', err);
      return res.status(500).json({error: 'Internal Server Error'});
    }

    if(!docs || docs.length === 0) {
      return res.status(404).json({error: 'No documents found'});  
    }
    console.log('Items filtered by type (getItemsFromDB): ', type);
    res.json(docs);
  });
});

app.post('/api/POSTUpdateDBStockNumbers', (request, response) => { 
  const data = request.body
  data.forEach((item) => {
    db1.update({ title: item.title}, { $inc: { stock: -item.quantity } }, {}, (err, numAffected, upsert) => {
      if (err) {
        console.error('POSTUpdateDBStockNumbers:', err);
      } else {
        console.log('POSTUpdateDBStockNumbers: Success');
      }
    });
  })
  response.json({
      status: "success",
  })
})

app.post('/api/POSTUpdateDBOrderQtyWhenDeleted', (request, response) => { 
  const title = request.body.title
  console.log("title",title);
  db1.update(
    { title : title },
    { $set: { orderQty: 0 } },
    {},
    (err, numAffected, upsert) => {
      if (err) {
        console.error('POSTUpdateDBOrderQtyWhenDeleted:', err);
        response.status(500).json({ status: 'error', message: 'Internal Server Error' });
      } else {
        console.log('POSTUpdateDBOrderQtyWhenDeleted: Success');
        response.json({
          status: 'success',
        });
      }
    }
  );
});

app.post('/apigetProductInfo', (request, response) => {
  const  ID  = request.body.ID
  console.log("Received ID to find:", ID)
  db1.find({ ID: ID}, function (err, docs) {
    if (err) {
      console.error('apigetProductInfo:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('apigetProductInfo: Success');
      response.json(docs);
    }
  });
});

app.post('/api/POSTUpdateCurrentOrderQTY', (request, response) => { 
  const ID = request.body.ID
  const numofItems = request.body.numOfItems
  console.log(ID, numofItems);
  db1.update(
    { ID: ID },
    { $set: { orderQty: numofItems } },
    {},
    (err) => {
      if (err) {
        console.error('POSTUpdateCurrentOrderQTY:', err);
        response.status(500).json({ status: 'error', message: 'Internal Server Error' });
      } else {
        console.log('POSTUpdateCurrentOrderQTY: Success');
        response.json({
          status: 'success',
        });
      }
    }
  );
});
 
app.post('/api/updateOrderQtyToZero', (req, res) => {
  const updateOptions = { multi: true };
  const updateQuery = { $set: { orderQty: 0 } };

  db1.update({}, updateQuery, updateOptions, (err, numAffected) => {
    if (err) {
      console.error('updateOrderQtyToZero:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('updateOrderQtyToZero: Success');
      res.json({ status: 'success', numAffected: numAffected });
    }
  });
});    

app.post('/api/GETTitleID', (request, response) => {
  const title = request.body.title;

  console.log("Received title to find:", title);

  db1.find({ title: title }, function (err, docs) {
    if (err) {
      console.error('GETTitleID:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('GETTitleID: Success');
      response.json(docs);
    }
  });
});

app.post('/api/POSTSendCustomerEmail', (request, response) => { 
  const data = request.body
  //console.log(data);
  sendEmail(data)
  console.log(data);
  response.json({
      status: "success",
  })
})

app.post('/api/POSTfinalPriceofOrder', (request, response) => {
  const data = request.body.finalPrice; 
  const deliverySlotInfo = request.body.deliverySlotInfo
  const deliverySlotDay = request.body.deliverySlotDay
  const deliverySlotTime = request.body.deliverySlotTime
  const deliveryPrice = request.body.deliveryPrice
  const deliveryDate  = request.body.deliveryDate
  const savedAddress = request.body.savedAddress

  finalPriceofOrederServerSide = data
  deliverySlotInfoServerSide = deliverySlotInfo
  deliverySlotDayServerSide = deliverySlotDay
  deliverySlotTimeServerSide = deliverySlotTime
  deliveryPriceServerSide = deliveryPrice
  deliveryDateServerSide = deliveryDate
  savedAddressServerSide = savedAddress
  console.log(savedAddressServerSide);

  response.json({
      status: "success",
  });
});

app.post('/api/POSTCheckDiscountCodeAPI', (request, response) => { 
  const discountCode = request.body.discountCode
  console.log(discountCode);

  db3.findOne({ code: discountCode }, function (err, discountCode) {
    if (err) {
      console.error('POSTCheckDiscountCodeAPI:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      if (!discountCode){
console.log("null");
response.json(null);
      } else {
        console.log('Found code', discountCode.discPercent);
        response.json(discountCode.discPercent);
      }
    }
  });
})

app.post('/api/POSTFindSearchItems', (request, response) => {
  const title = request.body.title;
  console.log("Received title to find:", title);

  const regex = new RegExp(title, "i");
  db1.find({ title: { $regex: regex } }, function (err, docs) {
    if (err) {
      console.error('POSTFindSearchItems:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('POSTFindSearchItems: Success');
      response.json(docs);
    }
  });
});

app.post('/api/getItemsFromDBAndFilter', (request, response) => {
  const type = request.body.type;
  const search = request.body.filtervalue;

  db1.find({type: type }).sort({ price: search }).exec((err, items) => {
    if (err) {
      console.error('getItemsFromDBAndFilter:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('getItemsFromDBAndFilter: Success');
      response.json(items);
    }
  });
});

app.post('/api/getAllItemsFromDBAndFilter', (request, response) => {
  const search = request.body.filtervalue;

  db1.find({}).sort({ price: search }).exec((err, items) => {
    if (err) {
      console.error('getAllItemsFromDBAndFilter:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('getAllItemsFromDBAndFilter: Success');
      response.json(items);
    }
  });
});

app.post('/api/getSearchItemsFromDBAndFilter', (request, response) => {
  const title = request.body.title;
  const search = request.body.filtervalue;
  const regex = new RegExp(title, "i");

  db1.find({ title: { $regex: regex }  }).sort({ price: search }).exec((err, items) => {
    if (err) {
      console.error('Error fetching documents (getSearchItemsFromDBAndFilter):', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('getSearchItemsFromDBAndFilter: Success');
      response.json(items);
    }
  });
});

// Retrieve all coupons from the database
app.post('/api/POSTAllDiscountCodeAPI', (request, response) => {
  db3.find({}, function (err, codes) {
    if (err) {
      console.error('Error fetching dicount codes (POSTAllDiscountCodeAPI):', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('POSTAllDiscountCodeAPI: Success');
      response.json(codes);
    }
});
})

// Delete discont code 
app.post('/api/POSTdeleteDiscountCodeAPI', (request, response) => {
  const ID = request.body.ID
console.log({ID});
  db3.remove({ ID: ID}, function (err, codes) {
    if (err) {
      console.error('Error fetching dicount codes (POSTdeleteDiscountCodeAPI):', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      db3.find({}, function (err, codes) {
        if (err) {
          console.error('Error fetching dicount codes (POSTdeleteDiscountCodeAPI):', err);
          response.status(500).json({ error: "Internal Server Error" });
        } else {
          console.log('POSTdeleteDiscountCodeAPI: Success');
          console.log(codes);
          response.json(codes);
        }
    });
    }
});
})

// Delete, then update discont code 
app.post('/api/POSTupdateDiscountCodeAPI', (request, response) => {
  const ID = request.body.ID;
  const updatedCode = request.body.updatedCode;
  const discPercent = request.body.discPercent;

  let newCode = [
    { ID: ID, code: updatedCode, discPercent: discPercent }
  ];
  console.log({newCode});

  db3.remove({ ID: ID }, function (err, codes) {
    if (err) {
      console.error('Error removing code (POSTupdateDiscountCodeAPI):', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      db3.insert(newCode, function (err, discCode) {
        if (err) {
          console.error('Error inserting new code (POSTupdateDiscountCodeAPI):', err);
          response.status(500).json({ error: "Internal Server Error" });
        } else {
          db3.find({}, function (err, codes) {
            if (err) {
              console.error('Error fetching discount codes (POSTupdateDiscountCodeAPI):', err);
              response.status(500).json({ error: "Internal Server Error" });
            } else {
              console.log('POSTupdateDiscountCodeAPI: Success');
              response.json(codes);
            }
          });
        }
      });
    }
  });
});

app.post('/POSTAddDiscountCodeAPI', (request, response) => {
const ID = request.body.ID;
const code = request.body.code;
const discPercent = request.body.discPercent;

let newCode = [{ ID: ID, code: code, discPercent: discPercent }];
console.log({ newCode });

db3.insert(newCode, function (err, codes) {
  if (err) {
    console.error('Error fetching discount codes (POSTAddDiscountCodeAPI):', err);
    response.status(500).json({ error: "Internal Server Error" });
  } else {
    console.log('POSTAddDiscountCodeAPI: Success');
    // response.json(codes);
  }
});
});

app.post('/api/POSTAddDiscountCodeAPI', (request, response) => {

  const ID = request.body.ID;
  const code = request.body.code;
  const discPercent = request.body.discPercent;

  let newCode = [
    { ID:ID, code: code, discPercent: discPercent }
  ];
console.log({newCode});
  db3.insert(newCode, function (err, codes) {
    if (err) {
      console.error('Error fetching dicount codes (POSTAddDiscountCodeAPI):', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('POSTAddDiscountCodeAPI: Success');
      //response.json(codes);
    }
});
})

app.post('/api/POSTgenerateStockListAPI', (request, response) => {

  const type = request.body.type;

console.log({type});
db1.find({ type: type }, function (err, stock) {
    if (err) {
      console.error('Error fetching dicount codes (POSTgenerateStockListAPI):', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('POSTgenerateStockListAPI: Success');
      response.json(stock);
    }
});
})

app.get("/api/generateAllStockListAPI", (req, response) => {
  db1.find({}).sort({ title: 1 }).exec((err, items) => {
    if (err) {
      console.error('generateAllStockListAPI:', err);
      response.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log('generateAllStockListAPI: Success');
      response.json(items);
    }
  });
});

app.post('/api/POSTupdateStockAmountAPI', (request, response) => { 
  const ID = request.body.ID
  const stock = request.body.stock
  db1.update(
    { ID: ID },
    { $set: { stock: stock } },
    {},
    (err) => {
      if (err) {
        console.error('POSTupdateStockAmountAPI:', err);
        response.status(500).json({ status: 'error', message: 'Internal Server Error' });
      } else {
        console.log('POSTupdateStockAmountAPI: Success');
        response.json({
          status: 'success',
        });
      }
    }
  );
});











