const express = require("express")
const cartController = require("../controllers/cartController")
const {auth} = require("../middleware/auth")


const router = express.Router()

router.post("/addtocart", auth, cartController.addToCart)
router.get("/cart", auth, cartController.getCart)
router.post("/update-quantity", auth, cartController.updateQuantiy)
router.post("/remove-item", auth, cartController.removeItem)

module.exports = router