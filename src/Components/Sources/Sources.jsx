import { h, render, Component } from 'preact';
import Option from "../Option";

import s from './Sources.css';

export default class Possessions extends Component {
  getItems() {
    const { items } = this.props;
    return items.map((item) => {
      const { id, show } = item;
      if (show) return;
      return (
        <Option {...item} simple key={id} />
      )
    });
  }

  render(props, state) {
    const items = this.getItems();
    return (
      <div className={s.container}>
        <h2 className={s.title}>Sources</h2>
        <ul className={s.list}>
          {items}
        </ul>
      </div>
    )
  }
}