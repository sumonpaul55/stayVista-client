/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useSearchParams } from 'react-router-dom';
import Headings from '../Shared/Headings';
import Loader from '../Shared/Loader';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false)
    const category = params.get("category")
    useEffect(() => {
        setLoading(true)
        fetch("/rooms.json")
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(items => items.category.toLowerCase() === category.toLowerCase())
                    setRooms(filtered)
                } else {
                    setRooms(data)
                }
            })
        setLoading(false)
    }, [category])
    // console.log(rooms)
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <>
            {
                rooms.length > 0 ?
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
                        {
                            rooms?.map((rooms, idx) => (
                                <Card rooms={rooms} key={idx}></Card>
                            ))
                        }
                    </div>
                    :
                    <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                        <Headings center={true} title={`There is no Room available in ${category}`} subtitle="Please Select another Category"></Headings >
                    </div>
            }
        </>
    );
};

export default Rooms;