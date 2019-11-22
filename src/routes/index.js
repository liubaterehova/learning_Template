import MainPage from '../containers/MainPage';
import GhibliPeople from '../containers/GhibliPeoplePage';


export const customerRoutes = [{
        path: '/main',
        component: MainPage,
        exact: true,
    },
    {
        path: '/main/people',
        component: GhibliPeople,
        exact: true,
    }
];