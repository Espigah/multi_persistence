export default (url, adapter) => {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;

    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function () {
        console.log('Conectado ao MongoDB.')
    });


    return {
        connect: () => {
            return mongoose.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                })
                .then(() => {
                    console.log("[ MONGO::CONNECT ]")
                    return Promise.resolve(mongoose);
                })
                .catch(error => {
                    console.log('[ MONGO::ERROR ] ', error);
                    return Promise.reject(error);
                });
        },
        disconnect: () => {
            if (!mongoose) {
                return
            }
            console.log("[ MONGO::DISCONNECT ]")
            return mongoose.disconnect();
        }
    }
}