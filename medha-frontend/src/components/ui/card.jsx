export default function Card({ children }) {
  return (
    <div className="rounded-lg shadow-md border p-4 bg-white">
      {children}
    </div>
  );
}
