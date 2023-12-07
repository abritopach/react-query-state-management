export interface User {
    id: number;
    name: string;
}

const URL_BASE = 'https://jsonplaceholder.typicode.com/users';
const headers = { 'Content-type': 'application/json' };

export const getUsers = async (): Promise<User[]> => {
    const res = await fetch(URL_BASE);
    return res.json();
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const body = JSON.stringify(user);
    const method = 'POST';
    const res = await fetch(URL_BASE, { body, method, headers });
    return res.json();
}

export const editUser = async (user: User): Promise<User> => {
    const body = JSON.stringify(user);
    const method = 'PUT';
    const res = await fetch(`${URL_BASE}/${user.id}`, { body, method, headers });
    return res.json();
}

export const deleteUser = async (id: number): Promise<number> => {
    const method = 'DELETE';
    await fetch(`${URL_BASE}/${id}`, { method });
    return id;
}
