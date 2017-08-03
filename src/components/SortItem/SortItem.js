import React, {Component} from 'react';

class SortItem extends Component {

  onChange = (e) => {
    const value = e.target.value;
    typeof(this.props.onChange) === "function" && this.props.onChange((value).toLowerCase());
  }
  
  render() {
    const { options } = this.props;

    return (
      <label>Sort by:
        <select onChange={this.onChange.bind(this)}>
          <option default>Please select filter</option>
          {options.map(({ value, text }) => {
            return (<option key={value} value={value}>{text}</option>);
          })}
        </select>
      </label>

    );
  }
};

export default SortItem;
