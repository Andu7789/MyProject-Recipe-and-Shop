// Retrieve schedule data from the database
router.get("/api/getDeliverySlotsFromDB", (req, res) => {
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
  
  router.get("/api/getItemsFromDBFirstBuild", (req, res) => {
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
  
  router.post('/api/getItemsFromDB', (req, res) => {
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
  
  router.post('/api/POSTUpdateDBStockNumbers', (request, response) => { 
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
  
  router.post('/api/POSTUpdateDBOrderQtyWhenDeleted', (request, response) => { 
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
  
  router.post('/apigetProductInfo', (request, response) => {
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
  
  router.post('/api/POSTUpdateCurrentOrderQTY', (request, response) => { 
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
   
  router.post('/api/updateOrderQtyToZero', (req, res) => {
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
  
  router.post('/api/GETTitleID', (request, response) => {
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
  
  router.post('/api/POSTSendCustomerEmail', (request, response) => { 
    const data = request.body
    //console.log(data);
    sendEmail(data)
    response.json({
        status: "success",
    })
  })
  
  router.post('/api/POSTfinalPriceofOrder', (request, response) => {
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
  
  router.post('/api/POSTCheckDiscountCodeAPI', (request, response) => { 
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
  
  router.post('/api/POSTFindSearchItems', (request, response) => {
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
  
  router.post('/api/getItemsFromDBAndFilter', (request, response) => {
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
  
  router.post('/api/getAllItemsFromDBAndFilter', (request, response) => {
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
  
  router.post('/api/getSearchItemsFromDBAndFilter', (request, response) => {
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
  router.post('/api/POSTAllDiscountCodeAPI', (request, response) => {
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
  router.post('/api/POSTdeleteDiscountCodeAPI', (request, response) => {
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
  router.post('/api/POSTupdateDiscountCodeAPI', (request, response) => {
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

router.post('/POSTAddDiscountCodeAPI', (request, response) => {
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


