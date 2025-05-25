import {FunctionComponent, useEffect, useState} from "react";
import {useStore} from "react-redux";
import {Action, Store} from "@reduxjs/toolkit";
import {APPLY_VOUCHER} from "../../common/global_var/redux_actions_types.ts";
import {SUPER_CREMEUX} from "../../common/global_var/products.ts";

export const Voucher: FunctionComponent = () => {

    const store: Store<any, Action, any> = useStore()
    const [list, setList] = useState(store.getState().list)

    const available = list.find(product => product.title === SUPER_CREMEUX)

    useEffect(() => {
        store.subscribe(() => setList(store.getState().list))
    }, [store]);

    const onApplyVoucher = () => {
        store.dispatch({
            type: APPLY_VOUCHER,
            payload: { price: 2 }
        })
    }

    return (
        <div className="Voucher">
            {
                available && (
                    <button onClick={onApplyVoucher}>
                        Add Promo 2€ on {SUPER_CREMEUX} product
                    </button>
                )
            }
        </div>
    )
}

export default Voucher