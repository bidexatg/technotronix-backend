const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String}
})

module.exports = mongoose.model("Category", categorySchema)