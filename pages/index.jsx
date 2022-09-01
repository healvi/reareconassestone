import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "../components/molekul/card";
import Navbar from "../components/molekul/Navbar";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="grid grid-row-1 gap-1 p-4">
        {data.length ? (
          data.map((v, i) => <Card data={v} key={i} />)
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=ggVu9FmcER4UBZSm6QKDWR2tXUwIuwUB"
  );

  return { props: { data: response.data.results } };
}
