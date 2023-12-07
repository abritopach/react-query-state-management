import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User, createUser, deleteUser, editUser, getUsers } from "../../api/UserApi";

export const useGetUsers = () => {
    return useQuery({ queryKey: ['fetch users'], queryFn: getUsers});
}
export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationKey: ['create user'],
            mutationFn: createUser,
            onSuccess: (user: User) => {
                queryClient.setQueryData(['fetch users'],
                    (prevUsers: User[] | undefined) => prevUsers ? [user, ...prevUsers] : [user]
                )
            }
        }
    )
}

export const useDeleteUser = () => {

    const queryClient = useQueryClient();

    return useMutation({
            mutationKey: ['delete user'],
            mutationFn: deleteUser,
            onSuccess: (id) => {
                queryClient.setQueryData(['fetch users'],
                    (prevUsers: User[] | undefined) => prevUsers ? prevUsers.filter(user => user.id !== id) : prevUsers
                    // queryClient.invalidateQueries([key])
                )
            }
        }
    );
}

export const useEditUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['edit user'],
        mutationFn: editUser,
        onSuccess: (user_updated: User) => {
            queryClient.setQueryData(['fetch users'],
                (prevUsers: User[] | undefined) => {
                    if (prevUsers) {
                        prevUsers.map(user => {
                            if (user.id === user_updated.id) {
                                user.name = user_updated.name
                            }
                            return user
                        })
                    }
                    return prevUsers
                }
            )
        }
    })
}