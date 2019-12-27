import redis from "redis";
export default (url, adapter) => {
    let client;
    return {
        getClient() {
            return client;
        },
        connect() {
            return new Promise((resolve, reject) => {
                if (client) {
                    return resolve(client);
                }
                try {
                    console.log("[ REDIS::URL ]", url);
                    client = redis.createClient(url);
                    client.on("connect", function (error) {
                        console.log("[ REDIS::CONNECT ]");
                        resolve(client);
                    });
                    client.on("error", function (error) {
                        console.log("[ REDIS::ERROR ] ", error);
                        reject(error);
                    });
                } catch (error) {
                    console.log("[ REDIS::CATCH ] ", error);
                    return reject(error);
                }
            });
        },
        disconnect() {
            try {
                client.quit();
                client = null;
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        }
    };
};
