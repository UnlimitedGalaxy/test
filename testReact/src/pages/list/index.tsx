import React, { Fragment, PureComponent } from "react";
import Mock from "mockjs";
import VirtualList from "./VirtualList";

class App extends PureComponent {
  state:any = {
    hasNextPage: true,
    isNextPageLoading: false,
    sortOrder: "asc",
    items: [],
  };

  persons:{ array: any[]};

  constructor(props:any) {
    super(props);
    this.persons = Mock.mock({
      "array|100": [
        {
          "name|+1": [
            "Hello",
            "Mock.js",
            "gavin"
          ]
        }
      ]
    });
  }

  _loadNextPage = (...args:any) => {
    this.setState({ isNextPageLoading: true }, () => {
      setTimeout(() => {
        this.setState((state:any) => ({
          hasNextPage: state.items.length < 100,
          isNextPageLoading: false,
          items: [...state.items].concat(
            this.persons.array.slice(args[0], args[0] + 10)
          )
        }));
      }, 2500);
    });
  };

  _handleSortOrderChange = (e:any) => {
    this.persons.array.sort((a, b) => {
      if (e.target.value === "asc") {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
    this.setState({
      sortOrder: e.target.value,
      items: []
    });
  };

  render() {
    const { hasNextPage, isNextPageLoading, items, sortOrder } = this.state;
    return (
      <Fragment>
        <VirtualList
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={items}
          sortOrder={sortOrder}
          loadNextPage={this._loadNextPage}
        />

      </Fragment>
    );
  }
}

export default App;
