const actions = {
  ADD: '@cart/ADD',
  REMOVE: '@cart/REMOVE',
  UPDATE_AMOUNT: '@cart/UPDATE_AMOUNT',
};

export default actions;

export function addToCart(product) {
  return {
    type: actions.ADD,
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
