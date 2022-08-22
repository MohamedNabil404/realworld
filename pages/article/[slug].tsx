import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import ArticleBanner from "../../components/ArticleBanner/ArticleBanner";
import { getArticleBySlug, getCommentsBySlug } from "../../lib/api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TagItem from "../../components/TagItem";
import AddComment from "../../components/AddComment/AddComment";

function Article({}) {
  const [token, setToken] = useState<string | null | undefined>(null);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const { data, error, isLoading } = useQuery(["article", token, slug], () =>
    getArticleBySlug(slug, token)
  );

  const { data: dataComment } = useQuery(["comments", slug], () =>
    getCommentsBySlug(slug)
  );

  console.log(dataComment);

  return (
    <div className="flex min-h-screen flex-col w-full font-titillium">
      <Navbar />
      <ArticleBanner
        title={data?.article?.title}
        date={data?.article.createdAt}
        image={data?.article?.author?.image}
        username={data?.article?.author?.username}
      />
      <div className="flex flex-col w-full max-w-[1140px] px-[15px] mx-auto mt-6 ">
        <p className="text-xl mb-8">{data?.article?.body}</p>
        <div className="flex flex-row gap-x-2 mb-4">
          {data?.article?.tagList.map((item: string, i: number) => {
            return (
              <TagItem
                key={i}
                backgroundColor="white"
                borderColor="gray-700"
                tag={item}
                textColor="gray-700"
              />
            );
          })}
        </div>
        <hr className="my-4" />
        <div className="max-w-[760px] mx-auto flex flex-col w-full mt-12">
          <AddComment />
        </div>
      </div>
    </div>
  );
}

export default Article;
