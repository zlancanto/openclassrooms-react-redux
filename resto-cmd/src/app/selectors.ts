import {SUPER_CREMEUX} from "../common/global_var/products.ts";
import {IState} from "./IState.ts";
import {IProduct} from "../common/interfaces/IProduct.ts";

export const getProductList = (state: IState) => state?.list
export const getTotalOder = (state: IState) => getProductList(state).reduce((acc: number, currProduct: IProduct) => Math.round((acc + currProduct.price) * 100) / 100, 0)
export const isVoucherAvailable = (state: IState) => getProductList(state).find((product: IProduct) => product.title === SUPER_CREMEUX)
export const getOwner = (state: IState) => state.owner