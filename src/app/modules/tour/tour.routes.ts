import express from "express";
import { TourController } from "./tour.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";


const router = express.Router();

router.post("/create-tour",auth(USER_ROLE.SUPER_ADMIN,USER_ROLE.ADMIN), TourController.createTour);
router.get("/", TourController.getAllTours);
router.get("/:id", TourController.getTour);
router.put("/:id",auth(USER_ROLE.SUPER_ADMIN,USER_ROLE.ADMIN), TourController.updateTour);
router.patch("/soft-delete/:id",auth(USER_ROLE.SUPER_ADMIN,USER_ROLE.ADMIN), TourController.softDeleteTour);
router.delete("/hard-delete/:id",auth(USER_ROLE.SUPER_ADMIN,USER_ROLE.ADMIN), TourController.hardDeleteTour);

export const TourRoutes = router;
