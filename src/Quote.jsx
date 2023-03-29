import './App.css'

export const Quote = ({quote,title,speaker}) => {
  return (
    <div className='card'>
      <blockquote className='quote'>
        {`"${quote}"`}
        <cite className='speaker'>{`- ${speaker}`}</cite>
        <strong className='quote_title'>{title}</strong>
      </blockquote>
    </div>
  )
}