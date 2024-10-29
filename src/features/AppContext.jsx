import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sideToggle, setSideToggle] = useState(true);
  const [category, setCategory] = useState(0);
  const [data, setData] = useState([]);
  const [getVideoId, setGetVideoId] = useState("");
  const [videoData, setVideData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [recommended, setRecommended] = useState([])
  const [getCategoryId, setGetCategoryId] = useState("")

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${category}&key=${import.meta.env.VITE_API_KEY}`
      );
      setData(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideoData = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${getVideoId}&key=${import.meta.env.VITE_API_KEY}`
      );
      setVideData(res.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOtherData = async () => {
    if (!getVideoId) return;
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${import.meta.env.VITE_API_KEY}`
      );
      setChannelData(res.data.items[0]);

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=10&key=AIzaSyAIi8VgLmgWhKlLLLRkRAGWCco6Nj2nY_I&videoId=${getVideoId}`
      );
      setCommentData(response.data.items);
    } catch (error) {
      console.log(error + "error");
    }
  };

  const fetchRecommendedData = async () => {
    if (!getCategoryId) return;
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${getCategoryId}&key=${import.meta.env.VITE_API_KEY}`)
      setRecommended(res.data.items)
    } catch (error) {
      console.log(error + 'Recommended')
    }
  }

  useEffect(() => {
    if (getVideoId) {
      fetchVideoData();
    }
  }, [getVideoId]);

  useEffect(() => {
    fetchData();
  }, [category]);

  useEffect(() => {
    if (getVideoId && videoData) {
      fetchOtherData();
    }
  }, [videoData, getVideoId]);

  useEffect(() => {
    if (getCategoryId) {
      fetchRecommendedData();
    }
  }, [getCategoryId])

  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };

  return (
    <AppContext.Provider
      value={{
        sideToggle,
        setSideToggle,
        category,
        setCategory,
        data,
        value_converter,
        videoData,
        setGetVideoId,
        commentData,
        channelData,
        setGetCategoryId,
        recommended,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
