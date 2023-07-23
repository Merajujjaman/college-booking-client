import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllCollegeCard from '../../../components/Card/AllCollegeCard';

const Colleges = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/colleges')
            .then(data => setColleges(data.data))
    }, [])
    // console.log(college);
    return (
        <div className='mx-2 md:mx-10 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    colleges.map(college => <AllCollegeCard
                        key={college._id}
                        college={college}
                    ></AllCollegeCard>)
                }
            </div>
        </div>
    );
};

export default Colleges;