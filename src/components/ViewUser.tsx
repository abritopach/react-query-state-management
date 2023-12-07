import { User } from "../api/UserApi"
import { useGetUsers } from "../hooks/custom/UseUser"

export const ViewUser = ({ id }: Pick<User, 'id'>) => {

    const getUsers = useGetUsers()

    const userSelected = getUsers.data?.find(user => user.id === +id)

    if (!userSelected) return null

    return (
        <>
            <h1>Edit user: {id}</h1>
            <span>User name: <b>{userSelected?.name}</b></span>
        </>
    )
}