import { Schema, model } from "mongoose";
import { TTour } from "./tour.interface";

const tourSchema = new Schema<TTour>(
  {
    // SEO
    slug: { type: String, required: true, unique: true },
    tags: { type: [String], default: [] },

    // Main part
    title: { type: String, required: true },
    description: { type: String, required: true },
    tour_duration: { type: String, required: true },
    tour_person_type: { 
      type: String, 
      enum: ['children', 'man', 'family', 'adult', 'women', 'couple'], 
      required: true 
    },
    tour_location: { type: String, required: true },
    media: {
      images: { type: [String], required: true },
      videos: { type: [String], default: [] },
      virtual_tour_url: { type: String }
    },

    // Money
    tour_price: { type: String, required: true },
    discount: { type: String },

    // Trip info
    trip_info: {
      accommodation: { type: String },
      arrival_city: { type: String },
      best_season: { type: String },
      departure_city: { type: String },
      guide: { type: String },
      language: { type: String },
      meals: { type: String },
      tour_availability: { type: String },
      transportation: { type: String },
      walking_hours: { type: String },
      wifi: { type: String },
      minimum_age: { type: String, required: true },
      maximum_age: { type: String, required: true },
      group_size: { type: String, required: true },
      destinations: { type: String, required: true },
    },

    trip_highlights: { type: [String], default: [] },

    // Itinerary
    itinerary: [
      {
        day: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true }
      }
    ],

    // Tour plan
    tour_plan: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true }
      }
    ],

    map: { type: String },

    // Safety
    safety: {
      covid_guidelines: { type: String },
      insurance_available: { type: Boolean },
      cancellation_policy: { type: String }
    },

    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    isDeleted:{
        type:Boolean,
        default:true
    }
  },
  { timestamps: true }
);

export const Tour = model<TTour>("Tour", tourSchema);
