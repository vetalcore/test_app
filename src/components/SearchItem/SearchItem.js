import React, {Component} from 'react';

class FilterItem extends Component {

  onChange = (e) => {
    // debounce here
    const value = e.target.value;
    typeof(this.props.onChange) === "function" && this.props.onChange({[(this.props.name).toLowerCase()]: value});
  }
  
  render() {
    const { name } = this.props;

    return (
      <label>{`Quick search by post ${name}`} <input type="text" onChange={this.onChange.bind(this)}/></label>
    );
  }
};

export default FilterItem;
