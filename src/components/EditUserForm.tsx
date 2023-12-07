import { User } from "../api/UserApi"
import { useEditUser } from "../hooks/custom/UseUser"

export const EditUserForm = ({ id }: Pick<User, 'id'>) => {

    const editUser = useEditUser()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const data = Object.fromEntries(new FormData(form))
        await editUser.mutateAsync({ name: data.user as string, id })
        form.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='user' type="text" placeholder='Update this user' />
            {editUser.isPending && <span>updating user...</span>}
            <button>Update User</button>
            {editUser.isSuccess && <span>User updated successfully ✅</span>}
            {editUser.isError && <span>Ups! it was an error 🚨</span>}
        </form>
    )
}