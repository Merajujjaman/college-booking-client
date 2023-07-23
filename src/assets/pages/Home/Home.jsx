import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner/Banner';
import axios from 'axios';
import HomeCollegeCard from '../../../components/Card/HomeCollegeCard';

const Home = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/colleges')
            .then(data => setColleges(data.data))
    }, [])
    // console.log(colleges);
    return (
        <div className='mx-2 md:mx-10'>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    colleges.slice(0, 3).map(college => <HomeCollegeCard
                        key={college?._id}
                        college={college}
                    ></HomeCollegeCard>)
                }
            </div>
        </div>
    );
};

export default Home;