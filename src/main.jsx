import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admins  from './Admins/Admins.jsx'
import Teachers from './Teachers/Teachers.jsx'
import Students from './Students/Students.jsx'

// import pages for Admins

// Home
import HomeA from './Admins/pages/Home/Home.jsx'
// User Management
import TeacherA from './Admins/pages/UserManagement/Teacher.jsx'
import StudentA from './Admins/pages/UserManagement/Student.jsx'
import StaffA from './Admins/pages/UserManagement/Staff.jsx'
// Classes
import ClassA from './Admins/pages/Class/Class.jsx'
import AllClassesA from './Admins/pages/Class/AllClasses.jsx'
// Subject
import SubjectA from './Admins/pages/Subject/Subject.jsx'
import AllSubjectA from './Admins/pages/Subject/AllSubject.jsx'
// Announcement
import AnnounceA from './Admins/pages/Anouncement/Announce.jsx'
import AllAnnounceA from './Admins/pages/Anouncement/AllAnnounce.jsx'
// Fee
import AddmissionFeeA from './Admins/pages/Fee/AddmissionFee.jsx'
import MonthlyFeeA from './Admins/pages/Fee/MonthlyFee.jsx'
import AllStudentsFeeStatusA from './Admins/pages/Fee/allStudentsFeeStatus.jsx'
import FeeHistoryA from './Admins/pages/Fee/FeeHistory.jsx'
// Exam
import AddExamA from './Admins/pages/Exame/AddExam.jsx'
import AllExamA from './Admins/pages/Exame/AllExam.jsx'
import ExamSched from './Admins/pages/Exame/ExamSched.jsx'
// Result
import AddResultA from './Admins/pages/Result/AddResult.jsx'
import AllResultA from './Admins/pages/Result/AllResult.jsx'
import ViewByStudentsA from './Admins/pages/Result/ViewByStudents.jsx'



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/login',
        element: <h1>Login</h1>
      },
      {
        path:'admins',
        element: <Admins />,
        children: [
          {
            path:'home',
            element: <HomeA />
          },
          {
            path:'user-management/teacher',
            element: <TeacherA />
          },
          {
            path:'user-management/student',
            element: <StudentA />
          },
          {
            path:'user-management/staff',
            element: <StaffA />
          },
          {
            path:'classes/class',
            element: <ClassA />
          },
          {
            path:'classes/all-classes',
            element: <AllClassesA />
          },
          {
            path:'subjects/subject',
            element: <SubjectA />
          },
          {
            path:'subjects/all-subjects',
            element: <AllSubjectA />
          },
          {
            path:'announcement/announce',
            element: <AnnounceA />
          },
          {
            path:'announcement/all-announcement',
            element: <AllAnnounceA />
          },
          {
            path:'fee/addmission-fee',
            element: <AddmissionFeeA />
          },
          {
            path:'fee/monthly-fee',
            element: <MonthlyFeeA />
          },
          {
            path:'fee/all-students-fee-status',
            element: <AllStudentsFeeStatusA />
          },
          {
            path:'fee/fee-history',
            element: <FeeHistoryA />
          },
          {
            path:'exam/add-exam',
            element: <AddExamA />
          },
          {
            path:'exam/all-exam',
            element: <AllExamA />
          },
          {
            path:'exam/exam-sched',
            element: <ExamSched />
          },
          {
            path:'result/add-result',
            element: <AddResultA />
          },
          {
            path:'result/all-result',
            element: <AllResultA />
          },
          {
            path:'result/view-by-students',
            element: <ViewByStudentsA />
          }
        ]
      },
      {
        path:'teachers',
        element: <Teachers />,
        children: []
      },
      {
        path:'students',
        element: <Students />,
        children: []
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
