import {IProduct} from "../common/interfaces/IProduct.ts";

export interface IState {
    value: unknown
    owner: unknown,
    list: Array<IProduct>,
}