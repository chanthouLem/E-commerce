import { MdOutlineStarOutline } from "react-icons/md";
import { ProductProps } from "../../type"
import AddToCartBtn from "./AddToCartBtn";
import { useState } from "react";

interface Props{
    item:ProductProps;
}
const ProductCard = ({item}:Props) => {
    const [isOpen,setIsOpen] =useState(true);
    const open =()=>{
        setIsOpen(true);
    }
    const close = ()=>{
        setIsOpen(false);
    }
    const percentage = ((item?.regularPrice - item?.discountedPrice)/item?.regularPrice)*100;
  return (
    <div className="border border-gray-200 rounded-l p-1
        overflow-hidden hover:border-black duration-200 cursor-pointer">
        <div className="w-full h-60 relative p-2 group">
            <span 
            onClick={open}
            className="bg-black text-skyText absolute left-0 right-0
            w-16 text-xs text-center py-1 rounded-md font-semibold inli z-10">
                save {percentage.toFixed(0)}%
            </span>
            <img src={item?.images[0]} alt="productImage"
                className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"
            />
            {/* ProductCardSideNav */}
        </div>
        <div className="flex flex-col gap-2 px-2 pb-2">
            <h3 className="text-xs uppercase font-semibold text-lightText">{item?.overView}</h3>
            <h2 className="text-lg font-bold line-clamp-2">{item?.name}</h2>
            <div className="text-base text-lightText flex items-center">
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
            </div>
            <AddToCartBtn />
        </div>
    </div>
  )
}

export default ProductCard