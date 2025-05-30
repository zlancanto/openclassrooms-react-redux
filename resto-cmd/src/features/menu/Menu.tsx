import {FunctionComponent} from "react";
import * as ProductList from "../../common/products.ts"
import {IProduct} from "../../common/interfaces/IProduct.ts";
import {Product} from "../../common/components/Product.tsx";
import {useDispatch} from "react-redux";
import {ADD_PRODUCT} from "../../common/global_var/redux_actions_types.ts";

export const Menu: FunctionComponent = () => {

    const dispatch = useDispatch()

    return (
        <div className="Menu">
            {
                Object
                    .values(ProductList)
                    .map((product: IProduct, index: number) => (
                        <Product
                            key={index}
                            product={product}
                            onSelect={() => dispatch({
                                type: ADD_PRODUCT,
                                payload: product
                            })}/>
                    ))
            }
        </div>
    )
}

export default Menu