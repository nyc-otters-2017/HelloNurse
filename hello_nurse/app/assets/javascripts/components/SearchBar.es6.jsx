class SearchBar extends React.Component {
  constructor() {
    super()
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchInput = this.refs.searchBar;
    this.props.medData(searchInput.value);
    searchInput.value = "";
  }

  render() {
    return(
      <section id='search-bar-form'>
        <form id='doctor-search-form' onSubmit={this.handleSubmit.bind(this)}>
          <input ref="searchBar" type="text" id="new-doc-search" name="first_name" placeholder="Enter Doc's First Name" />
          <input type="submit" value="Search Doc!" name="searchDoctor" />
        </form>
      </section>

    )
  }
}
