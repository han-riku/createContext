import './App.css'

import Guidance from './Guidance'
import UsePropertyContextProvider from './property/UsePropertyContextProvider'
import PageOne from './property/PageOne'
import PageTwo from './property/PageTwo'
import PropertyComplete from './property/PropertyComplete'
import CounselingPageOne from './counseling/CounselingPageOne'
import CounselingPageTwo from './counseling/CounselingPageTwo'
import CounselingPageThree from './counseling/CounselingPageThree'
import CounselingComplete from './counseling/CounselingComplete'

import { RouterProvider, createBrowserRouter, Route, Routes } from 'react-router-dom'

function Root() {
  return (
    <UsePropertyContextProvider>
      <Routes>
        <Route path="uploadForm">
          <Route path="guidance" element={<Guidance />} />
          <Route path="pageOne" element={<PageOne />} />
          <Route path="pageTwo" element={<PageTwo />} />
          <Route path="propertyComplete" element={<PropertyComplete />} />
          <Route path="counselingPageOne" element={<CounselingPageOne />} />
          <Route path="counselingPageTwo" element={<CounselingPageTwo />} />
          <Route path="counselingPageThree" element={<CounselingPageThree />} />
          <Route path="counselingComplete" element={<CounselingComplete />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </UsePropertyContextProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
