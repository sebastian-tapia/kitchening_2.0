const { readJSON } = require("../data")

module.exports = {
    index : (req,res) => {   
        const products = readJSON('products.json');
        const productsCarousel = products.filter(product => product.category === "Carnes")

        return res.render('index', {
            products,
            productsCarousel

        })
    },
    admin : (req,res)  => {

        const products = readJSON('products.json');
        const categories = readJSON('categories.json');
        return res.render('admin', {
            products,
            categories,
        })
    }
}