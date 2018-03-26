import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from '../actions/pointOfSale';
import { getTotal, getTax, getCartProducts} from '../reducers';
import Checkout from '../components/Checkout';

//const CheckoutContainer = ({ products, tax, total, checkout, restrictioncheck }) => (
const CheckoutContainer = ({ products, tax, total, checkout }) => (
  <Checkout
    products={products}
    tax={tax}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    //onRestrictionClicked={() => restrictioncheck(products)}
    // hasRestriction={hasRestriction}
    />
)

CheckoutContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productname: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    upc: PropTypes.number.isRequired,
    checkId: PropTypes.number.isRequired,
  })).isRequired,
  tax: PropTypes.string,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
}
  //restrictioncheck: PropTypes.bool,
  // hasRestriction: PropTypes.bool,


const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  tax: getTax(state),
  total: getTotal(state),
  // hasRestriction: getRestriction(state),
})

export default connect(
  mapStateToProps,
  { checkout }
)(CheckoutContainer)
