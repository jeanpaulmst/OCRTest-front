
import TableComponent from './pdfToJson/TableComponent'
import InputsComponent from './inputs/inputsComponent'

import './App.css'
import { useState } from 'react'

function App() {
  
  const [showTable, setShowTable] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <>
      <InputsComponent/>
      {showTable && <TableComponent />}
      
    </>
  )
}

export default App
