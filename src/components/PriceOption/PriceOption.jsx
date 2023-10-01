import React from 'react';

import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const{name,price,features}=option;
    return (
        <div className='bg-blue-400 rounded p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8 text-center'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            
            <button className='mt-12 bg-green-700 py-4 w-full font-bold hover:bg-green-950'>Buy Now</button>
        </div>
    );
};

export default PriceOption;