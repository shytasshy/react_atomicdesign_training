import styled from "styled-components";
import { UserCard } from "../organisms/user/UserCard";
import { SearchInput } from "../molecures/SearchInput";

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        image: "https://source.unsplash.com/L8KQIPCODV8",
        name: `ほげ${val}`,
        email: "12345@example.com",
        phone: "000-1111-2222",
        company: {
            name: "ほげ株式会社",
        },
        website: "https://google.com",
    };
});

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;
