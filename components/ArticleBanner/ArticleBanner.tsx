interface ArticleBannerProps {
  title: string;
  date: Date;
  username: string;
  image: string;
}

const ArticleBanner = ({
  title,
  date,
  username,
  image,
}: ArticleBannerProps) => {
  let currentDate = new Date(date);

  return (
    <div className="w-full py-8 bg-black flex justify-center">
      <div className="flex flex-col w-full max-w-[1140px] px-[15px] mx-auto ">
        <h1 className="text-white text-[44.8px] font-semibold my-3">{title}</h1>
        <div className="flex w-fit">
          <div className="flex ">
            <div className="flex justify-center items-center">
              <img src={image} className="rounded-full pr-1 h-8" />
            </div>
            <div className="flex flex-col px-1">
              <p className="text-white">{username}</p>
              <p className="text-xs text-gray-400 whitespace-nowrap">
                {currentDate.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBanner;
