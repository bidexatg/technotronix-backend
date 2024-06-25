const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", require: true},
    name: {type: String, require: true},
    img: {type: String, require: true},
    price: {type: Number, require: true},
    featured: {type: Boolean, default: false},
    topSelling: {type: Boolean, default: false},
    
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)