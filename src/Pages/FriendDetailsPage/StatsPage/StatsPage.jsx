import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { FriendContext } from "../../../ContextApi/CreateContext";

const StatsPage = () => {
  const { calladd } = useContext(FriendContext);

  const callCount = calladd.filter(item => item.type === "call").length ;
  const textCount = calladd.filter(item => item.type === "text").length ;
  const videoCount = calladd.filter(item => item.type === "video").length;

  const chartData = [
    { name: "Text", value: textCount, fill: "#7E35E1" },
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];

  return (
    <div className="max-w-[1110px] bg-[#FFFFFF] rounded-lg shadow-lg p-8 mt-20 mx-auto">
      <h2 className="text-5xl mb-6 text-[#1F2937] font-bold">
        Friendship Analytics
      </h2>

      <p>By Interaction Type</p>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsPage;