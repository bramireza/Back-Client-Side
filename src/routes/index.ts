import express, { Router } from "express";
import authRouter from "./auth.router";

const allRoutes = [["auth", authRouter]];

export const routes = (app: express.Application): void => {
  allRoutes.forEach(([path, controller]) => {
    app.use(`/${path}`, <Router>controller);
  });
};
