import { NavLink, Link } from 'react-router-dom';
import './sidebar.scss';
import Logo from '../../assets/images/Logo.png';

// Material UI Icons
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' className='navLink'>
          <img
            src={Logo}
            alt='Logo de la République française (1999)'
            draggable='false'
          />
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul className='centerUnorderedList'>
          <p className='title'>Accounts</p>
          <NavLink
            to='/all-accounts'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <SupervisedUserCircleOutlinedIcon className='icon' />
              <span>All Accounts</span>
            </li>
          </NavLink>
          <NavLink
            to='/create-new-account'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <PersonAddOutlinedIcon className='icon' />
              <span>Create New Account</span>
            </li>
          </NavLink>
          <p className='title'>Citizens</p>
          <NavLink
            to='/all-citizens'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <SupervisorAccountOutlinedIcon className='icon' />
              <span>All Citizens</span>
            </li>
          </NavLink>
          <NavLink
            to='/add-new-citizen'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <SupervisorAccountOutlinedIcon className='icon' />
              <span>Add Citizen</span>
            </li>
          </NavLink>

          <p className='title'>Candidates</p>
          <NavLink
            to='/all-candidates'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <PeopleAltOutlinedIcon className='icon' />
              <span>All Candidates</span>
            </li>
          </NavLink>
          <NavLink
            to='/add-new-candidate'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <PersonAddAltOutlinedIcon className='icon' />
              <span>Add New Candidate</span>
            </li>
          </NavLink>

          <p className='title'>Elections</p>
          <NavLink
            to='/all-elections'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <BallotOutlinedIcon className='icon' />
              <span>All elections</span>
            </li>
          </NavLink>

          <NavLink
            to='/add-new-election'
            className={({ isActive }) =>
              isActive ? 'activeNavLink' : 'navLink'
            }
          >
            <li>
              <PostAddOutlinedIcon className='icon' />
              <span>Add New Election</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
