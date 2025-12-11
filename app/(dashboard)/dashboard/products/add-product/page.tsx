// import ProductForm from '@/components/dashboard/forms/ProductForm'
import BreadcrumbComponent from '@/components/others/Breadcrumb'
import React from 'react'
import dynamic from 'next/dynamic';

const ProductForm = dynamic(
  () => import('@/components/dashboard/forms/BannerForm'),
  { ssr: false } // This prevents server-side rendering
);


const AddProductPage = () => {
  return (
    <div className='p-2 w-full'>
      <BreadcrumbComponent links={['/dashboard', '/products']} pageText='add product'/>
      <ProductForm />
    </div>
  )
}

export default AddProductPage