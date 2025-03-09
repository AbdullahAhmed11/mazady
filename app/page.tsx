import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
        Mazady Task
      </h1>
      <Link href="/static">
      <h1 className="text-xl font-bold text-center mb-8">
        Static Page
      </h1>
      </Link>
      <Link href="/category-form">
      <h1 className="text-xl font-bold text-center mb-8">
        Category Form Page
      </h1>
      </Link>
     
    </div>
  );
}
