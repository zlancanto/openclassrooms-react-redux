import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import {store} from "./store.ts";
import Cart from "../features/cart/Cart.tsx";

const App: FunctionComponent = () => {

  return (
      <Provider store={store}>
          <div className="App">
              <Cart/>
          </div>
      </Provider>
  )
}

export default App
