import productCreateMongo from './bo/product.create.mongo'

import ProductShema from './bo/product.schema.js'


export default (database) => {
    return {
        ...database,
        create: (product) => {
            console.log("[MONGO::create]")
            return productCreateMongo(product);
        },
        findAll: () => {      
            console.log("[MONGO::findAll]")    
            return   ProductShema.find({})
        },
        findOne: () => {},
        update: () => {},
        remove: () => {}
    }
}