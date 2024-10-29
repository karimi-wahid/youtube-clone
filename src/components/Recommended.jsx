import React, { useContext } from "react";
import thumb1 from "../assets/thumbnail1.png";
import { AppContext } from "../features/AppContext";
import { Link } from "react-router-dom";

const Recommended = () => {
  const { recommended, value_converter } = useContext(AppContext);
  return (
    <div className="hidden lg:block lg:basis-[30%]">
      {recommended.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="flex justify-evenly mb-2" key={index}>
          <img
            className="basis-[40%] w-[50%] rounded-sm"
            src={item ? item.snippet.thumbnails.medium.url : ""}
            alt="image"
          />
          <div className="basis-[40%]">
            <h4 className="text-[14px] mb-1">
              {item ? item.snippet.title : "title"}
            </h4>
            <p className="text-neutral-500">
              {item ? item.snippet.channelTitle : "channel name"}
            </p>
            <p className="text-neutral-500">
              {value_converter(item.statistics.viewCount)}K views
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
