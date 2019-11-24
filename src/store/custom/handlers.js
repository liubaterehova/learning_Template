const initialState = {
    isLoading: false,
    error: null,
    ghibliFilms: [],
    people: [],
};


export const getGhibliPeople = (state, { payload }) => ({
    ...state,
    isLoading: true,
});

export const getGhibliPeopleSuccess = (state, { payload }) => ({
    ...state,
    isLoading: false,
    people: payload.ghibliPeople,
})

export const cleanGhibliPeople = (state, { payload }) => {
    console.log('cleanGhibliPeople(handlers)');
    return {
        ...state,
    }
};
export const cleanGhibliPeopleSuccess = (state, { payload }) => {
    console.log('cleanGhibliPeople(handlers)', state);
    return {
        ...state,
        people: [],
    }
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

export const onFilmDescriptionChange = (state, { payload }) => {
    return ({
        ...state,
        // ghibliFilms: newArr,
    })

}
export const onFilmDescriptionChangeSuccess = (state, { payload }) => {
    console.log(payload);
    const searchIndex = state.ghibliFilms.findIndex((film) => film.id === payload.id);
    console.log(searchIndex);
    let leftPart = state.ghibliFilms.slice(0, searchIndex);
    let rightPart = state.ghibliFilms.slice(searchIndex + 1);
    let newFilm = {
        description: payload.description,
        rt_score: payload.rt_score,
        release_date: payload.release_date,
        title: payload.title,
        director: payload.director,
        id: payload.id,
    };
    let newArr = [...leftPart, newFilm, ...rightPart];
    return ({
        ...state,
        ghibliFilms: newArr,
    })
}

export const onFilmRateChange = (state, { payload }) => {
    return ({
        ...state,
        // ghibliFilms: newArr,
    })

}
export const onFilmRateChangeSuccess = (state, { payload }) => {
        console.log('onRateChange payload=', payload);
        console.log('payload.rate =', payload.rate_score);
        const searchIndex = state.ghibliFilms.findIndex((film) => film.id === payload.id);
        console.log(searchIndex);
        let leftPart = state.ghibliFilms.slice(0, searchIndex);
        let rightPart = state.ghibliFilms.slice(searchIndex + 1);
        let newFilm = {...state.ghibliFilms[searchIndex], rate_score: payload.rate_score };
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