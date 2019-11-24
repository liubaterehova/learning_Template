import { actions as types } from './index';
import { all, put, call, take, takeEvery } from 'redux-saga/effects'
import makeApi from '../../api'
import { history } from './../../history';

// function* signUpSaga({ payload }) {
//     try {
//         let response;
//         const auth = makeApi().auth;
//         const { email, password, role, zip, manufacturers } = payload;

//         if (role === 'customer') {
//             response = yield call([auth, auth.registerCustomer], { email, password, role, zip });
//         }
//         else {
//             response = yield call([auth, auth.registerDealer], { email, password, role, zip, manufacturers });
//         }


//         if (response.data) {
//             const { token } = response.data.user;
//             const user = { ...response.data.user };

//             localStorage.setItem('token', token);

//             yield put(types.signUpSuccess({ decodedJWT: user }));

//             history.push('/dash');
//         }

//     } catch (error) {
//         yield put(types.signUpFailure({ error }))
//     }
// }

function* getGhibliFilmsSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        response = yield call([custom, custom.getGhibliFilms]);

        if (response.data) {
            yield put(types.getGhibliFilmsSuccess({ ghibliFilms: response.data }));
        }

    } catch (error) {
        yield put(types.processFailure({ error }))
    }
}

function* getGhibliPeopleSaga({ payload }) {
    try {
        let response;
        const custom = makeApi().custom;
        response = yield call([custom, custom.getGhibliPeople]);

        if (response.data) {
            yield put(types.getGhibliPeopleSuccess({ ghibliPeople: response.data }));
        }

    } catch (error) {
        yield put(types.processFailure({ error }))
    }
}

function* onFilmDescriptionChangeSaga({ payload }) {
    yield put(types.onFilmDescriptionChangeSuccess(payload));
}

function* onFilmRateChangeSaga({ payload }) {
    yield put(types.onFilmRateChangeSuccess(payload));
}

function* cleanGhibliPeopleSaga({ payload }) {
    yield put(types.cleanGhibliPeopleSuccess(payload));
}




const customSagas = [
    takeEvery(types.getGhibliFilms, getGhibliFilmsSaga),
    takeEvery(types.onFilmDescriptionChange, onFilmDescriptionChangeSaga),
    takeEvery(types.onFilmRateChange, onFilmRateChangeSaga),
    takeEvery(types.getGhibliPeople, getGhibliPeopleSaga),
    takeEvery(types.cleanGhibliPeople, cleanGhibliPeopleSaga),

];


export default customSagas