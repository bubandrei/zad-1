import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
    };
  }

  async loadData() {
    this.setState({ isLoading: true });
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      this.setState({ isLoading: false, data });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    // if (this.state.isLoading) {
    //   return <span>Loading</span>;
    // }

    // if (this.state.data) {
    //   return <span>{JSON.stringify(this.state.data)}</span>;
    // }

    return <span></span>;
  }
}

export default SimpleComponent;
