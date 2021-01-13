import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
const DUMMYPLACES = [
    {
    id:"u1",
    title:"Krishiv Aangan",
    description:"is a building located in juinagar Navi Mumbai",
    imageUrl: "https://jenmulligandesign.com/wp-content/uploads/2017/04/pexels-beach-tropical-scene-free-stock-photo.jpg",
    address: "sector-6, plot no-1A, sanpada sector-6",
    location: {
        lat: 19.0608624,
        long: 73.0153795
    },
    creatorId:"u1"
    },
    {
    id:"u2",
    title:"Krishiv Aangan",
    description:"is a building located in juinagar Navi Mumbai",
    imageUrl: "https://is1-2.housingcdn.com/4f2250e8/f35639e754fd1144524de46559189624/v0/fs/supreme_krishiv_aangan-sanpada-mumbai-supreme_universal.jpeg",
    address: "sector-6, plot no-1A, sanpada sector-6",
    location: {
        lat: 19.0608624,
        long: 73.0153795
    },
    creatorId:"u2"
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const User_Places = DUMMYPLACES.filter(place => place.creatorId === userId);
    return(
        <PlaceList items={User_Places} />
    )
}

export default UserPlaces;