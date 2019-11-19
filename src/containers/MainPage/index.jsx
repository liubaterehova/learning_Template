// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as customActions } from '../../store/custom';

import MainPage from '../../components/pages/MainPage';

const mapStateToProps = (state) => {
    
  return {
    //...state.authActions,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      customActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
