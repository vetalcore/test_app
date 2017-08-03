import React, {Component, PropTypes} from 'react';

class FilterItem extends Component {

  onChange = (e) => {
    const targetValue = e.target.value;
    let value = this.props.options.find(({value}) => parseInt(value, 10) === parseInt(targetValue, 10));
    value = value ? value.text : "";
    typeof(this.props.onChange) === "function" && this.props.onChange({[(this.props.name).toLowerCase()]: (value).toLowerCase()});
  }
  
  render() {
    const { name, options } = this.props;

    return (
      <label>{`${name} filter:`}
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

FilterItem.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
};

export default FilterItem;
