import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Styles
import './styles/app.scss';
import './styles/dark.scss';
import './styles/colors.scss';
import 'react-toastify/dist/ReactToastify.css';

// State Context
import useAppStateContext from './hooks/useAppStateContext';

// Pages
import AllCitizens from './pages/citizens/AllCitizens';
import AddNewCitizens from './pages/citizens/AddNewCitizens';
import AllAccounts from './pages/accounts/AllAccounts';
import CreateNewAccounts from './pages/accounts/CreateNewAccounts';
import AllCandidates from './pages/candidates/AllCandidates';
import AddNewCandidate from './pages/candidates/AddNewCandidate';
import AllElections from './pages/elections/AllElections';
import AddNewElection from './pages/elections/AddNewElection';
import NotFound from './pages/notFound/NotFound';

// components
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const { appState, dispatch } = useAppStateContext();
  console.log('App State:\n', appState);

  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('smartVotingTheme');
    if (localTheme) {
      dispatch({ type: localTheme });
    } else {
      dispatch({ type: 'LIGHT' });
      window.localStorage.setItem('smartVotingTheme', 'LIGHT');
    }
    setComponentMounted(true);
  }, [dispatch]);

  if (!componentMounted) {
    return <div />;
  }

  return (
    <BrowserRouter>
      <div className={appState?.isDarkMode ? 'app dark' : 'app'}>
        <ToastContainer />
        <Sidebar />
        <div className='appContainer'>
          <Navbar />
          <div className='routesWrapper'>
            <Routes>
              <Route path='/'>
                <Route index element={<Navigate to='elections/view-all' />} />

                {/* "citizens/view-all"
                "citizens/add-new-citizen" */}
                <Route path='citizens'>
                  <Route path='view-all' element={<AllCitizens />} />
                  <Route path='add-new-citizen' element={<AddNewCitizens />} />
                </Route>

                {/* "accounts/view-all"
                "accounts/create-new" */}
                <Route path='accounts'>
                  <Route path='view-all' element={<AllAccounts />} />
                  <Route
                    path='create-new-account'
                    element={<CreateNewAccounts />}
                  />
                </Route>

                {/* "candidates/view-all"
                "candidates/add-new-candidate" */}
                <Route path='candidates'>
                  <Route path='view-all' element={<AllCandidates />} />
                  <Route
                    path='add-new-candidate'
                    element={<AddNewCandidate />}
                  />
                </Route>

                {/* "elections/view-all"
                "elections/add-new-election" */}
                <Route path='elections'>
                  <Route path='view-all' element={<AllElections />} />
                  <Route path='add-new-election' element={<AddNewElection />} />
                </Route>
              </Route>

              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
