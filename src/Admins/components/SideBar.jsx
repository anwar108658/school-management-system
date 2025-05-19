import { faAddressBook, faAddressCard, faChalkboardUser, faCopy, faFile, faHouse, faPersonChalkboard, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate();
  const menuItemClassName = `
  !text-gray-200
  [&.ant-menu-item-selected]:!bg-blue-400
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
  ]
  return (
    <Sider
    theme='light'
    className={`!bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('https://img.freepik.com/free-vector/abstract-background-gradient-colorful-design_677411-3431.jpg?semt=ais_hybrid&w=740')]  !bg-cover  !bg-no-repeat`}
    width={270}
    >
      <Menu items={menuItem} theme='dark' className='!bg-black/0' mode='inline'/>
    </Sider>
  )
}

export default SideBar