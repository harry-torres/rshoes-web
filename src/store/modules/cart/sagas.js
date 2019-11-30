import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import actions, { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

// generator
function* addToCart({ id }) {
  // await

  const product = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = product ? product.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada maior que o estoque.');
    return;
  }

  if (product) {
    console.tron.log(product, amount);
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const priceFormatted = formatPrice(response.data.price);
    const newProduct = {
      ...response.data,
      amount: 1,
      priceFormatted,
    };

    yield put(addToCartSuccess(newProduct));
    history.push('/cart');
  }
}
function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque.');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest(actions.ADD_REQUEST, addToCart),
  takeLatest(actions.UPDATE_AMOUNT_REQUEST, updateAmount),
]);
