import React from "react";

class SearchBar extends React.Component {
  state = { inputtext: "" };

  onInputChange(event) {}

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputtext);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>YouTube Search</label>
            <input
              type="text"
              value={this.state.inputtext}
              onChange={e => this.setState({ inputtext: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
