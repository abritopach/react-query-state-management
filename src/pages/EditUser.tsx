import { useParams } from 'react-router-dom';

export const EditUser = () => {
    const params = useParams()

    const { id } = params

    if (!id) return null

    return (
        <>
            <span>Edit user {id}</span>
        </>
    )
}