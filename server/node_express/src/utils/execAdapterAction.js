import productFactory from '../database/productFactory';
import awaiting from './awaiting'

const exec = (name, func, ...args) => {
    let t1 = Date.now();
    console.log("[ exec ]", name, func.name, args)
    return func.apply(this, args)
        .then(data => {
            console.log("[ exec:completed ]", name, func.name, data)
            return {
                name: name,
                status: 200,
                timestamp: Date.now() - t1,
                data: data,
                success: true
            }
        })
        .catch(error => {
            console.log("[ exec:error ]", name, func.name, error)
            return {
                name: name,
                status: 500,
                timestamp: Date.now() - t1,
                data: error,
                success: false
            }
        });
}

const adapters = (func) => {
    console.log("[ adapters ]")
    return awaiting(
        productFactory().map((productAdapter) => {
            console.log("[ adapters::connect ]", productAdapter.adapter)
            return productAdapter.connect()
                .then(() => {
                    console.log("[ adapters::exec ]", productAdapter.adapter)
                    return func(productAdapter)
                })
                .catch((error) => {
                    console.log("[ adapters::exec:error ]", productAdapter.adapter)
                    return productAdapter.disconnect()
                        .then(() => {
                            console.log("[ adapters::disconnected ]", productAdapter.adapter)
                            return Promise.reject(error);
                        })
                })
                .then((data) => {
                    console.log("[ adapters::disconnect ]", productAdapter.adapter)
                    return productAdapter.disconnect()
                        .then(() => {
                            console.log("[ adapters::completed ]", productAdapter.adapter)
                            return data;
                        })
                })
                .then(data => {
                    return data
                })
                .catch(error => {
                    return {
                        ...error,
                        name: productAdapter.adapter,
                        status: 500,
                        data: error,
                        success: false
                    }
                });
        })
    )
}

export {
    exec,
    adapters,
}