import { useState } from "react";
import StopForm from "../components/StopForm";
import CostDisplay from "../components/CostDisplay";
import MapView from "../components/MapView";

export default function Home() {
  const [stops, setStops] = useState<string[]>([]);
  const [currentStop, setCurrentStop] = useState("");

  const addStop = () => {
    if (currentStop.trim() !== "") {
      setStops([...stops, currentStop.trim()]);
      setCurrentStop("");
    }
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Sidebar */}
      <div className="w-1/3 p-6 bg-gray-50 border-r border-gray-300 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">Japlanning</h1>
          <StopForm
            currentStop={currentStop}
            setCurrentStop={setCurrentStop}
            addStop={addStop}
          />
        </div>
        <CostDisplay />
      </div>

      {/* Map Area */}
      <div style={{ height: "100vh" }} className="w-2/3">
        <MapView stops={stops} />
      </div>
    </div>
  );
}
