import { UserForm } from "../components/UserForm";
import { useCreateUser } from "../hooks/custom/UseUser";


export const CreateUser = () => {

    const createUser = useCreateUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form));

        await createUser.mutateAsync({ name: data.user as string  });

        form.reset();
    }

    return (
        <UserForm mode="create" handleSubmit={handleSubmit} mutationResult={createUser} />
    )
}