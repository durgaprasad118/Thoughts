import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gradient">404</h1>
        <h2 className="text-2xl font-semibold text-white">page not found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
        >
          back to home
        </Link>
      </div>
    </div>
  );
} 