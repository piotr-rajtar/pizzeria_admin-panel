import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, getTablesDataFromAPI, getLoadingState, sendStatusToAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(getTablesDataFromAPI()),
  changeTableStatus: (obj) => dispatch(sendStatusToAPI(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
