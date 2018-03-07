import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addToCart } from '../actions/pointOfSale';
import { getVisibleProducts } from '../reducers/processproducts';
import FunctionItem from '../components/FunctionItem';
import FunctionList from '../components/FunctionList';

const FunctionContainer = ({ products, addToCart }) => (
  <FunctionList title="Functions">
    {products.map(product =>
      <FunctionItem
        key={product.id}
        product={product}
        onCheckRestrictionClicked={() => addToCart(product.id)} />
    )}
  </FunctionList>
)

FunctionContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    checkId: PropTypes.bool.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.processproducts)
  };
}

// const mapStateToProps = state => ({
//   products: getVisibleProducts(state.products)
// })

export default connect(
  mapStateToProps,
  { addToCart }
)(FunctionContainer)
