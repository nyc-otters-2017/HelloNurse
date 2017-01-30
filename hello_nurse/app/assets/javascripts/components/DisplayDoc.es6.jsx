class DisplayDoc extends React.Component {
  render() {
    return(
      <div className="doc-container">
        <ul>
          {
            // console.log("medCollection", this.props.displayDoc)
            this.props.displayDoc.map((doctor) => {
              return <Doc doctor={doctor} doctorInfo={doctor.profile}
                // doctorEdu={doctor.educations[0]}
                // doctorPractices={
                //   doctor.practices.forEach(function(practice) {
                //     console.log(practice);
                //   })
                // }
                     />
            })
          }
        </ul>
      </div>
    )
  }
}
