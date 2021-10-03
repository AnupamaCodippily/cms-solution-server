import { Router } from "express";
const configRouter = Router();

configRouter.post("/fetch", (req, res) => {
  const configJSON = {};

  res.send(configJSON);
});

configRouter.post("/set", (req, res) => {
  res.sendStatus(403);
});

export default configRouter;
