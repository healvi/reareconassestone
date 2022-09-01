import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
const Card = ({ data }) => {
  return (
    <>
      <div
        href="#"
        className="flex flex-col bg-white rounded-lg border shadow-md md:flex-row mb-[20px]"
      >
        <div className={styles.imageNews}>
          <Image
            width={400}
            height={400}
            className="md:rounded-none md:rounded-l-lg"
            src={data.media[0]["media-metadata"][2].url}
            alt=""
          />
        </div>
        <div className={styles.isiContent}>
          <p className="text-gray-500 text-sm">
            Publikasi Pada {data["published_date"]}
          </p>
          <p className="text-sm md:mb-[20px] sm::mb-[5px]">{data.byline}</p>
          <h1 className="text-black text-xl font-bold md:mb-[20px] sm::mb-[5px]">
            <Link
              href={{
                pathname: `/artikel/${data.id}`,
                query: { isi: data.abstract, title: data.title },
              }}
            >
              {data.title}
            </Link>
          </h1>
          <p className="text-black md:mb-[20px] sm::mb-[5px]">
            {data.abstract}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
