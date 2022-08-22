import Tags from "../Tags/Tags";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  getCurrentUser,
  getRecentArticles,
  getRecentFavoriteArticles,
} from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import Articles from "../Articles/Articles";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";

const ArticlesSection = () => {
  const [token, setToken] = useState<string | null | undefined>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const router = useRouter();
  const { tag, follow } = router.query;

  const {
    isLoading,
    error: errorArticle,
    data: dataArticle,
  } = useQuery(["articles", tag], () => getRecentArticles(tag ? `${tag}` : ""));

  const { data, error } = useQuery(
    ["username", token],
    () => getCurrentUser(token),
    { enabled: token ? true : false }
  );

  const { data: dataFavorite } = useQuery(
    ["favorite articles", follow],
    () => getRecentFavoriteArticles(follow ? follow : ""),
    { enabled: follow ? true : false }
  );

  return (
    <div className="flex items-center w-full custom-container  self-center py-6 px-4 ">
      <div className="w-3/4 flex flex-col mr-8">
        <div className="flex ">
          <div
            className={`p-3 border-b-2 ${token ? `` : `hidden`} ${
              follow ? ` border-green-600 text-pgreen` : `text-gray-400`
            }  mr-1`}
          >
            <Link
              href={{
                pathname: "/",
                query: { follow: `${data?.user?.username}` },
              }}
            >
              <a className="mr-2"> Your Feed</a>
            </Link>
            {/* <span className="mr-2 ">Global Feed</span> */}
          </div>
          <div
            className={`p-3 border-b-2 ${
              !tag && !follow
                ? ` border-green-600 text-pgreen`
                : `text-gray-400`
            }  mr-1`}
          >
            <Link href="/">
              <a className="mr-2"> Global Feed</a>
            </Link>
            {/* <span className="mr-2 ">Global Feed</span> */}
          </div>
          <div
            className={`${
              tag ? `` : `hidden`
            }p-3 border-b-2 border-green-600 text-pgreen`}
          >
            {tag && <span># {tag}</span>}
          </div>
        </div>
        {isLoading ? <Oval color="#ffffff" height={40} width={40} /> : <></>}
        {!follow ? (
          <Articles articles={dataArticle?.articles} />
        ) : (
          <Articles articles={dataFavorite?.articles} />
        )}
      </div>
      <Tags />
    </div>
  );
};

export default ArticlesSection;
