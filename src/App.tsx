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
              icon="./img/free-icon-world-wide-web-1006771"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="./img/free-icon-world-wide-web-1006771"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="./img/free-icon-world-wide-web-1006771"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="./img/free-icon-world-wide-web-1006771"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
            <NewsItem
              icon="./img/free-icon-world-wide-web-1006771"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing."
            />
          </div>
          <div className="container-header">
            <Image
              width={100}
              height={100}
              srcImg="https://images.pexels.com/photos/8642000/pexels-photo-8642000.jpeg"
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
              height={100}
              srcImg="https://images.pexels.com/photos/8642000/pexels-photo-8642000.jpeg"
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
