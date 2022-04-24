import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

import {Product} from './styles';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch])

  return (
    <Product>
      <div>
        <strong>{product.title}</strong> {" - "}
        <span>{product.price}</span> {" "}
      </div>
      <button
        type="button"
        onClick={handleAddProductToCart}
        disabled={!!hasFailedStockCheck}
      >
        { !hasFailedStockCheck ? 'Comprar' : 'Falta de estoque'}
      </button>

    </Product>
  );
}

export default CatalogItem;
