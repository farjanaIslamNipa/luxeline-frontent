/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import assets from '@/assets/index'
import {cn} from "@/lib/utils";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "../ui/hover-card";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="bg-brand shadow relative z-50">
      <div className="custom-container text-brandLighter">
        <nav className="flex justify-between items-center h-[60px]">
            <div className="flex items-center h-full">
              <Link href="/" className="pr-3 h-full flex items-center">
                <Image src={assets.global.logo} alt="Logo" className="h-8 lg:h-10 w-auto" />
              </Link>
              <div className="px-4 bg-brandLight h-full flex items-center">
                MEN's Wear
              </div>
            </div>
            <div
              className={cn(
                "w-0 md:w-auto small-device-collapse-nav bg-opacity-50 md:bg-opacity-100",
                { "w-full": expand }
              )}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 pt-4 md:pt-0 w-[70%] md:w-full h-screen md:h-auto">
                {expand && (
                  <div className="absolute right-6 top-5 block md:hidden">
                    <button
                      onClick={() => setExpand(!expand)}
                      className="bg-white transition-all duration-150 hover:bg-opacity-100 rounded p-[6px]"
                    >
                      {/* <Image src={close} alt="Close" className="h-4" /> */}
                    </button>
                  </div>
                )}
                <div className="pl-5 pb-6 block md:hidden">
                  <Image src={assets.global.logo} alt="Logo" className="h-14" />
                </div>
                <div className="flex items-center gap-6">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image src={assets.icons.accountIcon} alt="My Account" className="h-[29px] w-auto mt-1 cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className="">My Account</p>
                      <p className="">My Order</p>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image src={assets.icons.wishlistIcon} alt="Wishlist" className="h-[30px] w-auto mt-1 cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className="text-center">No wishlist added !!</p>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image src={assets.icons.cartIcon} alt="Cart" className="h-[23px] w-auto cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className="text-center">Your cart is empty !!</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>

              </div>
            </div>
            <div className="block md:hidden">
              <button onClick={() => setExpand(!expand)}>
                {/* <Image src={menuIcon} alt="Menu" className="h-5" /> */}
              </button>
            </div>
          </nav>
      </div>
    </div>
  );
};

export default Navbar;