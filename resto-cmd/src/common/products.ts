import {DOUBLE_CANTAL, POULET_CROQUANT, SUPER_CREMEUX} from "./global_var/products.ts";
import {IProduct} from "./interfaces/IProduct.ts";

export const DoubleCantal: IProduct = {
    title: DOUBLE_CANTAL,
    price: 12.99
}

export const SuperCremeux: IProduct = {
    title: SUPER_CREMEUX,
    price: 14.20
}

export const PouletCroquant: IProduct = {
    title: POULET_CROQUANT,
    price: 16.44
}