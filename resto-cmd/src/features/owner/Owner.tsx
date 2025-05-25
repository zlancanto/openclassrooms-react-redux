import {FormEvent, FunctionComponent, useEffect, useState} from "react";
import {Action, Store} from "@reduxjs/toolkit";
import {useStore} from "react-redux";
import {UPDATE_FIRSTNAME} from "../../common/global_var/redux_actions_types.ts";

export const Owner: FunctionComponent = () => {

    const store: Store<any, Action, any> = useStore()
    const [owner, setOwner] = useState(store.getState().owner)

    useEffect(() => {
        store.subscribe(() => setOwner(store.getState().owner))
    }, [store]);

    const onUpdateOwner = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const firstName: string = e.currentTarget.firstName.value
        store.dispatch({
            type: UPDATE_FIRSTNAME,
            payload: firstName
        })
    }

    return (
        <form className="OwnerForm" onSubmit={onUpdateOwner}>
            <h2>Propriétaire du resto</h2>
            <span className="OwnerName">
                {
                    owner?.firstName
                        ? `Le propriétaire du restaurant est ${owner.firstName}`
                        : 'Le propriétaire n’a pas été configuré'
                }
            </span>
            <label htmlFor="owner">
                Owner firstname :
                <input id="owner" type="text" name="firstName"/>
            </label>
            <button type="submit">Configurer le propriétaire</button>
        </form>
    )
}

export default Owner