import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  function generateRandomNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumber = getRandomNumber(1, 100);

      if (numbers.length === 2) {
        numbers.push(100 - (numbers[0] + numbers[1]));
      } else if (numbers.length === 1) {
        const remainingSum = 100 - randomNumber;
        numbers.push(randomNumber, getRandomNumber(1, remainingSum));
      } else {
        numbers.push(randomNumber);
      }
    }

    return numbers;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [numbers, setNumbers] = useState(null);

  useEffect(() => {
    setNumbers(generateRandomNumbers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (numbers) {
    const labels = ["Basic Tees", "Custom Short Pants", "Super Hoodies"];
    const backgroundColors = ["#98D89E", "#E9A0A0", "#F6DC7D"];

    // const piedata = {
    //   datasets: [
    //     {
    //       label: "# of Votes",
    //       data: numbers,
    //       backgroundColor: backgroundColors,
    //       borderWidth: 1,
    //     },
    //   ],
    // };
    const piedata = {
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      datasets: [
        {
          label: "# of Votes",
          data: numbers,
          backgroundColor: ["#98D89E", "#E9A0A0", "#F6DC7D"],
          borderWidth: 1,
        },
      ],
    };

    return (
      <>
        <div className="w-44">
          <Doughnut data={piedata} />
        </div>
        <div className="flex flex-col justify-between">
          {labels.map((label, index) => (
            <div className="" key={index}>
              <div className="flex gap-2 items-center">
                <div className="font-semibold">{label}</div>
              </div>
              <div className="text-[#858585]">{numbers[index]}%</div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return null;
};

export default Piechart;
