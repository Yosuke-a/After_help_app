"use client";

import { Accounting } from "./components/Accounting";
import { Payment } from "./components/payment";
import { People_of_junior } from "./components/people_of_junior";
import { People_of_all } from "./components/AllPeople";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [acc, setAcc] = useState("");
  const [people_of_junior, setPeople] = useState("");
  const [all_people, setAllPeople] = useState("");
  const [payment, setPayment] = useState("");
  const [additionalPayment, setValue] = useState(0);
  const router = useRouter();

  const acc_calc = (acc: number, people_of_junior: number, payment: number, all_people: number) => {
    if (people_of_junior === all_people) return 0;
    const perPerson = (acc - 800 * people_of_junior) / (all_people - people_of_junior);
    return perPerson - payment;
  };


  useEffect(() => {
    const calculatedValue = acc_calc(Number(acc), Number(people_of_junior), Number(payment), Number(all_people));
    setValue(calculatedValue);
  }, [acc, people_of_junior, payment, all_people]);

  return (
    <div className="h-screen flex items-center justify-center bg-white text-gray-900">
      
      <div className="w-full max-w-2xl bg-white border border-blue-900 shadow-xl rounded-2xl p-10 transition-all">
        
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-blue-900 mb-6">
          アフター計算ソフト
        </h1>

        <div className="flex flex-col gap-4">
          <Accounting acc={acc} setAcc={setAcc} />
          <People_of_junior people_of_junior={people_of_junior} setPeople={setPeople} />
          <Payment payment={payment} setPayment={setPayment} />
          <People_of_all all_people={all_people} setAllPeople={setAllPeople} />
        </div>

        <div className="mt-8 flex flex-col items-center">
          <p className="text-3xl font-semibold text-blue-900">
            💰 支払額: 
            <span className="text-blue-600 text-5xl font-extrabold ml-2">
              {additionalPayment}円
            </span>
            <button onClick={() => router.push("/Todo")}>Todoリストへ</button>
          </p>
        </div>


      </div>

    </div>
  );
}
