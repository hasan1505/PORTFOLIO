import  { FunctionComponent } from 'react'
import { Category } from '@/type'
export const NavItem:FunctionComponent<{value:Category | 'all';handlerFilterCategory: Function;
    active: string;
  }> = ({ value, handlerFilterCategory,active  }) => {
    let className = "capitalize cursor-pointer hover:text-green";
    if(active===value)
        className +="text-green"
  return (
    <li onClick={() => handlerFilterCategory(value)}
         className={className}>
        {value}
    </li>
  )
}



const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props) => {
  return (
    <div className='space-x-3 px-3 py-2 overflow-x-auto list-none flex'>
<NavItem value='all'{...props}/>
<NavItem value='react'{...props}/>
<NavItem value='mongo'{...props}/>
<NavItem value='django'{...props}/>
<NavItem value='node'{...props}/>
    </div>
  )
}

export default ProjectsNavbar