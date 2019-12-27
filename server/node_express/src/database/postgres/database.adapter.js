import pgp from 'pg-promise';

let options = {
    error: function (error, e) {
        if (e.cn) {
            // A connection-related error;
            console.log("CN:", e.cn);
            console.log("EVENT:", error.message);
        }
    }
};

export default (url, adapter) => {
    let client;
    return {
        getClient() {
            return client;
        },
        connect: () => {
            if(client){
                return Promise.resolve(client)
            }
            try {
                console.log("[ POSTGRES::CONNECT ]", url);
                let database = pgp(options);
                client = database(url)
                return client.connect().then(()=>{
                    return client;
                });
            } catch (error) {
                console.log("[ POSTGRES::CATCH ] ", error);
                return Promise.reject(error);
            }
        },
        disconnect: () => {
            try {
                console.log("[ POSTGRES::disconnect ]");
                client = null;
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
}