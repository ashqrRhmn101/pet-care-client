"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

const Footer = () => {



const FooterYear = () => {
  const [year, setYear] = useState(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
};


  return (
    <div className="bg-primary mt-16 border-t border-gray-300 text-white">
      {/* Top Footer */}
      <footer className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        {/* Brand Info */}
        <aside>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/pet-logo.jpg"
              alt="Logo"
              width={55}
              height={55}
              className="rounded-full"
            />

            {/* Gradient Title (matching theme) */}
            <h1
              className="text-3xl font-extrabold bg-gradient-to-r from-[#ffffff] to-[#F7A703] bg-clip-text text-transparent"
            >
              Pate Care
            </h1>
          </Link>

          <p className="mt-3 text-gray-200 max-w-xs leading-6">
            Our goal is to ensure safe, comfortable, and healthy winter care for
            your beloved pet. Warm clothing, expert vet tips, and premium
            pet-care services — all in one place.
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title text-[#F7A703]">Our Services</h6>
          <a className="link link-hover text-gray-200 hover:text-white">
            Winter Grooming
          </a>
          <a className="link link-hover text-gray-200 hover:text-white">
            Pet Food Guide
          </a>
          <a className="link link-hover text-gray-200 hover:text-white">
            Vet Consultation
          </a>
          <a className="link link-hover text-gray-200 hover:text-white">
            Pet Essentials
          </a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-[#F7A703]">Company</h6>
          <a className="link link-hover text-gray-200 hover:text-white">
            About Us
          </a>
          <a className="link link-hover text-gray-200 hover:text-white">
            Contact
          </a>
          <a className="link link-hover text-gray-200 hover:text-white">
            Privacy Policy
          </a>
          <a className="link link-hover text-gray-200 hover:text-white">FAQs</a>
        </nav>
      </footer>

      {/* Bottom Section */}
      <footer className="footer border-t border-gray-500 px-10 py-5 max-w-7xl mx-auto">
        <aside>
          <p className="text-sm text-gray-200">
            © <FooterYear/> Pate Care
            <br /> Love, care and safety for pets.
          </p>
        </aside>

        {/* Social Icons */}
        <nav className="md:place-self-center md:justify-self-end">
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.facebook.com/ashiqur1099"
              className="hover:text-[#F7A703] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_ashqrrmn/"
              className="hover:text-[#F7A703] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/ashqrrmn"
              className="hover:text-[#F7A703] transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/ashqrrhmn/"
              className="hover:text-[#F7A703] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </footer>

      {/* Developer Credit */}
      <div className="text-center py-4 text-sm text-gray-300">
        Developed with ❤️ by{" "}
        <a
          href="https://github.com/ashqrRhmn101"
          className="font-semibold hover:text-[#F7A703]"
        >
          Md. Lavib Uddin Ashik
        </a>
      </div>
    </div>
  );
};

export default Footer;
