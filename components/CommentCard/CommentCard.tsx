interface CommentCardProps {
  comment: string;
  date: Date;
  username: string;
  image: string;
}

const CommentCard = ({ comment, image, username, date }: CommentCardProps) => {
  let currentDate = new Date(date);

  return (
    <div className="flex flex-col mb-3">
      <div className="w-full border border-gray-300 p-5">
        <p>{comment}</p>
      </div>
      <div className="w-full h-full bg-gray-100 py-3 px-6 flex border border-gray-300">
        {/* <button className="  bg-pgreen border-pgreen text-white py-1 px-2 rounded-md">
          Post comment
        </button> */}
        <div className="flex w-fit ">
          <div className="flex ">
            <div className="flex justify-center items-center">
              <img src={image} className="rounded-full pr-1 h-7 w-7 " />{" "}
              <p className="text-pgreen mx-1 text-xs">{username}</p>
              <p className="text-xs text-gray-400 whitespace-">
                {currentDate.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
