import {FormEvent, FunctionComponent} from "react";
import {Action, Store} from "@reduxjs/toolkit";
import {useSelector, useStore} from "react-redux";
import {UPDATE_FIRSTNAME} from "../../common/global_var/redux_actions_types.ts";
import {getOwner} from "../../app/selectors.ts";

export const Owner: FunctionComponent = () => {

    const store: Store<any, Action, any> = useStore()
    const owner  = useSelector(getOwner)

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
                    typeof owner === 'object' && 'firstName' in owner
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