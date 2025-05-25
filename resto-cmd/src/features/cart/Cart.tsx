import {FunctionComponent, useEffect, useState} from "react";
import {useStore} from "react-redux";
import {Action, Store} from "@reduxjs/toolkit";
import {ADD_PRODUCT} from "../../common/global_var/redux_actions_types.ts";
import {SuperCremeux} from "../../common/models.ts";

export const Cart: FunctionComponent = () => {

    const store: Store<any, Action, any> = useStore()
    const [list, setList] = useState(store.getState().list)

    useEffect(() => {
        store.subscribe(() => setList(store.getState().list))
    }, [store]);

    const addProductSuperCremeux = () => {
        store.dispatch({
            type: ADD_PRODUCT,
            payload: SuperCremeux
        })
    }

    return(
        <div className="Selection">
            <h1>Vos produits sélectionnés</h1>
            {
                list.map((product: any, index: number) => (
                    <span key={index} className="SelectedProduct">
                        {product.title} {product.price}€
                    </span>
                ))
            }
            <div>
                <p>
                    {
                        list.length === 0
                            ? 'Aucun produit sélectionné pour le moment'
                            : `Total commande : 
                            ${list
                                .reduce((accumulateur: number, valeurCourante: any) => accumulateur + valeurCourante.price, 0)} 
                                euros`
                    }
                </p>
            </div>
            <div className="CartNavBar">
                <button onClick={addProductSuperCremeux}>Add SuperCrémeux</button>
            </div>
        </div>
    )
}

export default Cart