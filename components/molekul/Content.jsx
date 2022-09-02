import axios from "axios";
import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

const Content = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    //  Berita hanya 20 jadi saya ulang" saja requestnya
    const response = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=ggVu9FmcER4UBZSm6QKDWR2tXUwIuwUB"
    );
    const newPosts = response.data.results;
    setPosts((post) => [...post, ...newPosts]);
  };
  return (
    <InfiniteScroll
      next={getMorePost}
      hasMore={hasMore}
      dataLength={posts.length}
      loader={<h3> Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
    >
      {posts.map((v, i) => (
        <Card data={v} key={i} />
      ))}
    </InfiniteScroll>
  );
};

export default Content;
