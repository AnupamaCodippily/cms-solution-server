interface IConfig {
  usersCount: number;
  isCurrentConfig: boolean;
  id: number;
  modifiedOn: Date;
  themeId: number;
  allowPlugins: boolean;
}
export default function buildMakeConfig({} = {}) {
  return function makeConfig({
    usersCount,
    isCurrentConfig,
    id,
    modifiedOn,
    themeId,
    allowPlugins,
  }: IConfig) {
    return Object.freeze({
      getUsersCount: () => usersCount,
      getIsCurrentConfig: () => isCurrentConfig,
      getId: () => id,
      getModifiedOn: () => modifiedOn,
      getThemeId: () => themeId,
      getAllowPlugins: () => allowPlugins,
    });
  };
}
