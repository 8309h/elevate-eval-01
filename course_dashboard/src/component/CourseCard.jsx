function CourseCard({ course }) {
      return (
            <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: "30px"
                  

            }}>
                  <div style={{
                       
                  }}>
                        <h2>{course.title}</h2>
                        <p>{course.category}</p>
                        <p>{course.duration}</p>
                        <p>{course.level}</p>
                        <p>{course.price}</p>
                        <p>{course.description}</p>
                  </div>

            </div>

      )

}
export default CourseCard;