import IConfigDB from "./interfaces/IConfigDB";

export default function makeResetConfig ({ configurationDB } : IConfigDB ) {
    return function resetConfig({ configId } : { configId? : number }) {
        if (!configId) {
            // reset the default config
        }
    }
}