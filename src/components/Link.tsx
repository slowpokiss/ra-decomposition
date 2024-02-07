interface props {
  children?: React.ReactNode
  href: string,
  classic: string,
}

/** 
  компонент отображает ссылку. принимает пропс на путь
*/

const Link = ({ children, href, classic }: props) => {
  return (
    <a className={classic} href={href}>{children}</a>
  )
}

export default Link
