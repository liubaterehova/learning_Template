// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as customActions } from '../../store/custom';

import MainPage from '../../components/pages/MainPage';

const mapStateToProps = (state) => {
  return {
    films: state.custom.ghibliFilms,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFilms: customActions.getGhibliFilms,
      onDescriptionChange: customActions.onFilmDescriptionChange,
      getPeople: customActions.getGhibliPeople,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
