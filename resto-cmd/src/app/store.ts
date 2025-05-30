import {ActionReducerMapBuilder, configureStore, createReducer} from "@reduxjs/toolkit";
import {SUPER_CREMEUX} from "../common/global_var/products.ts";
import {IState} from "./IState.ts";
import {addProductAction, applyVoucherAction, removeProductAction, updateFirstNameAction} from "./actions.ts";
import {IProduct} from "../common/interfaces/IProduct.ts";

let initState: IState = {
    value: null,
    owner: {},
    list: [],
}

export const reducer = createReducer(initState, (builder: ActionReducerMapBuilder<IState>) => {
    builder
        .addCase(addProductAction, (currentState, action) => {
            const listWithNewProduct: Array<IProduct> = [...currentState.list, action.payload];
            return {...currentState, list: listWithNewProduct};
        })
        .addCase(removeProductAction, (currentState, action) => {
            const list = currentState.list.filter(
                (_, index: number) => index !== action.payload
            );
            return {...currentState, list: list};
        })
        .addCase(applyVoucherAction, (currentState, action) => {
            const withVoucherList = currentState.list.map((product) =>
                product.title === SUPER_CREMEUX
                    ? {...product, price: action.payload.price}
                    : product
            );
            return {...currentState, list: withVoucherList};
        })
        .addCase(updateFirstNameAction, (currentState, action) => {
            if (typeof currentState.owner !== 'object') {
                throw new TypeError('currentState.owner must be an object type');
            }

            const owner = {...currentState.owner, firstName: action.payload};
            return {...currentState, owner};
        })
        .addDefaultCase((currentState, _) => {
            return currentState
        })
})

export const store = configureStore({
    preloadedState: initState,
    reducer,
});