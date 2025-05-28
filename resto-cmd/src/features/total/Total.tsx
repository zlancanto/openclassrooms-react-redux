import {FunctionComponent} from "react";
import {useSelector} from "react-redux";
import {getProductList, getTotalOder} from "../../app/selectors.ts";
import {IProduct} from "../../common/interfaces/IProduct.ts";

export const Total: FunctionComponent = () => {

    const list: Array<IProduct> = useSelector(getProductList)
    const totalCmd: number = useSelector(getTotalOder)

    return (
        <div className="TotalCommand">
            <div>
                {
                    list.length === 0
                        ? 'Aucun produit sélectionné pour le moment'
                        : `Total commande : ${totalCmd}€`
                }
            </div>
        </div>
    )
}

export default Total