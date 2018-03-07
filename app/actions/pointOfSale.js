import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

// const path = require('path');
// const model = require('model.js');

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

// export const getAllProducts = () => dispatch => {
//   model.getProducts(products => {
//     dispatch(receiveProducts(products))
//   })
// }

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().quickproducts.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

// export const restrictioncheck = products => (dispatch, getState) => {
//      restrictioncheck = false;
// }

