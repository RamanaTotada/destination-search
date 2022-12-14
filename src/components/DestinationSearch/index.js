import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeUserData = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log({searchInput})

    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="search-container">
        <div>
          <h1 className="search-heading">Destination search</h1>
          <div className="search-conatiner">
            <input
              value={searchInput}
              type="search"
              placeholder="search"
              className="search-box"
              onChange={this.onChangeUserData}
            />
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            />
          </div>
        </div>

        <ul className="unOrder-list">
          {searchResults.map(each => (
            <DestinationItem key={each.id} DestinationDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
