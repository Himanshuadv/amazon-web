'use client'
import React,{useState} from "react";
import Image from "next/image";
import { StarIcon  } from "@heroicons/react/20/solid"

function Product({ id, title, price, description, image, category, rating }) {
  const rate = Math.floor(rating.rate+1);
  const [hasPrime] = useState(Math.random() <0.5)
  

  return (
    <div className="relative flex flex-col m-0.5 bg-white border border-gray-300 rounded-tl-md rounded-tr-md z-30 p-4 text-sm">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}</p>
      <div className="flex flex-col items-center">
      <Image
        src={image}
        height={120}
        width={120}
        alt="Image"
        objectFit="contain"
        
        
      />
      </div>
      
      <h4 className="mt-5">{title}</h4>
      <div className="flex">
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="text-yellow-500 h-3 " />
          ))}
      </div>
      <p className="text-xs mt-auto my-2 line-clamp-2">{description}</p>
      <p className="mt-auto mb-5 font-semibold">${price}</p>
   {/* {hasPrime &&<div>
    <p>Has Prime delivery</p>
   </div>} */}
  
  <button className="mt-auto focus:outline-none button">Add to Cart</button>
 
    </div>
  );
}

export default Product;
