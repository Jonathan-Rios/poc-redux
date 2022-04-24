import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

/* Dentro do redux-saga não podemos utilizar o async, portanto usamos o generator
function* é um generator, que é "mais ou menos" como se eu tivesse usando um "async function",
quando utilizamos async e await, eles são convertidos para generators,
quando usamos os "Babel da vida" para converter para o Browser
by Rocketseat*/
export default function* rootSage(): Generator {
  return yield all([
    cart,
  ])
}
 //mais ou menos, se function* é o async, o yield é o await.
