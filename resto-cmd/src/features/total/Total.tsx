import {FunctionComponent, useEffect, useState} from "react";
import {useStore} from "react-redux";
import {Action, Store} from "@reduxjs/toolkit";

export const Total: FunctionComponent = () => {

    const store: Store<any, Action, any> = useStore()
    const [list, setList] = useState(store.getState().list)
    const totalCmd: number = list.reduce((acc: number, currentValue: any) => acc + currentValue.price, 0)

    useEffect(() => {
        store.subscribe(() => setList(store.getState().list))
    }, [store]);

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