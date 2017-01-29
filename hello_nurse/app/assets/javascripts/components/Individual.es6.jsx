class Individual extends React.Component {
  constructor() {
    super()
    this.state = {individual: []}
  }

  componentDidMount() {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors/${this.props.uid}?user_key=9b916adf7c966d9dce5bb16db9f4b2b2`
    }).done((response) => {
      console.log("Individual", response);
      this.setState({individual: response.data});
    })
  }

  render() {
    console.log("state.individual", this.state.individual.profile)
    return(
      <div className="individual-doc">
      <h1>Doc Info</h1>
        <ShowIndividual individual={this.state.individual} />
      </div>
    )
  }
}
