import CategoryForm from "./components/CategoryForm";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Category Selection</h1>
        <CategoryForm />
      </div>
    </div>
  );
}
