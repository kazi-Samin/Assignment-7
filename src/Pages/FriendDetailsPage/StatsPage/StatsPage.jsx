import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { FriendContext } from "../../../ContextApi/CreateContext";

const StatsPage = () => {
  const navigate = useNavigate();
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
    
    <div className="max-w-[1110px] mt-20 mx-auto">

  {calladd.length === 0 ? (

    
    <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-16 text-center max-w-3xl mx-auto">
      
      <h2 className="text-3xl font-semibold mb-3">
        No Data to Visualize
      </h2>

      <p className="text-gray-500 mb-6">
        Your interaction statistics will appear here once you start making calls or sending messages.
      </p>

      <button
        onClick={() => navigate("/timeline")}
        className="bg-[#244D3F] text-white px-6 py-2 rounded-lg"
      >
        View Timeline
      </button>

    </div>

  ) : (

    
    <div className="bg-white rounded-lg shadow-lg p-8">
      
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
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>

  )}

</div>
  );
};

export default StatsPage;