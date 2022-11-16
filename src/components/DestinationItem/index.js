import './index.css'

const destinationItem = props => {
  const {DestinationDetails} = props
  const {imgUrl, name} = DestinationDetails

  return (
    <li className="list-container">
      <div className="destination-item-style">
        <img className="destination-image" alt={name} src={imgUrl} />
        <p className="destination-para">{name}</p>
      </div>
    </li>
  )
}

export default destinationItem
