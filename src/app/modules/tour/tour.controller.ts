import AppError from "../../errors/appError";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TourServices } from "./tour.services";
import httpStatus from "http-status";

const createTour = catchAsync(async (req, res) => {
  const tour = await TourServices.createTourIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Tour created successfully",
    data: tour,
  });
});

const getAllTours = catchAsync(async (req, res) => {
  const tours = await TourServices.getAllTour();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tours fetched successfully",
    data: tours,
  });
});

const getTour = catchAsync(async (req, res) => {
      const id =  req.params.id;
    if(!id) {
      throw new AppError(httpStatus.NOT_FOUND,"id not found")
    }
  const tour = await TourServices.getTourById(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tour fetched successfully",
    data: tour,
  });
});

const updateTour = catchAsync(async (req, res) => {

    const id =  req.params.id;
    if(!id) {
      throw new AppError(httpStatus.NOT_FOUND,"id not found")
    }
  const tour = await TourServices.updateTourById(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tour updated successfully",
    data: tour,
  });
});

const softDeleteTour = catchAsync(async (req, res) => {
      const id =  req.params.id;
    if(!id) {
      throw new AppError(httpStatus.NOT_FOUND,"id not found")
    }
  const tour = await TourServices.softDeleteTourById(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tour soft deleted successfully",
    data: tour,
  });
});

const hardDeleteTour = catchAsync(async (req, res) => {
      const id =  req.params.id;
    if(!id) {
      throw new AppError(httpStatus.NOT_FOUND,"id not found")
    }
  const tour = await TourServices.hardDeleteTourById(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tour hard deleted successfully",
    data: tour,
  });
});

export const TourController = {
  createTour,
  getAllTours,
  getTour,
  updateTour,
  softDeleteTour,
  hardDeleteTour,
};
