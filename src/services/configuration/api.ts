import { Router } from "express";
import configurationController from "./controllers";

const configRouter = Router();

const testFn = ((handler: any) => {
  return (req: any, res : any) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent')
      }
    }
    handler(httpRequest)
      .then((httpResponse : any) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }
        res.type('json')
        res.status(httpResponse.statusCode).send(httpResponse.body)
      })
      .catch((error : Error) => res.status(500).send({ error: 'An unkown error occurred.' }))
  }
})


configRouter.post("/fetch", (req, res) => {
  const configJSON = {};
  testFn(configurationController.getConfigHandler)
  res.send(configJSON);
});

configRouter.post("/set", (req, res) => {
  res.sendStatus(403);
});

export default configRouter;
