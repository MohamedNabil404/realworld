import { useQuery } from "@tanstack/react-query";
import { getTags } from "../../lib/api";
import TagItem from "../TagItem";
import { Oval } from "react-loader-spinner";

const Tags = () => {
  const { isLoading, error, data } = useQuery(["tags"], getTags);

  if (isLoading) return <Oval color="#ffffff" height={40} width={40} />;

  if (error)
    return (
      <div>
        <p>An error has occurred: {!!error} </p>
      </div>
    );

  return (
    <div className="w-1/4 flex flex-col bg-gray-200 p-[10px] pl-[5px] mb-auto ">
      <p className="mb-1">Popular tags</p>
      <div className="grid grid-cols-2  gap-2">
        {data.tags.map((item: string, i: number) => {
          return (
            <TagItem
              key={i}
              tag={item}
              backgroundColor="gray-700"
              textColor="white"
              borderColor="gray-300"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
