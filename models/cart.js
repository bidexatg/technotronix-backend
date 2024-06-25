const { ref, required } = require("joi")
const mongoose = require("mongoose")
const product = require("./product")

const cartSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}, 
    products: [{
        product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
        quantity: { type: Number, required: true, min: 1},
        amount: {type: Number, required: true}
    }]
})


module.exports = mongoose.model("Cart", cartSchema)