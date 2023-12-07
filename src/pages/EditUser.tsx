import { useParams } from 'react-router-dom';
import { DeleteUser } from '../components/DeleteUser';
import { ViewUser } from '../components/ViewUser';
import { EditUserForm } from '../components/EditUserForm';

export const EditUser = () => {
    const params = useParams();

    const { id } = params;

    if (!id) return null;

    return (
        <>
            <ViewUser id={+id} />
            <EditUserForm id={+id} />
            <DeleteUser id={+id} />
        </>
    )
}