import { Button } from "antd"

const AntButton = ({children,icon,size="small",loading=false,type,variant,color,onClick}) => {
  return (
    <Button
    icon={icon}
    size={size}
    loading={loading}
    variant={variant}
    type={type}
    color={color} 
    onClick={onClick}
    >
        {children}
    </Button>
  )
}

export default AntButton