import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BannerOne = () => {
  // get banner data from backend and show here

  return (
    <section className="relative w-full bg-gradient-to-r from-pink-400 to-rose-500 py-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full translate-y-32 -translate-x-32"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        <div className="flex flex-col justify-center items-center text-center lg:text-right lg:w-1/2 lg:items-end">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
            🎀 تخفیف ویژه فصل جدید 🎀
          </span>
          
          <h2 className="text-3xl lg:text-5xl text-center lg:text-right font-bold text-white mt-4 leading-tight">
            کشف دنیای لباس زیر
            <br className="hidden lg:block" />
            <span className="text-yellow-300"> با کیفیت و راحتی بی‌نظیر!</span>
          </h2>
          
          <p className="text-white/90 text-lg mt-4 max-w-lg">
            مجموعه کاملی از لباس زیر زنانه و مردانه با بهترین جنس پارچه و طراحی مدرن
          </p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 bg-white/30 rounded-full text-white text-sm">شورت پنبه‌ای</span>
            <span className="px-3 py-1 bg-white/30 rounded-full text-white text-sm">سوتین توری</span>
            <span className="px-3 py-1 bg-white/30 rounded-full text-white text-sm">لباس زیر ورزشی</span>
            <span className="px-3 py-1 bg-white/30 rounded-full text-white text-sm">ست‌های زنانه</span>
          </div>
          
          <Link 
            href="/shop?category=all-underwear" 
            className="flex items-center justify-center gap-2 mt-8 px-10 py-4 hover:ring-2 hover:ring-white hover:ring-opacity-50 text-lg font-semibold rounded-full bg-white text-rose-600 hover:bg-rose-600 hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            <span>همین الان خرید کنید</span>
            <ArrowRight className="mr-2" size={24} />
          </Link>
          
          <div className="mt-6 flex items-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">تحویل سریع</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm">ضمانت بازگشت</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">پشتیبانی 24/7</span>
            </div>
          </div>
        </div>
        
        <div className="relative lg:w-1/2 lg:mt-0">
          <div className="rounded-xl overflow-hidden relative w-[20rem] lg:w-[30rem] h-[15rem] lg:h-[25rem]">
            <Image 
              src="/images/banner/38.png" 
              className="object-contain transform hover:scale-105 transition-transform duration-500" 
              // fill 
              width={300}
              height={300}
              alt="لباس زیر با کیفیت"
              priority
            />
          </div>
          
          {/* Floating price tag */}
          <div className="absolute top-4 lg:left-80 bg-white rounded-xl p-3 shadow-xl animate-bounce">
            <div className="text-center">
              <span className="text-xs text-gray-500">از</span>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-rose-600">120,000</span>
                <span className="text-sm text-gray-500 mr-1">تومان</span>
              </div>
            </div>
          </div>
          
          {/* Animated elements */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-16 left-16 w-12 h-12 bg-yellow-300 rounded-full opacity-40 animate-bounce"></div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default BannerOne;