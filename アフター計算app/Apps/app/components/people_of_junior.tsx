"use client"

export const People_of_junior = ({people_of_junior, setPeople}: {people_of_junior: string, setPeople: (value: string) => void}) => {
    const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPeople(e.target.value);
    }
    return(
        <>
            <label>参加した後輩の人数を入力してください</label>
            <input
            value={people_of_junior}
            type="text"
            placeholder="⚪︎人"
            onChange={handlePeople}
            />
        </>
    );
}