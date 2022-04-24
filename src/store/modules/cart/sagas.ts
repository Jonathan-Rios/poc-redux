import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { ActionTypes } from './types';

type CheckProductStockRequest =  ReturnType <typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select( (state: IState) => {
    return state.cart.items.find( item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockReponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if (availableStockReponse.data.quantity > currentQuantity) {
    console.log('deuCerto');
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}
/* takeLatest, caso um usuário clicar várias vezes em um botão, mas a ação ainda não foi realizada,
ele vai ignorar as demais e só responder para a ultima vez que o usuário clicou

takeLatest é o mais comum, mas também temoos algumas outras opções comuns:
  TakeEvery: Caso queira todas
  takeLeading: O inverso do Latest, vai analisar a primeira e ignorar as futuras então está sendo realidada.
*/
export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);
