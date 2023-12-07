import { User } from "../api/UserApi";
import { useEditUser } from "../hooks/custom/UseUser";
import { UserForm } from "./UserForm";

export const EditUserForm = ({ id }: Pick<User, 'id'>) => {

    const editUser = useEditUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form));
        await editUser.mutateAsync({ name: data.user as string, id });
        form.reset();
    }

    return (
        <UserForm mode="edit" handleSubmit={handleSubmit} mutationResult={editUser} />
    )
}