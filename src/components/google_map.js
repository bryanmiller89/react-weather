import React, { Component } from 'react';

class GoogleMap extends Component {
  // Lifecycle method that gets called automatically whenever component is rendered to screen
  componentDidMount() {
    // Creates embedded google map inside our document
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref='map' />
  }
}

export default GoogleMap;