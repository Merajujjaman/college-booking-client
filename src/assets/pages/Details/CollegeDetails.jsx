import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const [info, setInfo] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/college/${id}`)
        .then(data => setInfo(data.data))
    },[])
    console.log(info);
    return (
        <div>
            <h1>college details</h1>
        </div>
    );
};

export default CollegeDetails;