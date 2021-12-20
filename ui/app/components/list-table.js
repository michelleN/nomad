import Component from '@glimmer/component';

export default class ListTable extends Component {
  get source() {
    return this.args.source;
  }

  get decoratedSource() {
    return this.source.map(row => ({
      model: row,
    }));
  }
}
