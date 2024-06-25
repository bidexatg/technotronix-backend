const Product = require("../models/product")
const {validateProduct} = require("../validator")

exports.createProduct = async (req, res)=>{
    const {error} = validateProduct(req.body)
    if (error) {
        res.json(error.details[0].message)
    } else{
        try {
            const product = new Product({
                category: req.body.category,
                name: req.body.name,
                img: req.file.path,
                price: req.body.price,
                featured: req.body.featured,
                topSelling: req.body.topSelling,
            })
    
            const productItem = await product.save()
            res.json(productItem)
        } catch (error) {
           console.log({message: error.message}); 
        }
    }
    
}

exports.getAllProduct = async (req, res)=>{
    try {
        let productItem = await Product.find().populate("category")
    res.json(productItem)
    } catch (error) {
        res.json({message: error})
    }
}

exports.getFeaturedProduct = async(req, res)=>{
    try {
        const featured = await Product.find({featured: true}).populate("category")
        res.json(featured)
    } catch (error) {
        res.json({message: error.message})
    }
}

exports.getTopSellingProduct = async(req, res)=>{
    try {
        const topSelling = await Product.find({topSelling: true}).populate("category")
        res.json(topSelling)
    } catch (error) {
        res.json({message: error.message})
    }
}

exports.getSingleProduct = async (req, res)=>{
    try {
        const productItem = await Product.findById(req.params.id)
    if (!productItem) {
        res.json("No Product Available")
    }

    res.json(productItem)
    } catch (error) {
        res.json({message: error})
    }
}

exports.updateProduct = async (req, res)=>{
    try {
        const productItem = await Product.findById(req.params.id)

    if (!productItem) {
        res.json("No Product Available")
    }

    const {error} = validateProduct(req.body)
    if (error) {
        res.json(error.details[0].message)
    }

    productItem.category = req.body.category,
    productItem.name = req.body.name,
    productItem.img = req.file.path,
    productItem.price = req.body.price,
    productItem.featured = req.body.featured,
    productItem.topSelling = req.body.topSelling

    const productUpdate = await productItem.save()
    res.json(productUpdate)
    } catch (error) {
        res.json({message: error.message})
    }
}