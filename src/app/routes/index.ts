import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { TourRoutes } from '../modules/tour/tour.routes';


const routes = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path:"/tour",
    route:TourRoutes
  },
  

];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;
