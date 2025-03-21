
import TableComponent from './pdfToJson/TableComponent'
import InputsComponent from './inputs/inputsComponent'
import CircularProgress from '@mui/material/CircularProgress';

import './App.css'
import { useEffect, useState } from 'react'
import pdfToJson from './pdfToJson/pdfToJson';

interface RowData {
  tipo: string,
  factura: string,
  fecha_emision: string,
  fecha_vto: string,
  efector_prestador: string,
  saldo_adeudado: string
}

interface DataJson {
  table: RowData[],
  total: string
}

function App() {
  
  //Mostrar la tabla
  const [showTable, setShowTable] = useState<boolean>(false)

  //Archivo pdf
  const [selectedFile, setSelectedFile] = useState<File>(new File([], ""));

  //Variable para mostrar spinner
  const [loading, setLoading] = useState<boolean>(false)

  //responseFile
  const [responseJSON, setResponseJSON] = useState<DataJson>({table: [], total: ""})

  useEffect(() => {
    console.log(showTable ? "showTable" : "not showTable")
    console.log(selectedFile ? "selectedFile" : "not selectedFile")
  }
  , [showTable, selectedFile])


  //Transformación de pdf a json
  const fetchData = async (file: File) => {
    setLoading(true)
    try {
        const response = await pdfToJson(file)
        console.log(response)
        setResponseJSON(response?.data)
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
    }


  return (
    <>
      <InputsComponent
        onFileSelect={(file) => setSelectedFile(file)}
        onShowTable={() => setShowTable(true)}
        onLoading={() => setLoading(true)}
        onGetOcr={() => fetchData(selectedFile)}
        
      />
      <TableComponent json={responseJSON}/> 

      {loading && <CircularProgress/>}
      
    </>
  )
}

export default App
