const argv = require("yargs").argv;
const path = require("path");

let envConfig = getFromEnv();

let configPath = argv.config || process.env.CONFIG || "./adapters.config.json";
console.log("[database.config] configPath", configPath);

let localConfigJson;
try {
  localConfigJson = require(configPath);
} catch (error) {
  localConfigJson =[];
}
  

const configsFromFile = localConfigJson.filter(config => config.enabled);

console.log("[database.config] configsFromFile", configsFromFile);

const configs = merge(envConfig, configsFromFile);

console.log("[database.config] configs", configs);

export default configs;



function getFromEnv() {
    const ENV_PREFIX = "DATABASE_URL_";
    return Object.keys(process.env)
      .filter(env => env.includes(ENV_PREFIX))
      .map(key => {
        const adapter = key.replace(ENV_PREFIX, "");
  
        return {
          url: process.env[key],
          adapter: adapter,
          enabled: true,
          from: "ENV"
        };
      });
  }
  
  function merge(configA, configB) {
    let config = JSON.parse(JSON.stringify(configA));
  
    const adapterList = config.map(data => data.adapter);
  
    for (let i = 0, max = configB.length; i < max; i++) {
      const element = configB[i];
      if (adapterList.includes(element.adapter)) {
        continue;
      }
  
      config.push(element);
    }
  
    return config;
  }
  