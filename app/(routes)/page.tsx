"use client";

import {
  categories,
  collections,
  offers,
  testimonials,
  trendingProducts,
} from "@/constant";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="mx-auto max-w-7xl lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {offers.map((offer) => (
                  <li key={offer.name} className="flex flex-col"> 
                    <a
                      href={offer.href}
                      className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10">
                      <p className="text-sm text-gray-500">{offer.name}</p>
                      <p className="font-semibold text-gray-900">
                        {offer.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Featured section */}

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      Focus on what matters
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      All the charts, datepickers, and notifications in the
                      world can't beat checking off some items on a paper card.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700">
                        Shop Productivity
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900">
              Shop by Category
            </h2>
            <a
              href="/products"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-96 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={category.imageSrc}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>
        {/* Trending products */}
        <section aria-labelledby="trending-heading" className="">
          <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
              <h2
                id="trending-heading"
                className="text-2xl font-bold tracking-tight text-gray-900">
                Trending products
              </h2>
              <a
                href="/products"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                See everything
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="relative mt-8">
              <div className="relative w-full overflow-x-auto">
                <ul
                  role="list"
                  className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
                  {trendingProducts.map((product) => (
                    <li
                      key={product.id}
                      className="inline-flex w-64 flex-col text-center lg:w-auto">
                      <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-auto w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500">
                            {product.color}
                          </p>
                          <h3 className="mt-1 font-semibold text-gray-900">
                            <a href={product.href}>
                              <span className="absolute inset-0" />
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-gray-900">{product.price}</p>
                        </div>
                      </div>

                      <h4 className="sr-only">Available colors</h4>
                      <ul
                        role="list"
                        className="mt-auto flex items-center justify-center space-x-3 pt-6">
                        {product.availableColors.map((color) => (
                          <li
                            key={color.name}
                            className="h-4 w-4 rounded-full border border-black border-opacity-10"
                            style={{ backgroundColor: color.colorBg }}>
                            <span className="sr-only">{color.name}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 px-4 sm:hidden">
              <a
                href="/products"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                See everything
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <h2
            id="collection-heading"
            className="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Collection
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class designers to create a
            collection inspired by the natural world.
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <a
                key={collection.name}
                href={collection.href}
                className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Sale and testimonials */}
        <div className="relative overflow-hidden mt-24">
          {/* Decorative background image and gradient */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
          </div>

          {/* Sale */}
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Get 25% off during our one-time sale
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                Most of our products are limited releases that won't come back.
                Get your favorite items while they're in stock.
              </p>
              <a
                href="#"
                className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto">
                Get access to our one-time sale
              </a>
            </div>
          </section>

          {/* Testimonials */}
          <section
            aria-labelledby="testimonial-heading"
            className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="testimonial-heading"
                className="text-2xl font-bold tracking-tight text-gray-900">
                What are people saying?
              </h2>

              <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial.id} className="sm:flex lg:block">
                    <svg
                      width={24}
                      height={18}
                      viewBox="0 0 24 18"
                      aria-hidden="true"
                      className="flex-shrink-0 text-gray-300">
                      <path
                        d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                      <p className="text-lg text-gray-600">
                        {testimonial.quote}
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        {testimonial.attribution}
                      </cite>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
