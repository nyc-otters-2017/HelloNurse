class DisplayDoc extends React.Component {
  render() {
    return(
      <div className="doc-container">
        <ul>
          {
            // console.log("medCollection", this.props.displayDoc)
            this.props.displayDoc.map((doctor) => {
              return <Doc doctorInfo={doctor.profile} />
            })
          }
        </ul>
      </div>
    )
  }
}
