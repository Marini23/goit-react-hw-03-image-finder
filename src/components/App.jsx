import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './SearchBar/Searchbar';

export class App extends Component {
  state = {
    valueInput: ``,
  };

  componentDidMount() {}

  handleFormSubmit = valueInput => {
    this.setState({ valueInput });
    console.log(valueInput);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <GlobalStyle />
        <Toaster position="top-right" />
      </div>
    );
  }
}
