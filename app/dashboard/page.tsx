"use client";

import { useState } from "react";
import SimpleBarChart from "./graph";
import Slider from "./slider";
import PromoCard from "./card";
import OptionSelect from "./ipSelect";

export default function DashboardPage() {
  // const [interestPayout, setInterestPayout] = useState("Quartely");
  const [amount, setAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [ror, setRor] = useState(5);
  const [timePeriod, setTimePeriod] = useState(1);

  const ipOptions = [
    { label: "Quarterly", value: "quarterly" },
    { label: "Half-Yearly", value: "half-yearly" },
    { label: "Yearly", value: "yearly" },
    { label: "At-Maturity", value: "at-maturity" },
  ];

  // 2. Set up the active state
  const [intPayout, setIntPayout] = useState("quarterly");
  const [graphData, setGraphData] = useState([]);

  const calculateAll = () => {
    const p = Number(amount);
    const r = Number(ror);
    const t = Number(timePeriod);
    let dv = 1;
    let isM = false;
    const temp = [];
    if (intPayout === "quaterly") {
      dv = 4;
    } else if (intPayout === "half-yearly") {
      dv = 2;
    } else if (intPayout === "at-maturity") {
      dv = 4;
      isM = true;
    }

    for (let i = 1; i <= Number(timePeriod); i++) {
      if (!isM || i===Number(timePeriod))
            temp.push({ "year": i, "revenue": +(p * (1 + r / (dv * 100)) ** (dv * i)).toFixed(2) });
      else temp.push({"year":i,"revenue": +p.toFixed(2)})
    }
    setGraphData(temp);

    const final = p * (1 + r / (dv * 100)) ** (dv * t);

    console.log("amount:", amount);
    console.log("ROR:", ror);
    console.log("time Period:", timePeriod);
    console.log("finalAmount:", finalAmount);
    setFinalAmount(final);
    // calculateFinalValue();
  };

  return (
    <div className="flex flex-row  grid-cols-2 flex-1 items-center justify-center">
      {/* left */}
      <div className="flex flex-col">
        <header>
          <h2 className="text-3xl font-medium">FD Calculator</h2>
          <p>
            Estimates how much your fixed deposit investment will grow over time
          </p>
        </header>

        <Slider
          title={"Fixed Deposit"}
          mini={10000}
          maxi={5000000}
          steps={1000}
          handleParentVal={setAmount}
        />
        <Slider
          title={"Rate of Return(%)"}
          mini={5}
          maxi={30}
          steps={0.1}
          handleParentVal={setRor}
        />
        <div className="flex flex-row justify-around">
          <div className="flex flex-col gap-2">
            <h4>Interest Payout</h4>
            <p>Cumulate Rate of Return is:</p>
          </div>

          <OptionSelect
            options={ipOptions}
            selectedValue={intPayout}
            onChange={setIntPayout}
          />
        </div>
        <Slider
          title={"Time Period"}
          mini={1}
          maxi={30}
          steps={1}
          handleParentVal={setTimePeriod}
        />

        <button
          className="bg-amber-50 px-4 py-2 text-black rounded-2xl"
          onClick={calculateAll}
        >
          Calculate
        </button>
      </div>

      <div className="flex flex-col">
        {/* amount calculations */}
        <div className="flex flex-row w-full justify-around items-center">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-md">Maturity Amount</h3>
            <p className="font-bold text-4xl"> ₹ {finalAmount.toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-md">Interest Earned</h3>
            <p className="font-bold text-4xl">
              {" "}
              ₹ {Math.max(0,Number((finalAmount - amount).toFixed(2)))}
            </p>
          </div>
        </div>
        <SimpleBarChart data={graphData} />
        <div className="w-full h-0.5 bg-amber-50"></div>
        {/* cards section */}
        <div>
          <PromoCard
            title={"Check Suitable Products For Your Investment "}
            caption={"exclusively for you"}
            isLabel={true}
            label={"personalised"}
          />
          <PromoCard
            title={"Need Help Finding Right Product ?"}
            caption={"Get Guidance From Wealth Manager"}
            isLabel={false}
            label={null}
          />
        </div>
      </div>
    </div>
  );
}
