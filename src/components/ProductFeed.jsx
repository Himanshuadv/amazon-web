
import React from "react";
import Product from "./Product";
import poster from '../../public/poster1.jpg'
import Image from "next/image";


const ProductFeed = ({ products }) => {
 
   
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-56 mx-auto" >
      {
        products.slice(0,4).map(({id,title,price,description,category,image,rating}) => <Product key={id}

          title = {title}
          price = {price}
          description = {description}
          category ={category}
          image = {image}
          rating = {rating}
        />)}

    
     
    
    <div className="md:col-span-2">
    {
        products.slice(4,5).map(({id,title,price,description,category,image,rating}) => <Product key={id}

          title = {title}
          price = {price}
          description = {description}
          category ={category}
          image = {image}
          rating = {rating}
        />)}

    </div>
    <Image src={poster} alt="hello" className="md:col-span-full m-2"/> 
   
    {
        products.slice(5,products.length-1).map(({id,title,price,description,category,image,rating}) => <Product key={id}

          title = {title}
          price = {price}
          description = {description}
          category ={category}
          image = {image}
          rating = {rating}
        />)}

   
    </div>
    
  );
};

export default ProductFeed;
