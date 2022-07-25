import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Styles
import './styles/app.scss';
import './styles/dark.scss';
import './styles/colors.scss';
import 'react-toastify/dist/ReactToastify.css';

// State Context
import useAppStateContext from './hooks/useAppStateContext';

// Pages
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
                {/* <Route index element={<Analysis />} /> */}
                {/* <Route path='login' element={<Login />} /> */}

                {/* <Route path='elections'>
                  <Route index element={<Elections />} />
                  <Route
                    path='voting/:year/:electionId'
                    element={<ElectionVoting />}
                  />
                  <Route
                    path='analytics/:year/:electionId'
                    element={<ElectionAnalytics />}
                  />
                </Route>

                <Route path='candidates'>
                  <Route index element={<Candidates />} />
                  <Route path=':candidateId' element={<SingleCandidate />} />
                </Route> */}
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
