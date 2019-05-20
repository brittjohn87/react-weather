import { createAction } from 'typesafe-actions';

export const resetState = createAction('location/RESET_STATE', resolve => {
    return () => resolve ();
});

export const setLocationConfig = createAction('location/SET_LOCATION_CONFIG', resolve => {
    return (locationConfig) => resolve (locationConfig);
});
