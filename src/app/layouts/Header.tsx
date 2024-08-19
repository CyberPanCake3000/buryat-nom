import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <Image
                src="/logo.png"
                alt="Site Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              О нас
            </Link>
            <Link href="/history" className="text-base font-medium text-gray-500 hover:text-gray-900">
              История
            </Link>

            {/* Culture menu with dropdown */}
            <div className="relative">
              <button className="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none">
                Культура
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <Link href="/culture/food" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Национальная еда
                  </Link>
                  <Link href="/culture/holidays" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Праздники
                  </Link>
                  <Link href="/culture/arts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Искусство и ремесла
                  </Link>
                  <Link href="/culture/traditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Традиции и обычаи
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/language" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Язык
            </Link>
            <Link href="/religion" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Религия
            </Link>
            <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Блог
            </Link>
            <Link href="/library" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Библиотека
            </Link>
            <Link href="/shop" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Магазин
            </Link>
          </nav>

          {/* Search and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Поиск..."
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="text-base font-medium text-gray-500 hover:text-gray-900">
              Язык
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-2xl font-bold text-gray-900">
                    YourLogo
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    О нас
                  </Link>
                  <Link href="/history" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    История
                  </Link>
                  {/* Add other links similar to desktop menu */}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <input
                type="search"
                placeholder="Поиск..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 hover:bg-gray-100">
                Язык
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
