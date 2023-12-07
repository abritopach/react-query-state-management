import { UseMutationResult } from '@tanstack/react-query';
import './UserForm.css';
import { User } from '../api/UserApi';

interface Props {
    mode: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    mutationResult: UseMutationResult<User, Error, Omit<User, "id">, unknown> | UseMutationResult<User, Error, User, unknown>
}


export const UserForm = (props: Props) => {

    return (
        <div>
            <h1> {props.mode === 'create' ? 'Create User' : 'Update User'}</h1>
            <form onSubmit={props.handleSubmit} className="form-user">
                <input name='user' type="text" className="input-user" placeholder='User' />
                {props.mutationResult.isPending && <span className="message-user">{props.mode === 'create' ? 'Creating user...' : 'Updating user...'}</span>}
                <button className="button-user">{props.mode === 'create' ? 'Create User' : 'Update User'}</button>
                {props.mutationResult.isSuccess && <span className="message-user">User {props.mode === 'create' ? 'created' : 'updated'} successfully ✅</span>}
                {props.mutationResult.isError && <span className="error-user">Ups! it was an error 🚨</span>}
            </form>
        </div>
    )
}