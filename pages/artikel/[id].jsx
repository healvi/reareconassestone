import React from "react";
import Navbar from "../../components/molekul/Navbar";
import { useRouter } from "next/router";
const ArtikelDetails = () => {
  const router = useRouter();
  const data = router.query;
  return (
    <div>
      <Navbar />
      <div className="p-[20px]">
        <h1 className="font-bold">{data.title}</h1>
        <p>{data.isi}</p>
      </div>
    </div>
  );
};

export default ArtikelDetails;
