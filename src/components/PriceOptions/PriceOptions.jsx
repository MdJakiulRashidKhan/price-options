import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gyms= [
        {
            "id": 1,
            "name": "FitZone Gym",
            "location": "123 Fitness Street, CityVille, State",
            "features": [
                "Cardio Machines",
                "Weightlifting Equipment",
                "Group Classes",
                "Personal Training",
                "Locker Rooms"
            ],
            "price": "$70"
        },
        {
            "id": 2,
            "name": "PowerGym",
            "location": "456 Workout Avenue, Townsville, State",
            "features": [
                "Cardio Machines",
                "CrossFit Area",
                "Yoga Classes",
                "Spinning Classes",
                "Nutrition Counseling",
                "Swimming Pool"
            ],
            "price": "$80"
        },
        {
            "id": 3,
            "name": "FlexFit Gym",
            "location": "789 Health Lane, Villagetown, State",
            "features": [
                "Cardio Machines",
                "Strength Training",
                "Pilates Classes",
            ],
            "price": "$75"
        }
    ];
    return (
        <div>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                gyms.map(option =><PriceOption key={option.id} option={option}></PriceOption>) 
                }
            </div>
        </div>
    );
};

export default PriceOptions;