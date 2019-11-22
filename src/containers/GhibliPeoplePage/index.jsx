import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import GhibliPeople from "../../components/pages/GhibliPeoplePage";

const mapStateToProps = state => {
  console.log("state", state);
  return {
    people: state.custom.people
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPeople: customActions.getGhibliPeople
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GhibliPeople);
