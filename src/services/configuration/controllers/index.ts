import { getConfig, resetConfig, removeConfig, updateConfig } from '../use_cases';
import makeGetConfigHandler from './get-config';

const getConfigHandler = makeGetConfigHandler({getConfig});
const resetConfigHandler = makeGetConfigHandler({resetConfig});

const configurationController = {
    getConfigHandler
}

export default configurationController;