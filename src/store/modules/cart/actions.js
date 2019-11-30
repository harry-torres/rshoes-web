const actions = {
  ADD_REQUEST: '@cart/ADD_REQUEST',
  ADD_SUCCESS: '@cart/ADD_SUCCESS',
  REMOVE: '@cart/REMOVE',
  UPDATE_AMOUNT: '@cart/UPDATE_AMOUNT',
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

export function updateAmount(id, amount) {
  return {
    type: actions.UPDATE_AMOUNT,
    id,
    amount,
  };
}
