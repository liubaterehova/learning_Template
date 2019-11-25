// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";
import MainPage from "../../components/pages/MainPage";

// import TemplateMainPage from "../../components/template/TemplateMainPage";

const mapStateToProps = state => {
    return {
        films: state.custom.ghibliFilms,
        people: state.custom.people,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
            getFilms: customActions.getGhibliFilms,
            onDescriptionChange: customActions.onFilmDescriptionChange
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);