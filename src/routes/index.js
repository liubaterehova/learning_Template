import TemplateMainPage from "../components/template/templateMainPage";
import GhibliPeople from "../containers/GhibliPeoplePage";
import Navigation from "../components/pages/NavigationMainPage";

export const customerRoutes = [{
        path: "/main",
        component: TemplateMainPage,
        exact: true
    },
    {
        path: "/main/people",
        component: GhibliPeople,
        exact: true
    },
    {
        path: "/main/navigation",
        component: Navigation,
        exact: true
    }
];