import React from 'react';

// Since this component has no state we can delete the class and replace it with an arrow function in order to shorten the code, eg:
// const Weather = (props) => (<div<blah</div>);
//
// I decided not to do this in order to have the code be more readable for future purposes

class Weather extends React.Component {
    render() {
        return(
            <div>
                {this.props.country && <p>Country : {this.props.country}</p>}
                {this.props.city && <p>City : {this.props.city}</p>}
                {this.props.temperature && <p>Temperature : {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
                {this.props.description && <p>Right now it is : {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>} {/* if the error message is not an empty string, then show error */}
                
            </div>
        );
    }
}

export default Weather;