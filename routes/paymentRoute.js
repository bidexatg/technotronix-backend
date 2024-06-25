const express = require("express")
const {auth} = require("../middleware/auth")
const paymentController = require("../controllers/paymentController")

const router = express.Router()

router.post("/api/payment/intiate", auth, paymentController.initialPayment)
router.post("/api/payment/verify", auth, paymentController.verifyPayment)

module.exports = router