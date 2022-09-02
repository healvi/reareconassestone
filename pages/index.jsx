import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setartikelGlobal } from "../app/artikelReducer";
import Content from "../components/molekul/Content";
import Navbar from "../components/molekul/Navbar";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const dispatch = useDispatch();
  const artikel = useSelector((state) => state.artikels.artikels);
  useEffect(() => {
    dispatch(setartikelGlobal(data));
  }, []);
  useEffect(() => {
    console.log(artikel);
  }, [artikel]);
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="grid grid-row-1 gap-1 p-4">
        <Content data={data} />
        {/* {data.length ? (
          data.map((v, i) => <Card data={v} key={i} />)
        ) : (
          <div>Loading</div>
        )} */}
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
