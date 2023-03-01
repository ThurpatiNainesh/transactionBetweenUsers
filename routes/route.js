const router = require("express").Router()
const{userCreation}=require("../controllers/usersController")
const{createTransaction}=require("../controllers/transactionController")

// customer
router.post("/users",userCreation)

// ORDER
router.post("/transaction",createTransaction);




module.exports = router