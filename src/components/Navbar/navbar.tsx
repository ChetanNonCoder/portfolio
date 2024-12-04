"use client"

import { useState } from "react"
// import Link from "next/link"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-2xl font-medium text-white "style={{
              fontFamily: 'parkin, sans-serif'
              }}>
            CJ
          </a>
          <button
            className="text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:flex md:gap-8">
            <NavLinks />
          </nav>
        </div>
        {isOpen && (
          <nav className="pb-4 md:hidden">
            <NavLinks mobile />
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {["HOME", "PROJECT", "CONTACT", "PROFILE"].map((item) => (
        <a
          key={item}
          href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
          className={`text-sm font-medium ${
            mobile
              ? "block py-2 text-white hover:text-white/80"
              : "text-white/80 hover:text-white"
          }`}
        >
          {item}
        </a>
      ))}
    </>
  )
}

