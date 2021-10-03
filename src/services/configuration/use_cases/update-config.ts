import IConfigDB from "./interfaces/IConfigDB";

export default function makeUpdateConfig ({ configurationDB } : IConfigDB ) {
    return function updateConfig({ configId } : { configId? : number }) {
        if (!configId) {
            // reset the default config
        }
    }
}