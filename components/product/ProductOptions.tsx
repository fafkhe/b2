"use client";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useCartStore from "@/store/cartStore";
import useWishlistStore from "@/store/wishlistStore";
import { showToast } from "@/lib/showToast";
import { Product } from "@/types";
import { useProductQuickViewStore } from "@/store/productQuickViewStore";
import Loader from "../others/Loader";
import { productsType } from "../category/CategoriesCollection";

const ProductOptions = ({ product }: { product: productsType }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { openModal } = useProductQuickViewStore();
  const { pictures, name } = product;

  const { addToCart } = useCartStore();
  const { addToWishlist, isInWishlist } = useWishlistStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loader />;
  }

  // const handleAddToCart = () => {
  //   addToCart({ ...product, quantity: 1, selectedColor: "" });
  //   showToast("Item Added To Cart", images[0], name);
  // };

  // const handleAddToWishList = () => {
  //   if (isInWishlist(product.id)) {
  //     showToast("Item Added To Wishlist", images[0], name);
  //   } else {
  //     addToWishlist(product);
  //     showToast("Item Already Exist In Wishlist", images[0], name);
  //   }
  // };

  // const handleProductQuickView = () => {
  //   openModal(product);
  // };

  return (
    <div
      className="flex items-center flex-col gap-2"
      onClick={(e) => e.preventDefault()}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={()=>{
                console.log('add to cart')
              }}
              className="p-2 rounded-lg mr-1 bg-slate-900 text-white"
            >
              <Heart />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>افزودن به واچ لیست</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={()=>{
                console.log('add to cart')
              }}
              className="p-2 rounded-lg mr-1 bg-slate-900 text-white"
            >
              <Eye />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>بازدید سریع</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={()=>{
                console.log('add to cart')
              }}
              className="p-2 rounded-lg mr-1 bg-slate-900 text-white"
            >
              <ShoppingBag />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>افزودن به سبد خرید</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ProductOptions;
