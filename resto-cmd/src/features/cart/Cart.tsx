import {FunctionComponent} from "react";
import {useSelector} from "react-redux";
import {getListQuantityProductPerName} from "../../app/selectors.ts";

export const Cart: FunctionComponent = () => {

    const list = useSelector(getListQuantityProductPerName)

    return (
        <div className="Selection">
            <h1>Vos produits sélectionnés</h1>
            {
                list
                    .filter(product => product.quantity !== 0)
                    .map((product, index: number) => (
                        <span key={index} className="SelectedProduct">
                            {product.quantity} x {product.title}
                        </span>
                    ))
            }
        </div>
    )
}

export default Cart