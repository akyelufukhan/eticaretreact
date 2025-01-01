"use client"

import Image from "next/image"

const Logo = () => {
  return (
    //<div className="bg-orange-700 px-2 py-1 rounded-md text-lg md:text-2xl cursor-pointer">Cunda <span>Mezze</span></div>
    <div className="h-[90px] relative w-[156px] cursor-pointer">
      <Image src={"/cm-logo.webp"} fill alt=""/>
    </div>
  )
}

export default Logo
