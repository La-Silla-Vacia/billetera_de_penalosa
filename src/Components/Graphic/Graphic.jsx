import { h, render, Component } from 'preact';
import s from './Graphic.css';
import Option from "../Option";
import Sources from "../Sources";

export default class Graphic extends Component {
  constructor() {
    super();

    this.state = {
      budget: 0,
      spend: [],
      percentage: 0
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.getValues();
  }

  componentWillReceiveProps(newProps) {
    this.getValues(newProps);
  }

  getValues(newProps) {
    const props = (newProps) ? newProps : this.props;
    let budget = 0;
    props.data.map((item) => {
      budget += item.amount;
    });
    this.setState({ budget });
  }

  getOptions() {
    const { data } = this.props;
    return data.map((item) => {
        return (
          <Option {...item} callback={this.handleOptionChange} />
        )
      }
    );
  }

  handleOptionChange(value, id) {
    const { spend } = this.state;
    if (value) {
      spend.push(id);
    } else {
      const index = spend.indexOf(id);
      if (index > -1) {
        spend.splice(index, index + 1);
      }
    }
    const amounts = this.calculateAmounts(spend);
    this.setState({ spend, percentage: amounts.percentage });
  }

  calculateAmounts(options) {
    const { budget } = this.state;
    const { data } = this.props;
    let count = 0, total = 0;
    data.map((item) => {
      const index = options.indexOf(item.id);
      if (index !== -1 && typeof item.amount === 'number') {
        count++;
        total += Number(item.amount);
      }
    });
    const percentage = total * 100 / budget;
    return { total, count, percentage }
  }

  render(props, state) {
    const { percentage } = state;
    const { sources } = props;
    const options = this.getOptions();
    const style = {
      height: `${percentage}%`
    };

    return (
      <div className={s.container}>
        <ul className={s.options}>
          {options}
        </ul>
        <Sources items={sources} />
        <div className={s.glass}>
          <div className={s.inner} style={style} />
        </div>
      </div>
    )
  }
}