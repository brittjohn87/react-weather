import { getType } from 'typesafe-actions';
import { resetState, setLocationConfig } from './actions';

const initialState = {
    location: {
        city: '',
        zip: ''
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case getType(resetState):
            return {
                ...state,
                ...initialState
            };
        case getType(setLocationConfig):
            return {
                ...state,
                location: {...state.location, ...action.payload}
            };
        default:
            return state;
    }
}