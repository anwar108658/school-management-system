import { faAddressBook, faAddressCard, faBullhorn, faCalendar, faChalkboardUser, faCopy, faEye, faFile, faFileInvoiceDollar, faGraduationCap, faHandHoldingDollar, faHouse, faMagnifyingGlassDollar, faMoneyBill, faPenSquare, faPersonChalkboard, faScroll, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useNavigate } from 'react-router-dom'
import "../Admins.css"
import SchoolLogo from "../../assets/schoolLogo.jpg"

const SideBar = () => {
  const navigate = useNavigate();
  const menuItemClassName = `
  !text-gray-200
  [&.ant-menu-item-selected]:!bg-blue-500
  [&.ant-menu-item-selected]:!text-cyan-100
  [&.ant-menu-item-active]:!bg-[#030c4b]
  [&_.ant-menu-submenu-title]:!text-gray-200
  [&.ant-menu-submenu-selected>.ant-menu-submenu-title]:!text-cyan-400
`;

  const menuItem = [
    {
      key:"home",
      label:"Home",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faHouse} />,
      onClick:() => navigate("/admins/home")
    },
    {
      key:"user-management",
      label:"User Management",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faUser}/>,
      children:[
        {
          key:"user-mangement-teacher",
          label:"Add Teacher",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faPersonChalkboard}/>,
          onClick:() => navigate("/admins/user-management/teacher")
        },
        {
          key:"user-mangement-student",
          label:"Add Student",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faAddressCard}/>,
          onClick:() => navigate("/admins/user-management/student")
        },
        {
          key:"user-mangement-staff",
          label:"Add Staff",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faAddressBook}/>,
          onClick:() => navigate("/admins/user-management/staff")
        }
      ]
    },
    {
      key:"classes",
      label:"Class",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faPersonChalkboard}/>,
      children:[
        {
          key:"class",
          label:"Class",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faChalkboardUser}/>,
          onClick:() => navigate("/admins/classes/class")
        },
        {
          key:"allClass",
          label:"All Class",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faChalkboardUser}/>,
          onClick:() => navigate("/admins/classes/all-classes")
        }
      ]
    },
    {
      key:"subjects",
      label:"Subject",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faFile}/>,
      children:[
        {
          key:"subject",
          label:"Subject",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faFile}/>,
          onClick:() => navigate("/admins/subjects/subject")
        },
        {
          key:"allSuject",
          label:"All Subject",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faCopy}/>,
          onClick:() => navigate("/admins/subjects/all-subjects")
        }
      ]
    },
    {
      key:"announcement",
      label:"Announcement",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faBullhorn}/>,
      children:[
        {
          key:"announce",
          label:"Announcement",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faScroll}/>,
          onClick:() => navigate("/admins/announcement/announce")
        },
        {
          key:"allAnnounce",
          label:"All Announcement",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faScroll}/>,
          onClick:() => navigate("/admins/announcement/all-announcement")
        }
      ]
    },
    {
      key:"fee",
      label:"Fee",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faHandHoldingDollar}/>,
      children:[
        {
          key:"addmissionFee",
          label:"Addmission Fee",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faMoneyBill}/>,
          onClick:() => navigate("/admins/fee/addmission-fee")
        },
        {
          key:"monthlyFee",
          label:"Monthly Fee",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faMoneyBill}/>,
          onClick:() => navigate("/admins/fee/monthly-fee")
        },
        {
          key:"allStudentsFeeStatus",
          label:"All Students Fee Status",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faMagnifyingGlassDollar}/>,
          onClick:() => navigate("/admins/fee/all-students-fee-status")
        },
        {
          key:"feeHistory",
          label:"Fee History",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faFileInvoiceDollar}/>,
          onClick:() => navigate("/admins/fee/fee-history")
        }
      ]
    },
    {
      key:"exam",
      label:"Exam",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faPenSquare}/>,
      children:[
        {
          key:"addExam",
          label:"Add Exam",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faPenSquare}/>,
          onClick:() => navigate("/admins/exam/add-exam")
        },
        {
          key:"allExam",
          label:"All Exam",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faPenSquare}/>,
          onClick:() => navigate("/admins/exam/all-exam")
        },
        {
          key:"examSched",
          label:"Exam Sched",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faCalendar}/>,
          onClick:() => navigate("/admins/exam/exam-sched")
        }
      ]
    },
    {
      key:"result",
      label:"Result",
      className:menuItemClassName,
      icon:<FontAwesomeIcon icon={faGraduationCap}/>,
      children:[
        {
          key:"addResult",
          label:"Add Result",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faGraduationCap}/>,
          onClick:() => navigate("/admins/result/add-result")
        },
        {
          key:"allResult",
          label:"All Result",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faGraduationCap}/>,
          onClick:() => navigate("/admins/result/all-result")
        },
        {
          key:"viewByStudents",
          label:"View By Students",
          className:menuItemClassName,
          icon:<FontAwesomeIcon icon={faEye}/>,
          onClick:() => navigate("/admins/result/view-by-students")
        }
      ]
    }
  ]

  return (
    <Sider
    theme='light'
    className={`!bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('https://img.freepik.com/free-vector/abstract-background-gradient-colorful-design_677411-3431.jpg?semt=ais_hybrid&w=740')]  !bg-cover  !bg-no-repeat !h-screen overflow-auto custom-scrollbar !relative`}
    width={270}
    >
      <div className='sticky top-0 z-10  flex gap-2 justify-center items-center h-18 bg-gray-500/70 hover:bg-gray-500/100 transition-all duration-800'>
        <div className='flex items-center justify-center'>
          <img src={SchoolLogo} alt="Logo" className='w-12 h-12 rounded-full'/>
        </div>
        <div className='text-center text-cyan-400 italic underline font-bold text-xl'>The Nova School</div>
      </div>
      <Menu items={menuItem} theme='dark' className='!bg-black/0 !mt-3' mode='inline'/>
    </Sider>
  )
}

export default SideBar