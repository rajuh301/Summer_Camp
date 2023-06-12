import React from 'react';

const ShowPopularSection = ({ cart }) => {
    console.log(cart)

    const { sport, image, price, category } = cart;


    return (


        <div className="card w-96 bg-base-100 shadow-xl font-semibold mx-auto my-5">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-72" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{sport}</h2>
                <p>${price}</p>
                <p>Total seat:{category}</p>
                <div className="card-actions">
                   
                </div>
            </div>
        </div>
    );
};

export default ShowPopularSection;