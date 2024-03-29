import produce from 'immer';
import actions from './actions';

export default function cart(state = [], action) {
  switch (action.type) {
    case actions.ADD_SUCCESS:
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case actions.REMOVE:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case actions.UPDATE_AMOUNT_SUCCESS: {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
