"use client"

export const Accounting = ( { acc, setAcc }: {acc: string, setAcc: (value: string) => void } ) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAcc(e.target.value);
    }
    return(
        
        <>
            <label>支払ってくれた金額を入力してください</label>
            <input 
            value={acc}
            type="text" 
            placeholder="⚪︎円"
            onChange={handleChange} />
        </>
    );
}