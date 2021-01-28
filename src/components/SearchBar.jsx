import React from 'react';
import Paper from '@material-ui/core/Paper';


class SearchBar extends React.Component {
  state = {
    search: "",
  }


  onInputChange = (event) => {
    this.setState({ search: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.search)
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onFormSubmit}>
          <Paper className='navP' elevation={4}>
            <div id='srch'>
              &nbsp;<input
                className="inpt form-group"
                type="search"
                placeholder="Search"
                spellCheck="false"
                value={this.state.search}
                onChange={this.onInputChange}
              />
              &nbsp;<button className='srchbtn ' href="#" onClick={this.onFormSubmit} type="submit" name="search" value={this.state.search}>Search</button>
              {/* <button className="form">Search</button> */}
            </div>
          </Paper>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;