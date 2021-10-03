import configurationDB from "../data_access";

import makeGetConfig from "./get-config";
import makeRemoveConfig from "./remove-config";
import makeResetConfig from "./reset-config";
import makeUpdateConfig from "./update-config";

// const configurationDB = makeConfigTable();

const getConfig = makeGetConfig({ configurationDB });
const updateConfig = makeUpdateConfig({ configurationDB });
const resetConfig = makeResetConfig({ configurationDB });
const removeConfig = makeRemoveConfig({ configurationDB });

const configService = Object.freeze({
  getConfig,
  updateConfig,
  resetConfig,
  removeConfig,
});

export default configService;
export {getConfig, updateConfig, resetConfig, removeConfig}
