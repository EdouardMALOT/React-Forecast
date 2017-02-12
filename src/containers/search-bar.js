import React from 'react'
import { FetchWeatherAction } from '../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {term : ''}

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
      event.preventDefault();

      this.props.FetchWeatherAction(this.state.term);
      this.setState({term : ''});
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
            className="form-control"
            placeholder='Get a 5-day forecast of your city'
            value={this.state.term}
            onChange={(event) => this.setState( {term: event.target.value})}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({FetchWeatherAction}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
