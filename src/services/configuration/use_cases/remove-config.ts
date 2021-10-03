import IConfigDB from "./interfaces/IConfigDB";

export default function makeRemoveConfig ({ configurationDB } : IConfigDB ) {
    return function removeConfig({ configId } : { configId? : number }) {
        if (!configId) {
            // cannot remove the default config
        } else {
            // to do
        }
    }
}