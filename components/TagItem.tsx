import Link from "next/link";

interface TagItemProps {
  tag: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

const TagItem = ({
  tag,
  backgroundColor,
  textColor,
  borderColor,
}: TagItemProps) => {
  return (
    <div>
      <Link href={{ pathname: "/", query: { tag: `${tag}` } }}>
        <a
          className={`bg-${backgroundColor}  border border-${borderColor} rounded-full px-2 text-${textColor} text-sm`}
        >
          {tag}
        </a>
      </Link>
    </div>
  );
};

export default TagItem;
