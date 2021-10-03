import { Router } from "express";
import configRouter from "./configuration/api";

const services: any = {
    config : configRouter
}

export default services;