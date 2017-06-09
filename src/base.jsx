import { h, render, Component } from 'preact';
import cn from 'classnames';

import getData from './Scripts/getData';
import LoadScreen from './Components/LoadScreen';
import Graphic from './Components/Graphic';

import s from './base.css';

export default class Base extends Component {

  constructor() {
    super();

    this.state = {
      data: [],
      sources: [],
      loading: true
    };

    this.setData = this.setData.bind(this);
  }

  setData(newData) {
    const data = this.formatData(newData.Data);
    const sources = this.formatSources(newData.Sources);
    this.setState({ data, sources, loading: false });
  }

  formatData(data) {
    return data.map((item, key) => {
      return {
        id: key + 1,
        name: item.obra,
        amount: Number(item.cuantoCuesta)
      }
    });
  }

  formatSources(data) {
    return data.map((item, key) => {
      return {
        id: key + 1,
        name: item.name,
        show: item.default,
        amount: item.amount
      }
    })
  }

  componentWillMount() {
    getData(this.setData);
  }

  render(props, state) {
    const { loading, data, sources } = state;

    let content = (loading) ? (<LoadScreen />) : (
      <div className={s.inner}>
        <h2 className={s.title}>Hello billetera_de_penalosa!</h2>
        <Graphic data={data} sources={sources} />
      </div>
    );

    return (
      <div className={cn(s.container, { [s.loading]: loading })}>
        { content }
      </div>
    )
  }
}