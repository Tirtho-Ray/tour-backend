import mongoose from "mongoose";


export type TTrip_info ={
    accommodation?:string;
    arrival_city?:string;
    best_season?:string;
    departure_city?:string;
    guide?:string;
    language?:string;
    meals?:string;
    tour_availability?:string;
    transportation?:string;
    walking_hours?:string;
    wifi?:string;
    minimum_age:string;
    maximum_age:string;
    group_size:string;
    destinations:string

}
export type TTrip_itinerary ={
    day:string;
    name:string;
    description:string;
}
export type TTour_plan ={
    question:string;
    answer:string;
}
export type TMedia= {
    images: string[];
    videos?: string[];
    virtual_tour_url?: string;
}

export type TTour ={

    //seo
    slug:string;
    tags?: string[];

    //main part 
    title:string;
    description:string;
    tour_duration:string;
    tour_person_type:'children'|'man'|'family'|'adult'|'women'|'couple';
    tour_location:string;
    media:TMedia;

    //money
    tour_price:string;
    discount?:string;

    trip_info?:TTrip_info;
    trip_highlights?:string[];

    itinerary?:TTrip_itinerary[];

    tour_plan?:TTour_plan[];

    map?:string;

    safety?: {
        covid_guidelines?: string;
        insurance_available?: boolean;
        cancellation_policy?: string;
    };

     comments?: mongoose.ObjectId[];

     isDeleted:boolean;

}