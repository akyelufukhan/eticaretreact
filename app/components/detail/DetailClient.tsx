"use client"

import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
import { useState } from "react"
import { Rating } from "@mui/material"
import CardButton from "../general/Button"
import Comment from "./Comment"

export type ProductCardProps = {
    id: string
    name: string
    desc: string
    price: number
    quantity: number
    image: string
    inStock: boolean
}

const DetailClient = ({product}: {product:any}) => {
    const [productCard, setProductCard] = useState<ProductCardProps>({
        id: product.id,
        name: product.name,
        desc: product.description,
        price: product.price,
        quantity: 1,
        image: product.image,
        inStock: product.inStock,
    })

    const increaseFunc = () => {
        if(productCard.quantity == 10) return
        setProductCard(prev => ({...prev, quantity: prev.quantity + 1}))
    }

    const decreaseFunc = () => {
        if(productCard.quantity == 1) return
        setProductCard(prev => ({...prev, quantity: prev.quantity - 1}))
    }

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-3 md:gap-10 justify-center">
            <div className="relative h-[200px] w-[200px] md:h-[400px] md:w-[400px] mb-3 md:mb-0">
                <Image src={product?.image} fill alt=""/>
            </div>
            <div className="w-full md:w-1/2 space-y-3">
                <div className="text-xl md:text-2xl">{product?.name}</div>
                <Rating name="read-only" value={productRating} readOnly/>
                <div className="text-slate-500">{product?.description}</div>
                <div className="flex items-center gap-2">
                    <div>Stok Durumu:</div>
                    {
                        product.inStock ? <div className="text-green-500">Stokta</div> : <div className="text-red-500">Tükendi</div>
                    }
                </div>
                <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} productCard={productCard}/>
                <div className="text-xl md:text-2xl text-orange-600 font-bold">₺{product.price}</div>
                <CardButton small text="Sepete Ekle" onClick={() => {}}/>
            </div>
        </div>
        <div>
            {
                product?.reviews?.map((prd : any) => (
                    <Comment key={prd.id} prd={prd }/>
                ))
            }
        </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient
