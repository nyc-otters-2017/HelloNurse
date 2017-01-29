class App extends React.Component {
  constructor() {
    super()
    this.state = {medCollection: []}
    this.medData = this.medData.bind(this)
  }

  medData(searchDoctor) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${searchDoctor}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=9b916adf7c966d9dce5bb16db9f4b2b2`
    }).done((response) => {
      console.log("ajax response", response.data);
      this.setState({medCollection: response.data})
    })
  }

  render() {
    console.log("state.medCollection", this.state.medCollection)
    return(
      <div>
        <h1>Eh, What's Up Doc?</h1>
        <SearchBar medData={this.medData} />
        <DisplayDoc displayDoc={this.state.medCollection} />
      </div>
    )
  }
}
