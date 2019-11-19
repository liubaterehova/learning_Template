// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as customActions } from '../../store/custom';

import MainPage from '../../components/pages/MainPage';

const mapStateToProps = (state) => {
  return {
    films: state.custom.ghibliFilms
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFilms: customActions.getGhibliFilms,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
