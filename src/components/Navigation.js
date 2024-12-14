'use client'

import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";


export function Navigation({navigation}) {
    const pathname = usePathname()

   useEffect(() => {
        document.getElementById('underline').style.left = document.getElementById('active').offsetLeft + (document.getElementById('active').offsetWidth / 2)  + 'px';
   }, [pathname])

   


return (
    <div className="flex menu">
        {navigation.data?.links.map((item) => (
        <div
            key={asText(item.label)}
            id=  {pathname == item.link.url &&
             'active'
            }
        >
            <PrismicNextLink field={item.link}>
            <PrismicText field={item.label} />
            </PrismicNextLink>
          
        </div>
        ))}
        <div id="underline" className="underline">
                                          .
        </div>
    </div>
)
}