import './topbar.scss'
import {Person,Mail} from '@mui/icons-material'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className='logo'>My Portfolio</a>
            <div className="itemContainer">
              <Person className='icon'/>
              <span>+84 96 713 0081</span>
            </div>
            <div className="itemContainer">
              <Mail className='icon'/>
              <span>nguyenvanliem5120@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}
