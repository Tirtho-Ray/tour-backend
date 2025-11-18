import { TTour } from "./tour.interface";
import { Tour } from "./tour.model";

const createTourIntoDB = async (payload: TTour) => {
  const tour = await Tour.create(payload);
  return tour;
};

const getAllTour = async () => {
  const tours = await Tour.find({ isDeleted: false }); 
  return tours;
};

const getTourById = async (id: string) => {
  const tour = await Tour.findOne({ _id: id, isDeleted: false });
  return tour;
};

const updateTourById = async (id: string, payload: Partial<TTour>) => {
  const tour = await Tour.findOneAndUpdate(
    { _id: id, isDeleted: false },
    payload,
    { new: true }
  );
  return tour;
};

const softDeleteTourById = async (id: string) => {
  const tour = await Tour.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return tour;
};

const hardDeleteTourById = async (id: string) => {
  const tour = await Tour.findByIdAndDelete(id);
  return tour;
};

export const TourServices = {
  createTourIntoDB,
  getAllTour,
  getTourById,
  updateTourById,
  softDeleteTourById,
  hardDeleteTourById,
};
