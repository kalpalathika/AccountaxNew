import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";

class MapContainer extends React.Component {
    render(){

        return(
            <Map 
            style={{width:'100%', height:'30rem'}}
            google={this.props.google} 
            zoom={10}
            initialCenter={{
                lat:43.106640,
                lng:-79.065208
            }}
            >
            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
            </Map>
            

        )
    }
    }
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)