import React, { Component } from "react";

type GeolocationErrorResponse = {
  code: number;
  message: string;
};

type GeolocationResponseSucces = {
  coords: {
    accuracy: number;
    altitude?: any;
    altitudeAccuracy?: any;
    heading?: any;
    latitude: number;
    longitude: number;
    speed?: any;
  };
  timestamp: number;
};

export default class Geolocation extends Component {
  state = {
    lat: "",
    isError: null
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position: GeolocationResponseSucces) =>
        this.setState({
          lat: position.coords.latitude
        }),
      (error: GeolocationErrorResponse) =>
        this.setState({
          isError: error.message
        })
    );
  }

  render() {
    const { lat, isError } = this.state;

    if (lat && !isError) {
      return <div>Latitude : {lat}</div>;
    }
    if (!lat && isError) {
      return <div>Error : {isError}</div>;
    }
    return <p>Loading...</p>;
  }
}
