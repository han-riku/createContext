import './App.css'

import Guidance from './Guidance'
import PageOne from './property/PageOne'
import PageTwo from './property/PageTwo'
import PropertyComplete from './property/PropertyComplete'

import { RouterProvider, createBrowserRouter, Route, Routes } from 'react-router-dom'

function Root() {
  return (
    <Routes>
      <Route path="uploadForm">
        <Route path="guidance" element={<Guidance />} />
        <Route path="pageOne" element={<PageOne />} />
        <Route path="pageTwo" element={<PageTwo />} />
        <Route path="propertyComplete" element={<PropertyComplete />} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
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
