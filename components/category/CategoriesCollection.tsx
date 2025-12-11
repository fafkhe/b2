"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { productsData } from "@/data/products/productsData";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export interface productsType {
    id: string;
    name : string
    type : string
    description : string
    pictures: string[]
    size : string[]
    color: string[]
    price : number
    wage : number
    count : number
    discount : number
    createdAt : Date
    updatedAt : Date
    deletedAt : Date
}


const CategoriesCollection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: products = {}, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3001/product/suggestion" , {method : 'GET'});
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return (await response.json()).data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  console.log('here' , products)

  const handleCollectionClick = (collectionName: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", collectionName);
    router.push(`shop?${params.toString()}`);
  };

  const womentSets = products['سوتین تک و ست زنانه']

  const mensShort = products['شورت مردانه']

  const womensShort = products['شورت زنانه']


  return (
    <section className="py-16 bg-slate-200 dark:bg-slate-800 ">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
        {/* showing mensShort collection */}
        <div
          onClick={() => handleCollectionClick(mensShort[0].category)}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-white dark:bg-slate-900 shadow-md"
        >
          <h2 className="text-xl md:text-2xl text-center font-semibold my-4 w-full">
            بهترین پیشنهادات برای شما در دسته ی <span className="text-2xl font-bold">شورت ورزشی مردانه</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {mensShort?.slice(0, 4)?.map((watch : productsType) => (
              <div
                key={watch.id}
                className="flex flex-col items-center justify-center text-center gap-2"
              >
                <Image
                  src={watch.pictures[0]}
                  alt={watch.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-rose-600 p-1 text-sm text-white whitespace-nowrap w-fit">
                    {watch.discount}% off
                  </p>
                  <Link
                    href={`/shop/${watch.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className=" font-semibold hover:text-green-500"
                  >
                    {watch.name.slice(0, 15)}...
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full"
            variant={"outline"}
            size={"lg"}
          >
            <ArrowRight /> تمام محصولات
          </Button>
        </div>

        {/* showing womentSets collection */}
        <div
          onClick={() => handleCollectionClick(womentSets[0].category)}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-white dark:bg-slate-900 shadow-md"
        >
          <h2 className="text-xl md:text-2xl text-center font-semibold my-4 w-full">
            بهترین پیشنهادات برای شما در دسته ی  <span className="text-2xl font-bold">شورت ورزشی زنانه</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {womentSets?.slice(0, 4)?.map((headphone : productsType) => (
              <div
                key={headphone.id}
                className="flex flex-col items-center justify-center text-center gap-2"
              >
                <Image
                  src={headphone.pictures[0]}
                  alt={headphone.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-rose-600 p-1 text-sm text-white whitespace-nowrap w-fit">
                    {headphone.discount}% off
                  </p>
                  <Link
                    href={`/shop/${headphone.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className=" font-semibold hover:text-green-500"
                  >
                    {headphone.name.slice(0, 15)}...
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full"
            variant={"outline"}
            size={"lg"}
          >
            <ArrowRight /> تمام محصولات
          </Button>
        </div>

        {/* showing womensShort collection */}
        <div
          onClick={() => handleCollectionClick(womensShort[0].category)}
          className="flex flex-col gap-4 items-start justify-between p-4 md:p-8 rounded-xl bg-white dark:bg-slate-900 shadow-md"
        >
          <h2 className="text-xl md:text-2xl text-center font-semibold my-4 w-full">
            بهترین پیشنهادات برای شما در دسته ی <span className="text-2xl font-bold">ست شورت و سوتین</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 place-content-center w-full">
            {womensShort?.slice(0, 4)?.map((computer : productsType) => (
              <div
                key={computer.id}
                className="flex flex-col items-center justify-center text-center gap-2"
              >
                <Image
                  src={computer.pictures[0]}
                  alt={computer.name}
                  width={100}
                  height={100}
                  className="object-contain rounded-md"
                />
                <div className="flex items-center flex-col">
                  <p className="bg-rose-600 p-1 text-sm text-white whitespace-nowrap w-fit">
                    {computer.discount}% off
                  </p>
                  <Link
                    href={`/shop/${computer.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className=" font-semibold hover:text-green-500"
                  >
                    {computer.name.slice(0, 15)}...
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="mt-4 flex items-center gap-4 text-lg font-semibold w-full"
            variant={"outline"}
            size={"lg"}
          >
            <ArrowRight /> تمام محصولات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCollection;
