import React, { useState } from 'react';

import Modal from '../../shared/UIElements/Modal'
import Card from '../../shared/UIElements/Card';
import Backdrop from '../../shared/UIElements/Backdrop';
import Button from '../../shared/FormElement/Button';
import Map from '../../shared/UIElements/Map';

import '../css/UserPlace.css';

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);
    const openMap = () => setShowMap(true);
    const closeMap = () => setShowMap(false);
    return (
        <React.Fragment>
            <Modal show={showMap} header={props.address} onCancel={closeMap} contentClass="place-item__modal-content" footerClass="place-item__modal-actions" footer={<button onClick={closeMap}>Close</button>}>
                <div className="map-container">
                    <Map />
                </div>
            </Modal>
            {showMap && <Backdrop onClick={closeMap}/>}
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.src} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMap}>View ON Map</Button>
                        <Button to={`/places/${props.id}`}>Edit Place</Button>
                        <Button danger>Delete place</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
}

export default PlaceItem