import SectionTitle from "@/utils/SectionTitle";
import React from "react";

const TopCategory = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto mt-10 py-5">
      <SectionTitle title="Top Category" btnName="View More" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <h1>Fiction</h1>
        <h1>Non-Fiction</h1>
        <h1>Academic & Education</h1>
        <h1>History</h1>
        <h1>Religion & Spirituality</h1>
      </div>
    </div>
  );
};

export default TopCategory;
