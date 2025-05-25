import {configureStore} from "@reduxjs/toolkit";
import {SUPER_CREMEUX} from "../common/global_var/products.ts";
import {
    ADD_PRODUCT,
    APPLY_VOUCHER,
    REMOVE_PRODUCT,
    UPDATE_FIRSTNAME
} from "../common/global_var/redux_actions_types.ts";

/* State initial */
let state = {
    value: null,
    owner: {},
    list: [],
};

const reducer = (currentState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const listWithNewProduct = [...currentState.list, action.payload];
            return { ...currentState, list: listWithNewProduct };
        }
        case REMOVE_PRODUCT: {
            const list = currentState.list.filter(
                (item, index) => index !== action.payload
            );
            return { ...currentState, list: list };
        }
        case APPLY_VOUCHER: {
            const withVoucherList = currentState.list.map((item) =>
                item.title === SUPER_CREMEUX
                    ? { ...item, price: action.payload.price }
                    : item
            );
            return { ...currentState, list: withVoucherList };
        }
        case UPDATE_FIRSTNAME: {
            const owner = { ...currentState.owner, firstName: action.payload };
            return { ...currentState, owner };
        }
        default:
            return currentState;
    }
};

export const store = configureStore({
    preloadedState: state,
    reducer,
});