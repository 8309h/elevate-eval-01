import courses from "../data/courses";
import CourseCard from "../component/CourseCard";

function Courses() {
      console.log("course",courses)
      return(
            <div>
                  <h1>All Courses</h1>
                  {courses.map((course) => {
                       return <CourseCard  key ={course.id} course={course}/>
                  })}
            </div>
      )
}

export default Courses