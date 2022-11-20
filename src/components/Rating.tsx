import './styles/Rating.css'
import starImage from '../assets/images/icon-star.svg'
import thanksImage from '../assets/images/illustration-thank-you.svg'
import { useState } from 'react'

const Rating = () => {
  const [verifyAnswers, setVerifyAnswers] = useState(false)
  const [selection, setSelection] = useState<number | undefined>(undefined)

  const rateValues = [
    {id:1, value:'1'},{id:2, value: '2'},{id:3, value: '3'},{id:4, value: '4'},{id:5, value:5}
  ]

  const ratings = rateValues.map(rate => {
    return <div onClick={() => {
      setSelection(rate.id)
    }
    } className={`radio--container ${rate.id === selection ? 'rate--selected' : 'rate--value'}`} key={rate.id}>
      { rate.value }
    </div>
  })

  const RatingCardView = ( 
    <div className="rating--card">
      <div className="card--header radio--container">
        <img src={ starImage } alt="star header"/>
      </div>
      <div className="card--body">
        <div className="card--title">How did we do?</div>
        <p className="card--description">
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
        </p>
        <div className="rate--values">
          { ratings }
        </div>
      </div>
      <input disabled={selection ? false : true} type='button' value='Submit' onClick={ () => setVerifyAnswers(true) } className="card--cta"/>
    </div>
  )

  const ResultsCardView = (
    <div className="results--card">
      <div className="card--header">
        <img src={ thanksImage } alt="results header"/>
      </div>
      <div className="card--results_info">
          <span>You selected { selection } out of 5</span> 
        </div>
      <div className="card--body">
        <div className="card--title">Thank you!</div>
        <p className="card--description">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )

  return !verifyAnswers ? RatingCardView : ResultsCardView
}

export default Rating