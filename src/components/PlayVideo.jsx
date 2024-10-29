import React, { useContext } from "react";
import { AppContext } from "../features/AppContext";
import { AiOutlineLike, AiTwotoneDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const { videoData, value_converter, channelData, commentData } =
    useContext(AppContext);

  return (
    <>
      <div className="basis-[98%] lg:basis-[69%]">
        <iframe
          className="w-full h-[27vw]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        <h3 className="mt-2 font-semibold text-[22px]">
          {videoData ? videoData.snippet.channelTitle : "Title here"}
        </h3>
        <div className="flex items-center justify-between flex-wrap mt-2 text-[14px] text-[#5a5a5a]">
          <p>
            {videoData ? value_converter(videoData.statistics.viewCount) : "10"}{" "}
            views &bull;{" "}
            {videoData ? moment(videoData.snippet.publishedAt).fromNow() : "2"}{" "}
            minute ago
          </p>
          <div className="flex">
            <span className="inline-flex items-center mr-4">
              <AiOutlineLike className="w-[20px] mr-2" />
              {videoData
                ? value_converter(videoData.statistics.likeCount)
                : "2"}
              views
            </span>
            <span className="inline-flex items-center mr-4">
              <AiTwotoneDislike className="w-[20px] text-4xl mr-2" />
            </span>
            <span className="inline-flex items-center mr-4">
              <IoMdShareAlt className="w-[20px] text-4xl mr-2" />
              share
            </span>
            <span className="inline-flex items-center mr-4">
              <CiSaveDown2 className="w-[20px] text-4xl mr-2" />
              saves
            </span>
          </div>
        </div>

        <hr className="border leading-none bg-slate-200 my-3" />

        {/* channelData */}

        <div className="flex items-center mt-5">
          <img
            className="w-[40px] rounded-full mr-4"
            src={channelData ? channelData.snippet.thumbnails.default.url : ""}
            alt="i"
          />
          <div className="flex-1 leading-4">
            <p className="text-black font-bold text-xl">
              {videoData ? videoData.snippet.channelTitle : "Channel Name"}
            </p>
            <span className="text-neutral-400 text-[13px]">
              {channelData
                ? value_converter(channelData.statistics.subscriberCount)
                : "1"}
              subscribers
            </span>
          </div>
          <button className="bg-red-600 text-white py-3 px-7 border-none outline-none cursor-pointer rounded-sm">
            Subscribe
          </button>
        </div>

        {/* comments */}

        <div className="pl-[55px] my-4">
          <p className="text-[14px] mb-1 text-neutral-500">
            {videoData
              ? videoData.snippet.description.slice(0, 250)
              : "Video description"}
          </p>
          <hr />
          <h4 className="text-[14px] text-neutral-500 mt-4">
            {videoData
              ? value_converter(videoData.snippet.commentCount)
              : "no comment"}
          </h4>

          {commentData.map((item, index) => (
            <div className="flex items-start my-5" key={index}>
              <img
                className="w-9 rounded-full mr-4"
                src={
                  item
                    ? item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    : ""
                }
                alt="image"
              />
              <div>
                <h3 className="text-[14px] mb-[2px]">
                  {item
                    ? item.snippet.topLevelComment.snippet.authorDisplayName
                    : "commenter name"}{" "}
                  <span className="text-[12px] text-neutral-500 font-semibold mr-2">
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="flex items-center my-2 text-[14px]">
                  <AiOutlineLike className="w-5 mr-1" />
                  <span className="mr-5 text-neutral-500">
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <AiTwotoneDislike className="w-5 mr-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
