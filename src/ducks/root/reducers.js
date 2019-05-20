import { combineReducers } from 'redux';
import locationReducer from '../location/reducers';

export const rootReducer =  () => combineReducers({
    location: locationReducer
});

export default rootReducer;