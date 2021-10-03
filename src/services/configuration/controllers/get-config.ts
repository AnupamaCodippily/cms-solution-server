import IHTTPRequest from '../../interfaces/IHTTPRequest';

export default function makeGetConfigHandler({ getConfig }: any) {
  return async function getConfigHandler({
    httpRequest,
  }: {
    httpRequest: IHTTPRequest;
  }) {
    // to do -- need to escape invalid characters

    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const configuration = await getConfig({
        configId: httpRequest.query.params.id,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          configuration,
        },
      };
    } catch (exception) {
      return {
        headers,
        statusCode: 400,
        body: {
          error: exception.message,
        },
      };
    }
  };
}
