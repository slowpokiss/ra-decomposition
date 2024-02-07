interface props {
  srcImg: string,
  width: number,
  height: number,
}

/** 
 * компоннент отрисовывает картинки по заданным props
*/

const Image = ({ srcImg, width, height }: props) => {
  return (
    <img src={srcImg} alt="image" className="card-img" style={{ width: `${width}px`, height: `${height}px`}} />
  )
}

export default Image