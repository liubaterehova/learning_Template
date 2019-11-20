const initialState = {
    isLoading: false,
    error: null,
    ghibliFilms: [],
};

//общий экшен для всех ошибок в Custom
export const processFailure = (state, { payload }) => ({
    ...state,
    error: payload.error,
    isLoading: false,
});

export const getGhibliFilms = (state, { payload }) => ({
    ...state,
    isLoading: true,
});

export const getGhibliFilmsSuccess = (state, { payload }) => ({
    ...state,
    isLoading: false,
    ghibliFilms: payload.ghibliFilms
});
export const onFilmDescriptionChange = (state, obj) => {
    let id = '12';
    let description = 'df';
    console.log(obj);
    console.log("onFilmDescriptionChange");
    const searchIndex = state.ghibliFilms.findIndex((film) => film.id === id);
    console.log(searchIndex);
    let leftPart = state.ghibliFilms.slice(0, searchIndex);
    let rightPart = state.ghibliFilms.slice(searchIndex + 1);
    let newFilm = {...state.ghibliFilms[searchIndex], description: description };
    let newArr = [...leftPart, newFilm, ...rightPart];
    return ({
        ...state,
        ghibliFilms: newArr,
    })
}

// export const signUp = (state, { payload }) => ({
//     ...state,
//     isLoading: true,
//     error: undefined,
// });

// export const signUpSuccess = (state, { payload }) => ({
//     ...state,
//     isLoading: false,
//     decodedJWT: payload.decodedJWT
// });

export default initialState;