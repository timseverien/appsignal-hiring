export default function Card({ children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm divide-y divide-solid">
      {children}
    </div>
  );
}
