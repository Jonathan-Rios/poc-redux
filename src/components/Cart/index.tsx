import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

import {Container} from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  return(
    <Container>
      <h2>Carrinho</h2>
      <table style={{border: '1px solid', textAlign: 'center'}} width="500px">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Cart;
