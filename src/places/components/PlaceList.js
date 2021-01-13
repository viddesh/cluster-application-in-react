import React from 'react';

import Card from '../../shared/UIElements/Card';
import PlaceItem from './PlaceItem';

import '../css/UserPlace.css'

const PlaceList = props => {
    if (props.items.length === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No places found please add places</h2>
                <button>ADD</button>
            </Card>
        </div>
    }

    return <ul className="place-list">
        {props.items.map(place => <PlaceItem key={place.id} id={place.id} src={place.imageUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creatorId} coordinates={place.location} />)}
    </ul>;
}

export default PlaceList