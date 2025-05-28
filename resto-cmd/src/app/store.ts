import {configureStore} from "@reduxjs/toolkit";
import {SUPER_CREMEUX} from "../common/global_var/products.ts";
import {
    ADD_PRODUCT,
    APPLY_VOUCHER,
    REMOVE_PRODUCT,
    UPDATE_FIRSTNAME
} from "../common/global_var/redux_actions_types.ts";
import {IState} from "./IState.ts";
import {IAction} from "../common/interfaces/IAction.ts";

/* State initial */
let state: IState = {
    value: null,
    owner: {},
    list: [],
};

const reducer = (currentState: IState, action: IAction) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const listWithNewProduct = [...currentState.list, action.payload];
            return {...currentState, list: listWithNewProduct};
        }
        case REMOVE_PRODUCT: {
            const list = currentState.list.filter(
                (item, index) => index !== action.payload
            );
            return {...currentState, list: list};
        }
        case APPLY_VOUCHER: {

            if (!(
                typeof action.payload === 'object' &&
                action.payload !== null &&
                'price' in action.payload &&
                typeof action.payload.price === 'number'
            )) {
                throw new TypeError('La propriété payload doit être de type Product')
            }

            const withVoucherList = currentState.list.map((item) =>
                item.title === SUPER_CREMEUX
                    ? {...item, price: (action.payload as any).price}
                    : item
            );
            return {...currentState, list: withVoucherList};
        }
        case UPDATE_FIRSTNAME: {

            if (typeof action.payload !== 'string') {
                throw new TypeError("action.payload must be an string type")
            }

            if (typeof currentState.owner !== 'object') {
                throw new TypeError('currentState.owner must be an object type');
            }

            const owner = {...currentState.owner, firstName: action.payload};
            return {...currentState, owner};
        }
        default:
            return currentState;
    }
};

export const store = configureStore({
    preloadedState: state,
    reducer,
});