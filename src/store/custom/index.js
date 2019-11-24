import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
    PROCESS_FAILURE: undefined,
    GET_GHIBLI_FILMS: undefined,
    GET_GHIBLI_FILMS_SUCCESS: undefined,
    GET_GHIBLI_PEOPLE: undefined,
    GET_GHIBLI_PEOPLE_SUCCESS: undefined,
    ON_FILM_DESCRIPTION_CHANGE: undefined,
    ON_FILM_DESCRIPTION_CHANGE_SUCCESS: undefined,
    ON_FILM_RATE_CHANGE: undefined,
    ON_FILM_RATE_CHANGE_SUCCESS: undefined,
    CLEAN_GHIBLI_PEOPLE: undefined,
    CLEAN_GHIBLI_PEOPLE_SUCCESS: undefined,


    // SIGN_UP: undefined,
    // SIGN_UP_SUCCESS: undefined,
    // SIGN_UP_FAILURE: undefined,
});



const reducer = handleActions(
    new Map([
        // [actions.signUp, handlers.signUp],
        // [actions.signUpSuccess, handlers.signUpSuccess],
        // [actions.signUpFailure, handlers.signUpFailure],

        [actions.processFailure, handlers.processFailure],
        [actions.getGhibliFilms, handlers.getGhibliFilms],
        [actions.getGhibliFilmsSuccess, handlers.getGhibliFilmsSuccess],
        [actions.onFilmDescriptionChangeSuccess, handlers.onFilmDescriptionChangeSuccess],
        [actions.onFilmDescriptionChange, handlers.onFilmDescriptionChange],
        [actions.onFilmRateChange, handlers.onFilmRateChange],
        [actions.getGhibliPeople, handlers.getGhibliPeople],
        [actions.getGhibliPeopleSuccess, handlers.getGhibliPeopleSuccess],
        [actions.cleanGhibliPeople, handlers.cleanGhibliPeople],
        [actions.cleanGhibliPeopleSuccess, handlers.cleanGhibliPeopleSuccess],
    ]),
    initialState,
);

export default reducer;