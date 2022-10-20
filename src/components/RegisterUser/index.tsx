import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { IUser, useUserContext } from '../../context/UserContext';
import { api } from '../../services/api';

export type IUserRegister = Omit<IUser, 'id'>;

export const RegisterUser = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const { registerUser } = useUserContext();
    const { handleSubmit, register } = useForm<IUserRegister>();
 
    // function teste() {
    //     try {
    //         api.post('');
    //     } catch (error) {
    //         if(axios.isAxiosError(error)) {
    //             error.
    //         }

    //         console.error(error);
    //     }
    // }

    // divRef.current.




    return (
        <>
            <div ref={divRef}>
            </div>
            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" {...register('name')} />
                <input type="text" {...register('age')} />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}