class Doc extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { first_name, last_name } = this.props.doctorInfo
    // let { school } = this.props.doctorEdu
    // let { name } = this.props.doctorPractices
    let { uid } = this.props.doctor
    return(
      <div className="doctor-info">
        <li className="doctor-list">
          <p>
            <span className="doctor-first-name">First Name: {first_name}</span><br />
            <span className="doctor-last-name">Last Name: {last_name}</span><br />
            <span className="doctor-uid">UID: {uid}</span>
          </p>
          <a href={`/docs/${uid}`}>More Info</a>
        </li>
      </div>
    )
  }
}
