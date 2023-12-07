import { User } from "../api/UserApi";
import { useDeleteUser } from "../hooks/custom/UseUser";
import './DeleteUser.css';

export const DeleteUser = ({ id }: Pick<User, 'id'>) => {
    const deleteUser = useDeleteUser();

    const onDelete = async () => {
        await deleteUser.mutateAsync(id);
    }

    return (
        <div className="delete-user">
            {deleteUser.isPending && <span>deleting user...</span>}

            <button className="delete-button-user" onClick={onDelete}>Delete User</button>

            {deleteUser.isSuccess && <span>User deleted successfully ✅, go back home</span>}
            {deleteUser.isError && <span>Ups! it was an error 🚨</span>}
        </div>
    )
}