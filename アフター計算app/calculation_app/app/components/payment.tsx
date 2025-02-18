"use client"

export const Payment = ({payment, setPayment}: {payment: string, setPayment: (value: string) => void}) => {
    const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayment(e.target.value);
    }
    return(
        <>
            <label>自分が支払った金額を入力してください(任意)</label>
            <input
            value={payment}
            type="text"
            placeholder="⚪︎円"
            onChange={handlePayment}
            />
        </>
    );
}