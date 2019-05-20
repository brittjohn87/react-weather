import { createSelector } from 'reselect';

const getStoreState = ({ location = {} } = {}) => location;

export const getLocationConfig = createSelector(
    getStoreState,
    ({location}) => location
);