import StopForm from "../components/StopForm";
import CostDisplay from "../components/CostDisplay";
import MapView from "../components/MapView";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar */}
      <div className="w-1/3 p-6 bg-gray-50 border-r border-gray-300 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">Japlanning</h1>
          <StopForm />
        </div>
        <CostDisplay />
      </div>

      {/* Map Area */}
      <div className="w-2/3 h-screen">
        <MapView />
      </div>
    </div>
  );
}
