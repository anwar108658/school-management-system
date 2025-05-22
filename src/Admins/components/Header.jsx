import React from 'react'
import AntButton from '../../MainComponents/AntButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'antd'

const Header = ({setCollapsed}) => {
  return (
    <div className='h-9.5 bg-[#020322] flex items-center justify-between px-4 py-5'>
      <AntButton
      type="text" 
      onClick={() => setCollapsed(prev => !prev)}
      icon={<FontAwesomeIcon className='!text-white text-[1rem]' icon={faBars}/>
      } />

      <Badge count={2} size='small' className='cursor-pointer' offset={[-6, 3]}>
        <AntButton
        type="text"
        icon={<FontAwesomeIcon className='!text-white text-[1rem]' icon={faBell}/>
        } />
      </Badge>
    </div>
  )
}

export default Header