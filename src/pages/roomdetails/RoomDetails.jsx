
import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Shared/Loader';

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState([])
    // const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false)
    // const category = params.get("category")

    useEffect(() => {
        setLoading(true)
        fetch("/rooms.json")
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room?._id === id)
                setRoom(singleRoom)
            })
        setLoading(false)
    }, [id])
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Container>
                <div>
                    <div className='flex flex-col gap-6'>
                        {/* header */}
                    </div>
                    <div>
                        {/* room info */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RoomDetails;