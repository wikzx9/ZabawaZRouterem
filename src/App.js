import {createBrowserRouter, createRoutesFromElements,  Route, RouterProvider} from 'react-router-dom'

//Pages
import About from './pages/About';
import Home from './pages/Home';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import Error from './pages/Error';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import CareerError from './pages/careers/CareerError';

//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';





const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>

          <Route path='help' element={<HelpLayout/>}>
            <Route path='faq' element={<Faq/>}/>
            <Route path='contact' element={<Contact/>} action={contactAction}/>
          </Route>

          <Route path="careers" errorElement={<CareerError/>} element={<CareersLayout />} >
            <Route 
              index 
              element={<Careers />} 
              loader={careersLoader} 
            />
              <Route path=":id"
              element={<CareerDetails/>}
              loader={careerDetailsLoader}
              
              />
          </Route>

          <Route path='*' element={<Error/>}/>
        </Route>
  )
)
function App() {
  return (
      <RouterProvider router={router}/>
    
  );
}

export default App
