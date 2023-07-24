import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-[300px] md:min-h-[500px]" style={{ backgroundImage: 'url(https://caplinnews.fiu.edu/wp-content/uploads/2020/03/accomplishment-ceremony-education-graduation.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                        <p className="mb-5">Discover Your Path to Success Explore and Book Your Ideal College Today! Find the Perfect Match for Your Higher Education Journey with our Easy-to-Use College Booking Website. Start Your Adventure Now!</p>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;