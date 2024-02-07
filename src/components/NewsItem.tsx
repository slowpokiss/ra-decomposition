interface props {
  children?: React.ReactNode,
  icon: string,
  text: string,
}

/** 
  Данный компонент отвечает за отображение мини-новостей в header
*/

const NewsItem = ({ icon, text }: props) => {
  return (
    <div className="short-news-item">
      <img src={icon} />
      <p>{text}</p>
    </div>
  )
}

export default NewsItem
