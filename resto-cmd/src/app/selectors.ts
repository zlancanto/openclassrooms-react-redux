import {SUPER_CREMEUX} from "../common/global_var/products.ts";
import {IState} from "./IState.ts";
import {IProduct} from "../common/interfaces/IProduct.ts";
import * as productList from "../common/products.ts"

export const getProductList = (state: IState) => state?.list
export const getTotalOder = (state: IState) => getProductList(state).reduce((acc: number, currProduct: IProduct) => Math.round((acc + currProduct.price) * 100) / 100, 0)
export const isVoucherAvailable = (state: IState) => getProductList(state).find((product: IProduct) => product.title === SUPER_CREMEUX)
export const getOwner = (state: IState) => state.owner

/**
 * List des produits par nom
 * Ex: SuperCrémeux (y'en a 5 dans la liste totale, state.list)
 * @param name
 */
export const getProductListPerName =
    (name: string) =>
        (state: IState) => getProductList(state)
            .filter((product: IProduct) => product.title === name)

/**
 * return la quantité totale d'un produit particulier
 * @param name
 */
export const getQuantityProductPerName = (name: string) => (state: IState) => getProductListPerName(name)(state).length

export const getListQuantityProductPerName =
    (state: IState) => Object
        .values(productList)
        .map((product: IProduct) => ({
                title: product.title,
                quantity: getQuantityProductPerName(product.title)(state)
        }))
