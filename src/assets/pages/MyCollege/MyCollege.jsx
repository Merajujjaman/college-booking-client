import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DetailsCard from '../../../components/Card/DetailsCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import personImg from '../../image/placeholder-image-person-jpg.jpg'
import { AuthContext } from '../../../Providers/AuthProvider';

const MyCollege = () => {
    const [info, setInfo] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`https://college-booking-server-eight.vercel.app/addmission/${user?.email}`)
            .then(data => setInfo(data?.data))
    }, [])

    // console.log(info[0]);
    return (
        <div className='py-10 mx-2 md:mx-10'>

            <SectionTitle title={"My Admited College"}></SectionTitle>
            <div className='md:flex gap-20 justify-center items-center my-10'>
                <div>
                    {
                        user?.photoURL ? <img src={user?.photoURL} alt="image not found" className='w-40 rounded-full' />
                            :
                            <img src={personImg} alt="image not found" className='w-40 rounded-full' />
                    }

                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-2'>Name: {info.studentName}</h1>
                    <h3 className='mb-2 font-semibold'>Email: {info?.studentEmail}</h3>
                    <h3 className='mb-2 font-semibold'>Address: {info?.address}</h3>
                    <h3 className='mb-2 font-semibold'>Phone: {info?.phone}</h3>
                </div>
            </div>
            <DetailsCard info={info}></DetailsCard>
        </div>
    );
};

export default MyCollege;