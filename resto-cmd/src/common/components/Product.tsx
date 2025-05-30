import React, {FunctionComponent} from "react";
import {IProduct} from "../interfaces/IProduct.ts";
import {IMG} from "../global_var/images.ts";

interface Props {
    product: IProduct
    onSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Product: FunctionComponent<Props> = ({product, onSelect}) => {

    return (
        <div className="ProductCard" onClick={onSelect}>
            <img src={IMG[product.title]} alt={product.title}/>
            {product.title}
        </div>
    )
}