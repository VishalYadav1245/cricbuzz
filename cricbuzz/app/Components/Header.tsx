"use client";
import { useState } from "react";
import { FiMenu, FiX, FiUser, FiPlus, FiCamera } from "react-icons/fi";
import { MdOutlineSportsCricket, MdOutlineLeaderboard } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------------- DESKTOP NAVBAR ---------------- */}
      <div className="hidden md:flex items-center justify-between px-6 py-3 bg-[#009270] text-white relative z-50">
        {/* Left logo */}
        <div className="text-3xl font-bold">cricbuzz</div>

        {/* Desktop Menu */}
        <div className="flex space-x-6 text-[15px]">

          {/* Live Scores */}
          <p className="cursor-pointer">Live Scores</p>

          {/* Schedule */}
          <p className="cursor-pointer">Schedule</p>

          {/* Archives */}
          <p className="cursor-pointer">Archives</p>

          {/* ---------------- NEWS DROPDOWN ---------------- */}
          <div className="relative group">
            <p className="cursor-pointer flex items-center gap-1">
              News ▼
            </p>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-50 shadow-lg py-3">
              {[
                "All Stories",
                "Premium Editorials",
                "Latest News",
                "Topics",
                "Spotlight",
                "Opinions",
                "Specials",
                "Stats & Analysis",
                "Interviews",
                "Live Blogs",
                "Harsha Bhogle",
              ].map((item) => (
                <p key={item} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* ---------------- SERIES DROPDOWN ---------------- */}
          <div className="relative group">
            <p className="cursor-pointer">Series ▼</p>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-65 shadow-lg py-3">
              {[
                "South Africa tour of India, 2025",
                "The Ashes, 2025-26",
                "South Africa A tour of India, 2025",
                "Ireland tour of Bangladesh, 2025",
                "West Indies tour of New Zealand, 2025",
                "New Zealand tour of India, 2026",
                "Pakistan T20I Tri-Series 2025",
                "Womens Big Bash League 2025",
                "Ranji Trophy Elite 2025-26",
              ].map((item) => (
                <p key={item} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  {item}
                </p>
              ))}
              <p className="px-3 py-2 text-blue-600 cursor-pointer">All Series &gt;&gt;</p>
            </div>
          </div>

          {/* ---------------- TEAMS DROPDOWN ---------------- */}
          <div className="relative group">
  <p className="cursor-pointer">Teams ▼</p>

  <div className="absolute left-0 top-full hidden group-hover:flex bg-white text-black shadow-lg p-6 w-[400px]">

    {/* LEFT COLUMN */}
    <div className="w-1/2">
      <p className="font-bold mb-2">Test Teams</p>

      {[
        "India",
        "Afghanistan",
        "Ireland",
        "Pakistan",
        "Australia",
        "Sri Lanka",
        "Bangladesh",
        "England",
        "West Indies",
        "South Africa",
        "Zimbabwe",
        "New Zealand",
      ].map((t) => (
        <p key={t} className="py-1 hover:bg-gray-100 cursor-pointer px-2">
          {t}
        </p>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div className="w-1/2">
      <p className="font-bold mb-2">Associate Teams</p>

      {[
        "Malaysia",
        "Nepal",
        "Germany",
        "Namibia",
        "Denmark",
        "Singapore",
        "Papua New Guinea",
        "Kuwait",
        "Vanuatu",
        "Jersey",
        "Oman",
        "Fiji",
      ].map((t) => (
        <p key={t} className="py-1 hover:bg-gray-100 cursor-pointer px-2">
          {t}
        </p>
      ))}
    </div>
  </div>
</div>


          {/* ---------------- VIDEOS DROPDOWN ---------------- */}
          <div className="relative group">
            <p className="cursor-pointer">Videos ▼</p>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-35 shadow-lg py-3">
              {["All Videos", "Categories", "Playlist"].map((item) => (
                <p key={item} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* ---------------- RANKINGS DROPDOWN ---------------- */}
          <div className="relative group">
            <p className="cursor-pointer">Rankings ▼</p>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-56 shadow-lg py-3">
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">ICC Rankings - Men</p>
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">ICC Rankings - Women</p>
            </div>
          </div>

          {/* ---------------- MORE DROPDOWN ---------------- */}
          <div className="relative group">
            <p className="cursor-pointer">More ▼</p>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black w-56 shadow-lg py-3">
              {[
                "World Test Championship",
                "World Cup Super League",
                "Photos",
                "Mobile Apps",
                "Careers",
                "Contact Us",
              ].map((item) => (
                <p key={item} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* Cricbuzz Plus + User */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-[#009270] font-semibold px-4 py-1 rounded-full">
            Cricbuzz Plus
          </button>
          <FiUser size={26} />
        </div>
      </div>

      {/* ---------------- MOBILE NAVBAR (UNCHANGED) ---------------- */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-[#009270] text-white">
        <FiMenu size={28} className="cursor-pointer" onClick={() => setOpen(true)} />
        <h1 className="text-2xl font-bold">cricbuzz</h1>
        <p className="text-lg cursor-pointer">Log In</p>
      </div>

      {/* ---------------- MOBILE SLIDING MENU ---------------- */}
      {/* ---------------- MOBILE SLIDING MENU ---------------- */}
<div
  className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 
  ${open ? "translate-x-0" : "-translate-x-full"}`}
>

  {/* Header */}
  <div className="bg-[#009270] text-white flex justify-between items-center px-4 py-3">
    <h2 className="text-xl font-semibold">Menu</h2>
    <FiX size={26} className="cursor-pointer" onClick={() => setOpen(false)} />
  </div>

  {/* MENU LIST (SCROLL ENABLED) */}
  <div className="h-[calc(100%-60px)] overflow-y-auto">

    {/* My Account */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <FiUser size={20} />
      <p>My Account</p>
    </div>

    {/* Cricbuzz Plus */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <FiPlus size={20} />
      <p>Cricbuzz Plus</p>
    </div>

    {/* Browse Series */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <MdOutlineSportsCricket size={20} />
      <p>Browse Series</p>
    </div>

    {/* Browse Team */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <FiUser size={20} />
      <p>Browse Team</p>
    </div>

    {/* Browse Player */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <FiUser size={20} />
      <p>Browse Player</p>
    </div>

    {/* Schedule */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <FiCamera size={20} />
      <p>Schedule</p>
    </div>

    {/* Archives */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <FiCamera size={20} />
      <p>Archives</p>
    </div>

    {/* Photos */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <FiCamera size={20} />
      <p>Photos</p>
    </div>

    {/* ICC Men */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <MdOutlineLeaderboard size={20} />
      <p>ICC Rankings - Men</p>
    </div>

    {/* ICC Women */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <MdOutlineLeaderboard size={20} />
      <p>ICC Rankings - Women</p>
    </div>

    {/* Test Championship */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <p>ICC World Test Championship</p>
    </div>

    {/* World Cup */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <p>ICC World Cup Super League</p>
    </div>

    {/* Records */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <p>Records</p>
    </div>

    {/* iPhone */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <p>iPhone</p>
    </div>

    {/* Android */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <p>Android</p>
    </div>

    {/* Careers */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <p>Careers</p>
    </div>

    {/* Advertise */}
    <div className="px-4 py-3 border-b flex gap-3 items-center">
      <p>Advertise with us</p>
    </div>

    {/* About */}
    <div className="px-4 py-3 border-b">
      <p>About Us</p>
    </div>

    {/* Privacy */}
    <div className="px-4 py-3 border-b">
      <p>Privacy Notice</p>
    </div>

    {/* Terms */}
    <div className="px-4 py-3 border-b">
      <p>Terms of Use</p>
    </div>

  </div>



        {/* (rest mobile stays same) */}
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
