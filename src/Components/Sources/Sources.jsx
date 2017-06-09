import { h, render, Component } from 'preact';
import s from './Sources.css';

export default class Possessions extends Component {
  getItems() {
    const { items } = this.props;
    return items.map((item) => {
      const { id, name } = item;
      return (
        <div key={id}>{name}</div>
      )
    });
  }

  render(props, state) {
    const items = this.getItems();
    return (
      <div className={s.container}>
        <h2>Sources</h2>
        <div className={s.table}>
          {items}
        </div>
      </div>
    )
  }
}