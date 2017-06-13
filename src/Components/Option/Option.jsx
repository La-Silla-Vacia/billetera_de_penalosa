import { h, render, Component } from 'preact';
import cn from 'classnames';
import s from './Option.css';

export default class Item extends Component {
  constructor() {
    super();

    this.state = {
      value: 'Hi!'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { callback, id } = this.props;
    const value = e.target.checked;
    if (callback) callback(value, id);
    this.setState({ value });
  }

  render(props, state) {
    const { value } = state;
    const { name, id, simple } = props;

    return (
      <li className={cn(s.container, {[s.simple]: simple})}>
        <input className={s.input}
               onChange={this.handleChange}
               value={value}
               type="checkbox"
               id={`option-${id}`} />
        <label className={s.label} htmlFor={`option-${id}`}>{name}</label>
      </li>
    )
  }
}