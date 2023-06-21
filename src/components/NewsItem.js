export default function NewsItem({ news, updateMyFavourites }) {
  return (
    <div>
      {news.map((item) => {
        const { name, description, title, urlToImage, publishedAt, url } = item;

        return (
          <div key={item.id}>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
}
