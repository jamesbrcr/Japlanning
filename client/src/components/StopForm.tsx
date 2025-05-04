type StopFormProps = {
  currentStop: string;
  setCurrentStop: (val: string) => void;
  addStop: () => void;
};

export default function StopForm({ currentStop, setCurrentStop, addStop }: StopFormProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Add a Stop:</label>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={currentStop}
          onChange={(e) => setCurrentStop(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="e.g., Tokyo"
        />
        <button
          onClick={addStop}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}
