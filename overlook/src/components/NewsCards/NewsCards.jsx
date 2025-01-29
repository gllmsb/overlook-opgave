import React from "react";
import { useGet } from "../../hooks/useGet";
import styles from "./NewsCards.module.scss";
import { NewsItem } from "../NewsItem/NewsItem";

const API_URL = "http://localhost:4000/news"; 

export const NewsCards = () => {
  const { data: news, loading, error } = useGet(API_URL);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error: {error}</p>;

  const latestNews = news.slice(0, 3);

  return (
    <div className={styles.newsGrid}>
      {latestNews.map((item) => (
        <NewsItem key={item.id} newsItem={item} />
      ))}
    </div>
  );
};
