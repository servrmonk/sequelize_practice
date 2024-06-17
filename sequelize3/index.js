const { Student, Course, Enrollment, sequelize } = require("./models");

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log("Database synced :)");

    // Create some students
    const student1 = await Student.create({ name: "John Doe" });
    const student2 = await Student.create({ name: "Jane Smith" });

    // Create some courses
    const course1 = await Course.create({ title: "Math 101" });
    const course2 = await Course.create({ title: "Physics 101" });

    // Enroll students in courses
    await Enrollment.create({ studentId: student1.id, courseId: course1.id });
    await Enrollment.create({ studentId: student1.id, courseId: course2.id });
    await Enrollment.create({ studentId: student2.id, courseId: course1.id });

    // Fetch students with their courses
    const studentsWithCourses = await Student.findAll({
      include: [{ model: Course, as: "courses" }],
    });

    console.log(
      "Students with courses:",
      JSON.stringify(studentsWithCourses, null, 2)
    );

    // Fetch courses with their students
    const coursesWithStudents = await Course.findAll({
      include: [{ model: Student, as: "students" }],
    });

    console.log(
      "Courses with students:",
      JSON.stringify(coursesWithStudents, null, 2)
    );
  })
  .catch((err) => {
    console.error("Error syncing database: ", err);
  });
