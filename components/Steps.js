import { useRouter } from "next/router";

const steps = [
  { step: 1, name: "Menú", url: "/" },
  { step: 2, name: "Resumen", url: "/sumary" },
  { step: 3, name: "Total", url: "/total" },
];

const Steps = () => {
  const route = useRouter();

  const Progress = () => {
    let value;
    if (route.pathname === "/") {
      value = 1;
    } else if (route.pathname === "/sumary") {
      value = 50;
    } else {
      value = 100;
    }
    return value;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            className="text-2xl font-bold"
            key={step.step}
            onClick={() => {
              route.push(step.url);
            }}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
          style={{ width: `${Progress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
