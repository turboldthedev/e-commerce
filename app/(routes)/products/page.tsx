"use client";

import { index } from "@/algolia/config";
import RootLayout from "@/components/layout";
import { HitProducts } from "@/components/HitProducts";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import Layout from "@/components/layout";

const sortOptions = [
  { name: "Most Popular", href: "#" },
  { name: "Best Rating", href: "#" },
  { name: "Newest", href: "#" },
  { name: "Price: Low to High", href: "#" },
  { name: "Price: High to Low", href: "#" },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "hats", label: "Hats" },
      { value: "bundles", label: "Bundles" },
      { value: "carry", label: "Carry" },
      { value: "objects", label: "Objects" },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "clothing-company", label: "Clothing Company" },
      { value: "fashion-inc", label: "Fashion Inc." },
      { value: "shoes-n-more", label: "Shoes 'n More" },
      { value: "supplies-n-stuff", label: "Supplies 'n Stuff" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "blue", label: "Blue" },
      { value: "olive", label: "Olive" },
      { value: "tan", label: "Tan" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

interface HitProps {
  objectID: string;
  name: string;
  description: string;
  brand: string;
  categories: string[];
  popularity: number;
  price: number;
  image: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function AllProduct() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hits, setHits] = useState<HitProps[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const hitsPerPage = 20;
  const [nbPages, setNbPages] = useState<number | undefined>(undefined);
  const pagesToShow = 5;
  const totalPages = nbPages || 1;
  const startPage = Math.max(0, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages - 1, startPage + pagesToShow - 1);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  useEffect(() => {
    async function performSearch() {
      try {
        const response = await index.search<HitProps>(inputValue, {
          hitsPerPage,
          page: currentPage,
        });
        console.log(response);
        setNbPages(response.nbPages);
        setTotalItems(response.nbHits);
        setHits(response.hits);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Algolia search error:", error);
      }
    }
    performSearch();
  }, [inputValue, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (

      <main
        className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="order-history-heading">
        <div className="max-w-xl">
          <h1
            id="order-history-heading"
            className="text-3xl font-bold tracking-tight text-gray-900">
            All products
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>
        <section
          aria-labelledby="filter-heading"
          className="border-t border-gray-200 pt-6 mt-5">
          <h2 id="filter-heading" className="sr-only">
            Product filters
          </h2>

          <div className="flex items-center justify-between">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.href}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium text-gray-900"
                            )}>
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <form
              className="relative flex flex-1 outline-none  border-gray-400 mb-0  px-5 items-center"
              action="/all"
              method="GET">
              {/* <label htmlFor="search-field" className="">
                Search
              </label> */}

              <MagnifyingGlassIcon
                className="pointer-events-none  left-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="search-field"
                onChange={(e) => setInputValue(e.target.value)}
                className="outline-none block h-full w-full border-0 py-2 pl-3 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                type="search"
                name="search"
              />
            </form>
            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setMobileFiltersOpen(true)}>
              Filters
            </button>

            <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
              {filters.map((section, sectionIdx) => (
                <Popover
                  as="div"
                  key={section.name}
                  id="menu"
                  className="relative inline-block text-left">
                  <div>
                    <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <span>{section.name}</span>
                      {sectionIdx === 0 ? (
                        <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                          1
                        </span>
                      ) : null}
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              //   defaultChecked={option.checked}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}
            </Popover.Group>
          </div>
        </section>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {hits?.map((hit) => (
            <HitProducts hit={hit} key={hit.objectID}></HitProducts>
          ))}
        </div>{" "}
        {nbPages && (
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
            <div className="flex flex-col sm:flex-row sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {currentPage * hitsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min((currentPage + 1) * hitsPerPage, totalItems)}
                  </span>{" "}
                  of <span className="font-medium">{totalItems}</span> results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination">
                  <a
                    href="#"
                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      currentPage === 0
                        ? "cursor-not-allowed"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handlePageChange(0)}>
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  {startPage > 0 && (
                    <>
                      {startPage > 1 && (
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                          ...
                        </span>
                      )}
                    </>
                  )}
                  {pages.map((page) => (
                    <a
                      key={page}
                      href="#"
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        page === currentPage
                          ? "bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      }`}
                      onClick={() => handlePageChange(page)}>
                      {page + 1}
                    </a>
                  ))}
                  {endPage < totalPages - 1 && (
                    <>
                      {endPage < totalPages - 2 && (
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                          ...
                        </span>
                      )}
                    </>
                  )}
                  <a
                    href="#"
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      currentPage === totalPages - 1
                        ? "cursor-not-allowed"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handlePageChange(totalPages - 1)}>
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </main>

  );
}
