export default interface IConfigDB {
  configurationDB: {
    fetchConfiguration: () => Promise<void>;
    updateConfiguration: () => Promise<void>;
    resetConfiguration: () => Promise<void>;
    removeConfiguration: () => Promise<void>;
  };
}
