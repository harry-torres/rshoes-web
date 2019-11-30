const actions = {
  ADD_REQUEST: '@cart/ADD_REQUEST',
  ADD_SUCCESS: '@cart/ADD_SUCCESS',
  REMOVE: '@cart/REMOVE',
  UPDATE_AMOUNT_REQUEST: '@cart/UPDATE_AMOUNT_REQUEST',
  UPDATE_AMOUNT_SUCCESS: '@cart/UPDATE_AMOUNT_SUCCESS',
};

export default actions;

export function addToCartRequest(id) {
  return {
    type: actions.ADD_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: actions.ADD_SUCCESS,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: actions.REMOVE,
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: actions.UPDATE_AMOUNT_REQUEST,
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: actions.UPDATE_AMOUNT_SUCCESS,
    id,
    amount,
  };
}
