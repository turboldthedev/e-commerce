import { FC } from "react";

interface HitProps {
  hit: {
    objectID: string;
    name: string;
    description: string;
    brand: string;
    categories: string[];
    popularity: number;
    price: number;
    image: string;
  };
}

export const HitProducts: FC<HitProps> = ({ hit }) => {
  return (
    <div key={hit.objectID} className="group relative">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md flex justify-center group-hover:opacity-75">
        <img
          src={hit.image}
          alt={hit.name}
          className="object-cover object-center"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-500">
        <a href="/product/product-test">
          <span className="absolute inset-0" />
          {hit.brand}
        </a>
      </h3>
      <p className="mt-1 text-lg font-medium">
        <span className="text-indigo-600">{hit.name}</span>
      </p>
    </div>
  );
};
