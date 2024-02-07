import Link from "./Link";

interface props {
  children?: React.ReactNode;
  text: Array<string>;
}

/** 
  Данный компонент отвечает за отображение области об баннером с новостями в main
*/

const HelpfullLink = ({ children, text }: props) => {
  return (
    <>
    <div className="helpfullLink-item">
      {children}
        {text.map((el) => {
          return (
            <Link href="#" classic="mini-link">
              <p>{el}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HelpfullLink;
