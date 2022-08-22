import ArticleItem from "../ArticleItem/ArticleItem";

const Articles = ({ articles }: any) => {
  console.log(articles);
  return (
    <div className="flex flex-col w-full ">
      {articles === undefined || articles.length == 0 ? (
        <p className="pt-6">No articles here... yet.</p>
      ) : (
        //  <p className="pt-6">No articles here... yet.</p>
        articles?.map((m: any, i: number) => {
          return (
            <ArticleItem
              slug={m.slug}
              key={i}
              description={m.description}
              username={m.author.username}
              image={m.author.image}
              date={m.updatedAt}
              favoritesCount={m.favoritesCount}
              title={m.title}
              tags={m.tagList}
            />
          );
        })
      )}
      {/* {articles?.map((m: any, i: number) => {
        return (
          <ArticleItem
            key={i}
            description={m.description}
            username={m.author.username}
            image={m.author.image}
            date={m.updatedAt}
            favoritesCount={m.favoritesCount}
            title={m.title}
            tags={m.tagList}
          />
        );
      })} */}
    </div>
  );
};

export default Articles;
