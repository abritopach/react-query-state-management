import { useCreateUser } from "../hooks/custom/UseUser"

export const CreateUser = () => {

    const createUser = useCreateUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const data = Object.fromEntries(new FormData(form))

        await createUser.mutateAsync({ name: data.user as string  })

        form.reset()
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} className='mt'>
                <input name='user' type="text" placeholder='Add new user' />
                {createUser.isPending && <span>creating user...</span>}
                <button>Add User</button>
                {createUser.isSuccess && <span>User created successfully ✅</span>}
                {createUser.isError && <span>Ups! it was an error 🚨</span>}
            </form>
        </div>
    )
}