import {FunctionComponent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {APPLY_VOUCHER} from "../../common/global_var/redux_actions_types.ts";
import {SUPER_CREMEUX} from "../../common/global_var/products.ts";
import {isVoucherAvailable} from "../../app/selectors.ts";
import {IProduct} from "../../common/interfaces/IProduct.ts";
import {applyVoucherAction} from "../../app/actions.ts";

export const Voucher: FunctionComponent = () => {

    const dispatch = useDispatch()

    const available: IProduct = useSelector(isVoucherAvailable)

    const onApplyVoucher = () => {
        dispatch(applyVoucherAction({
            price: 2
        }))
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