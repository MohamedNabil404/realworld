import { FaHeart } from "react-icons/fa";
import TagItem from "../TagItem";

interface ArticleItemProps {
  description: string;
  username: string;
  image: string;
  date: Date;
  favoritesCount: number;
  title: string;
  tags: string[];
}

const ArticleItem = ({
  description,
  username,
  image,
  date,
  favoritesCount,
  title,
  tags,
}: ArticleItemProps) => {
  let currentDate = new Date(date);
  return (
    <div className="w-full py-6 px-2 border-b-2 border-b-gray-300">
      <div className="flex flex-row w-full  items-center mb-1">
        <div className="flex w-fit">
          <div className="flex ">
            <div className="flex justify-center items-center">
              <img src={image} className="rounded-full pr-1 h-8" />
            </div>
            <div className="flex flex-col px-1">
              <p className="text-pgreen">{username}</p>
              <p className="text-xs text-gray-400 whitespace-nowrap">
                {currentDate.toDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className="ml-auto flex justify-center items-center border-[1px] border-pgreen py-1 px-2 rounded-md text-sm">
          <FaHeart color="green" className="mr-1" />
          <span className="text-pgreen">{favoritesCount}</span>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl mb-1 font-sans">{title}</h1>
        <p className="text-[#999] text-base mb-[15px]">{description}</p>
      </div>
      <div className="flex flex-row w-full  items-center mb-1">
        <p className=" text-xs text-[#bbb] align-middle">Read more...</p>
        <div className="ml-auto flex">
          {tags.map((tag, i) => {
            return (
              <TagItem
                key={i}
                tag={tag}
                backgroundColor="white"
                textColor="pgray"
                borderColor="red-200"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
