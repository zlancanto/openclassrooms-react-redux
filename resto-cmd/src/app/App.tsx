import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import {store} from "./store.ts";
import Cart from "../features/cart/Cart.tsx";
import Total from "../features/total/Total.tsx";
import Voucher from "../features/voucher/Voucher.tsx";
import Owner from "../features/owner/Owner.tsx";

const App: FunctionComponent = () => {

  return (
      <Provider store={store}>
          <div className="App">
              <Owner/>
              <Cart/>
              <Total/>
              <Voucher/>
          </div>
      </Provider>
  )
}

export default App
