import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuid } from 'uuid';

import { IUserRegister } from "../components/RegisterUser";
import { api } from "../services/api";

export interface IUser {
    id: string;
    name: string;
    age: number;
}

interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    registerUser(data: IUserRegister): void;
    users: IUser[];
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [users, setUsers] = useState<IUser[]>([]);

    function registerUser(data: IUserRegister): void {
        const newUser = {
            id: uuid(),
            ...data
        };

        // api.defaults.headers.common.authorization = 'teste';

        setUsers([...users, newUser]);
    }

    return (
        <UserContext.Provider value={{
            registerUser,
            users
        }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(): IUserContext {
    const context = useContext(UserContext);

    return context
}