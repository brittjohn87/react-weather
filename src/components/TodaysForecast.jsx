import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { setLocationConfig } from '../ducks/location/actions';
import { getLocationConfig } from '../ducks/location/selectors';
import { getWeatherByCity, getWeatherByZip } from '../api'

const TodaysForecast = ({ setLocationConfig, locationConfig }) => {
    const onChangeCity = e => {
        const city = e.target.value
        setLocationConfig({ city });
    }

    const onChangeZip = e => {
        const zip = e.target.value
        setLocationConfig({ zip });
    }

    getWeatherByCity(`${locationConfig.city}`).then(response => console.log('city', response.data));
    getWeatherByZip(`${locationConfig.zip}`).then(response => console.log('zip', response.data));

    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Enter City</label>
                    <input type="text" className="form-control" placeholder="Enter Your City Here" value={locationConfig.city} onChange={onChangeCity}></input>
                </div>
                <div className="form-group col-md-6">
                    <label>Enter Zip Code</label>
                    <input type="text" className="form-control" placeholder="Enter Your Zip Here" value={locationConfig.zip} onChange={onChangeZip}></input>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        locationConfig: getLocationConfig(state)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setLocationConfig,
}, dispatch)

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(TodaysForecast);
