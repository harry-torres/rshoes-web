import { call, put, all, takeLeading } from 'redux-saga/effects';
import api from '../../../services/api';
import actions, { addToCartSuccess } from './actions';

// generator
function* addToCart({ id }) {
  // await
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLeading(actions.ADD_REQUEST, addToCart)]);
