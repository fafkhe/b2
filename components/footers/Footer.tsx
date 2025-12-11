import React from "react";
import { Separator } from "../ui/separator";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from 'next/link'
import { dummyCategories } from "@/data/category/categoryData";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Trust Seals Section */}
        <div className="bg-gray-900 p-6 rounded-lg mb-8 flex flex-wrap justify-center items-center gap-6">
          {/* Enamad Trust Seal */}
          <div className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div
              dangerouslySetInnerHTML={{
                __html: `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=682857&Code=5rG7McWuWwFNcp8y2Q8O2byUdTB3XwaG'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=682857&Code=5rG7McWuWwFNcp8y2Q8O2byUdTB3XwaG' alt='' style='cursor:pointer' code='5rG7McWuWwFNcp8y2Q8O2byUdTB3XwaG'></a>`,
              }}
            />
            <p className="text-xs text-gray-600 mt-2 text-center">نماد اعتماد الکترونیکی</p>
          </div>          
          {/* Add more trust seals if needed */}
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <div className="h-16 w-48 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">پرداخت امن</span>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">پرداخت آنلاین امن</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <div className="h-16 w-48 bg-green-100 rounded flex items-center justify-center">
              <span className="text-green-600 font-bold text-lg">تحویل سریع</span>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">ارسال به سراسر کشور</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="p-4 md:p-8 flex flex-col md:flex-row flex-wrap gap-8 md:gap-4 justify-between">
          {/* Company Info */}
          <div className="flex flex-col space-y-4 mb-8 md:mb-0 md:w-1/4">
            <Logo />
            <p className="text-gray-300">
              فروشگاه تخصصی لباس زیر با کیفیت بالا و قیمت مناسب
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-blue-400" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-blue-400" />
                <span>info@sunshop.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>تهران، خیابان ولیعصر</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaFacebook size={20}/>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors"
              >
                <FaTwitter size={20}/>
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
              >
                <FaInstagramSquare size={20}/>
              </Link>
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-col space-y-4 md:w-1/5">
            <h3 className="text-xl font-semibold border-b-2 border-blue-500 pb-2">دسته‌بندی‌ها</h3>
            <ul className="space-y-2">
              {dummyCategories.map(category => (
                <li key={category.name}>
                  <Link
                    href={`/shop?category=${category.name}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4 md:w-1/5">
            <h3 className="text-xl font-semibold border-b-2 border-blue-500 pb-2">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  همه محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  بلاگ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="flex flex-col space-y-4 md:w-1/5">
            <h3 className="text-xl font-semibold border-b-2 border-blue-500 pb-2">پشتیبانی</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  مرکز راهنمایی
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  بازگرداندن کالا
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  شرایط ارسال
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  شرایط استفاده
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  حریم خصوصی
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-8 p-6 bg-gray-900 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold">عضویت در خبرنامه</h3>
              <p className="text-gray-300 mt-2">از جدیدترین تخفیف‌ها و محصولات با خبر شوید</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="ایمیل خود را وارد کنید"
                className="px-4 py-2 rounded-lg text-gray-800 w-full md:w-64"
                required
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>
        
        {/* Separator */}
        <Separator className="my-8 bg-gray-600" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="text-center md:text-right mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} فروشگاه سان شاپ. تمامی حقوق محفوظ است.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">قوانین</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">حریم خصوصی</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">نقشه سایت</Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-gray-500">طراحی و توسعه شده با ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;