import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_GET_TABLES_DATA = createActionName('START_GET_TABLES_DATA');
const GET_TABLES_DATA_SUCCESS = createActionName('GET_TABLES_DATA_SUCCESS');
const GET_TABLES_DATA_ERROR = createActionName('GET_TABLES_DATA_ERROR');
const CHANGE_TABLE_STATUS = createActionName('CHANGE_TABLE_STATUS');

/* action creators */
export const startGetTablesData = payload => ({ payload, type: START_GET_TABLES_DATA });
export const getTablesDataSuccess = payload => ({ payload, type: GET_TABLES_DATA_SUCCESS });
export const getTablesDataError = payload => ({ payload, type: GET_TABLES_DATA_ERROR });
export const changeTableStatus = payload => ({payload, type: CHANGE_TABLE_STATUS});

/* thunk creators */
export const getTablesDataFromAPI = () => {
  return (dispatch) => {
    dispatch(startGetTablesData());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(getTablesDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(getTablesDataError(err.message || true));
      });
  };
};

export const sendStatusToAPI = (obj) => {
  return (dispatch) => {

    Axios
      .patch(`${api.url}/${api.tables}/${obj.id}`, {
        status: obj.status,
      })
      .then(res => {
        dispatch(changeTableStatus(res.data));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case START_GET_TABLES_DATA: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case GET_TABLES_DATA_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case GET_TABLES_DATA_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CHANGE_TABLE_STATUS: {
      return {
        ...statePart,
        data: statePart.data.map (order => order.id === action.payload.id
          ? {...order, status: action.payload.status }
          : order
        ),
      };
    }
    default:
      return statePart;
  }
}
