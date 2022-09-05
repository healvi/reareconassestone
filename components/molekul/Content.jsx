import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

const Content = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [day, setHasDay] = useState([1, 7, 30]);
  const [setIncement, setHasIncement] = useState(1);

  const getMorePost = async () => {
    //  Berita hanya 20 jadi saya ulang" saja requestnya

    if (day[setIncement] !== undefined) {
      const response = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/emailed/${day[setIncement]}.json?api-key=ggVu9FmcER4UBZSm6QKDWR2tXUwIuwUB`
      );
      let newday = day;
      newday.shift();
      setHasDay(newday);
      const newPosts = response.data.results;
      setPosts((post) => [...post, ...newPosts]);
    } else {
      setHasMore(false);
      return;
    }
  };
  useEffect(() => {
    console.log(day);
  }, [day]);
  return (
    <InfiniteScroll
      next={getMorePost}
      hasMore={hasMore}
      dataLength={posts.length}
      loader={<h3> Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
    >
      {posts.length ? (
        posts?.map((v, i) => <Card data={v} key={i} />)
      ) : (
        <div>Somethings wrong</div>
      )}
    </InfiniteScroll>
  );
};

export default Content;
