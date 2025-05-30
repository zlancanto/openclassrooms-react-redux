import {FormEvent, FunctionComponent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOwner} from "../../app/selectors.ts";
import {updateFirstNameAction} from "../../app/actions.ts";

export const Owner: FunctionComponent = () => {

    const dispatch = useDispatch()
    const owner  = useSelector(getOwner)

    const onUpdateOwner = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const firstName: string = e.currentTarget.firstName.value
        dispatch(updateFirstNameAction(firstName))
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