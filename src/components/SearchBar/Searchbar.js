import { Component } from 'react';
import toast from 'react-hot-toast';
import {
  Header,
  SearchForm,
  BtnSubmit,
  BtnLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    valueInput: ``,
  };

  handleChangeValue = e => {
    this.setState({ valueInput: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.valueInput.trim() === '') {
      toast('Please enter key words for search');
      return;
    }
    this.props.onSubmit(this.state.valueInput);
    this.setState({ valueInput: '' });
  };

  render() {
    return (
      <Header className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <BtnSubmit type="submit" className="button">
            <BtnLabel className="button-label">Search</BtnLabel>
          </BtnSubmit>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.valueInput}
            onChange={this.handleChangeValue}
          />
        </SearchForm>
      </Header>
    );
  }
}

// export const SearchBar = ({ onSubmit }) => {
//   return (
//     <header class="searchbar">
//       <form class="form">
//         <button type="submit" class="button">
//           <span class="button-label">Search</span>
//         </button>

//         <input
//           class="input"
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };
