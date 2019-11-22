import MainPage from '../containers/MainPage';
import GhibliPeople from '../containers/GhibliPeoplePage';


export const customerRoutes = [{
        path: '/main/people',
        component: GhibliPeople,
        exact: true,
    },
    {
        path: '/main/films',
        component: MainPage,
        exact: true,
    }
];