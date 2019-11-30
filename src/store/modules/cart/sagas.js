import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import actions, { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../util/format';

// generator
function* addToCart({ id }) {
  // await
  console.tron.log('teste');

  const product = yield select(state => state.cart.find(p => p.id === id));

  if (product) {
    const amount = product.amount + 1;
    console.tron.log(product, amount);
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const priceFormatted = formatPrice(response.data.price);
    const newProduct = {
      ...response.data,
      amount: 1,
      priceFormatted,
    };

    yield put(addToCartSuccess(newProduct));
  }
}

export default all([takeLatest(actions.ADD_REQUEST, addToCart)]);
