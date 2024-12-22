'use client'

import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export function Navigation({ navigation }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const activeElement = document.querySelector('.desktop-menu #active');
        const underline = document.getElementById('underline');

        if (activeElement && underline) {
            underline.style.left = activeElement.offsetLeft + (activeElement.offsetWidth / 2) + 'px';
        }
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Hamburger Menu for Mobile */}
            <div className="menu">
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
                    {navigation.data?.links.map((item) => (
                        <div
                            key={asText(item.label)}
                        >
                            <PrismicNextLink field={item.link}>
                                <PrismicText field={item.label} />
                            </PrismicNextLink>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="flex menu desktop-menu">
                {navigation.data?.links.map((item) => (
                    <div
                        key={asText(item.label)}
                        id={pathname === item.link.url ? 'active' : undefined}
                    >
                        <PrismicNextLink field={item.link}>
                            <PrismicText field={item.label} />
                        </PrismicNextLink>
                    </div>
                ))}
                <div id="underline" className="underline">.</div>
            </div>
        </>
    );
}