import React from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/FormElement/Input';
import { useForm } from '../../shared/hooks/form';
import {Validator_require, VALIDATOR_MINLENGTH} from '../../shared/util/validators'
import Button from '../../shared/FormElement/Button';
import '../css/UserPlace.css';


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

const UpdatePlace = () => {
    const placeId = useParams().pid;    
    const identifiedPlace = DUMMYPLACES.find(p => p.id === placeId)
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: true
            }
        }, true)

    if(!identifiedPlace){
        return <div className="center">
            <h2>Place is not found!</h2>
        </div>
    }
    return <form className="place-form">
        <Input id="title" element="input" type="text" label="title" validators={[Validator_require()]} errorText="place enter valid input" onInput={inputHandler} value={formState.inputs.title.value} isValid={formState.inputs.title.isValid}/>
        <Input id="description" element="textarea" label="title" validators={[VALIDATOR_MINLENGTH(5)]} errorText="place enter valid description minlength 5" onInput={inputHandler} value={formState.inputs.description.value} isValid={formState.inputs.description.isValid} />
        <Button type="submit" disabled={!formState.isValid}>Update</Button>
    </form>
}

export default UpdatePlace;