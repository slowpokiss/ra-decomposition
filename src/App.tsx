import "./App.css";
import Image from "./components/Image";
import Link from "./components/Link";
import NewsItem from "./components/NewsItem";
import HelpfullLink from "./components/HelpfullLink";


export default function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="short-news">
            <NewsItem
              icon="https://static.thenounproject.com/png/431498-200.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="https://static.thenounproject.com/png/431498-200.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="https://static.thenounproject.com/png/431498-200.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="https://static.thenounproject.com/png/431498-200.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="https://static.thenounproject.com/png/431498-200.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
          </div>
          <div className="container-header">
            <Image
              width={120}
              height={120}
              srcImg="https://urban-media.ru/upload/resize_cache/iblock/de5/sjh3z7ikpk3ngqv4vc1je9x2w5atd7rc/600_600_1/shkola-39.jpg"
            />
            Смотрите на Яндексе
            <Link href="#" classic="link">
              <p>Работа над ошибками</p>
            </Link>
          </div>
        </header>

        <main>
          <div className="input-area">
            <div className="links-area">
              <Link href="#" classic="link">
                <p>Видео</p>
              </Link>
              <Link href="#" classic="link">
                <p>Картинки</p>
              </Link>
              <Link href="#" classic="link">
                <p>Новости</p>
              </Link>
              <Link href="#" classic="link">
                <p>Карты</p>
              </Link>
              <Link href="#" classic="link">
                <p>еще</p>
              </Link>
            </div>
            <form className="input-form">
              <input type="text" />
              <input type="submit" />
            </form>
          </div>
          <div className="banner-area">
            <Image
              width={500}
              height={150}
              srcImg="https://insideok.ru/wp-content/uploads/2022/06/top_kinoreliz-min.jpg"
            />
          </div>
          <div className="helpfull-link-area">
            <HelpfullLink text={['+17', 'утром +17, днем +20']}>
              <Link href="#" classic="link">
                <p>Погода</p>
              </Link>
            </HelpfullLink>
            <HelpfullLink text={['Недвижимость', 'Маркет', 'Авто.ру']}>
              <Link href="#" classic="link">
                <p>Посещаемое</p>
              </Link>
            </HelpfullLink>
            <HelpfullLink text={['02:00 ТНТ.Best', '02:15 Джинглики', '02:25 Наедине со всеми']}>
              <Link href="#" classic="link">
                <p>Телепрограмма</p>
              </Link>
            </HelpfullLink>
            <HelpfullLink text={['Эфир-1', 'Эфир-2', 'Эфир-3']}>
              <Link href="#" classic="link">
                <p>Эфир</p>
              </Link>
            </HelpfullLink>
          </div>
        </main>
      </div>
    </>
  );
}
