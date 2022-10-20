import { useUserContext } from "../../context/UserContext"

export const ListUsers = () => {
    const { users } = useUserContext();

    return (
        <ul>
            {users.map(({ id, name, age }) => (
                <li key={id}>
                    {id} - {name} - {age}
                </li>
            ))}
        </ul>
    )
}