// use case
import IConfigDB from "./interfaces/IConfigDB";
import IGetConfigParams from "./interfaces/IGetConfigParams";

export default function makeGetConfig({ configurationDB }: IConfigDB) {
  return async function getConfig({ configId }: IGetConfigParams) {
    if (!configId) {
      // get default config
      const config = await configurationDB.fetchConfiguration();
      return config;
    }
  };
}
