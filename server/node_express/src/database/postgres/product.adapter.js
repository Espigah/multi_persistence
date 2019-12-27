export default (database) => {
    return {
        ...database,
        create: (product) => {
            let { idProduct, barCode, name, description, quantity, category } = product;
            let query = `INSERT INTO product
            (id_product, bar_code, category, description, name, quantity) 
            VALUES(${idProduct}, ${barCode}, '${category}', '${description}', '${name}', ${quantity})
            `;
            console.log("[ POSTGRES::create ]", query)
            return database.getClient().one(query).then(()=>{
                return product;
            });
        },
        findAll: () => {
            return database.getClient().any('SELECT * FROM product p2');
        },
        findOne: () => { },
        update: () => { },
        remove: () => { }
    }
}
