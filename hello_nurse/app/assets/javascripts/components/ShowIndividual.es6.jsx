class ShowIndividual extends React.Component {
  render() {
    return(
      <div className="individual-container">
        <ul>
          {
            console.log("individualasdadsasdasdasdasda", this.props.individual)
            // for(i in this.props.individual) {
            //   console.log (i, this.props.individual.i)
            // }
            // <li className="doctor-list">
            //   <p>
            //     <span className="doctor-first-name">First Name: {this.state.data.profile.first_name}</span><br />
            //     <span className="doctor-last-name">Last Name: {this.state.data.profile.last_name}</span><br />
            //     <span className="doctor-education">Education: {this.state.data.educations[0].school}</span><br />
            //     <span className="doctor-degree">Degree: {this.state.data.educations[0].degree}</span><br />
            //     <span className="doctor-ratings">Rating: {this.state.data.ratings[0]}</span><br />
            //     <span className="doctor-uid">UID: {uid}</span>
            //   </p>
            // </li>
            // <a href="/">Back</a>
            }
        </ul>
      </div>

    )
  }
}
