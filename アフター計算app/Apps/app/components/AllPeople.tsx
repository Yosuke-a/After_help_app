"use client"

export const People_of_all = ({all_people, setAllPeople}: {all_people: string, setAllPeople: (value: string) => void}) => {
    const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAllPeople(e.target.value);
    }
    return(
        <>
            <label>参加した全員の人数を入力してください {all_people}人</label>
            <input
            value={all_people}
            type="text"
            placeholder="⚪︎人"
            onChange={handlePeople}
            />
        </>
    );
}