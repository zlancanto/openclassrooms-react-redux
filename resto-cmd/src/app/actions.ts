import {createAction} from "@reduxjs/toolkit";
import {
    ADD_PRODUCT,
    APPLY_VOUCHER,
    REMOVE_PRODUCT,
    UPDATE_FIRSTNAME
} from "../common/global_var/redux_actions_types.ts";
import {IProduct} from "../common/interfaces/IProduct.ts";

export const addProductAction = createAction(ADD_PRODUCT, (product: IProduct) => ({
    payload: product
}))

export const removeProductAction = createAction(REMOVE_PRODUCT, (indexProduct: number) => ({
    payload: indexProduct
}))

export const applyVoucherAction = createAction(APPLY_VOUCHER, (price: { price: number }) => ({
    payload: price
}))

export const updateFirstNameAction = createAction(UPDATE_FIRSTNAME, (firstName: string) => ({
    payload: firstName
}))