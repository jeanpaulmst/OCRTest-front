import { useState, useEffect } from "react"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import calculateInterests from "./calculateInterests";


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

interface TableProps {
    json: DataJson
}



export default function TableComponent({ json }  : TableProps) {

   
    //const [dataJsonWithInterests, setDataJsonWithInterests] = useState<any>(null)

    

    //TO-DO: Calcular intereses
    calculateInterests();
  
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>TIPO</TableCell>
                        <TableCell>FACTURA</TableCell>
                        <TableCell>FECHA EMISION</TableCell>
                        <TableCell>FECHA VTO</TableCell>
                        <TableCell>EFECTO PRESTADOR</TableCell>
                        <TableCell>SALDO ADEUDADO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        json.table.map((row: RowData, index: number) => (
                        <TableRow key={index}>
                            <TableCell align="right">{row.tipo}</TableCell>
                            <TableCell align="right">{row.factura}</TableCell>
                            <TableCell align="right">{row.fecha_emision}</TableCell>
                            <TableCell align="right">{row.fecha_vto}</TableCell>
                            <TableCell align="right">{row.efector_prestador}</TableCell>
                            <TableCell align="right">{row.saldo_adeudado}</TableCell>
                        </TableRow>
                        ))
                    }
                        
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                            {"TOTAL: " + json?.total}
                            </TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}
/*
  return (
    <div>

        <button> Traer datos </button>
        <div>
            <tr>
                <td>TIPO</td>
                <td>FACTURA</td>
                <td>FECHA DE EMISION</td>
                <td>FECHA VTO</td>
                <td>EFECTOR PRESTADOR</td>
                <td>SALDO ADEUDADO</td>
            </tr>
            {dataJson && dataJson.map((item: any, index: number) => {
                return (
                    <tr key={index}>
                        <td>{item.tipo}</td>
                        <td>{item.factura}</td>
                        <td>{item.fechaEmision}</td>
                        <td>{item.fechaVto}</td>
                        <td>{item.efectorPrestador}</td>
                        <td>{item.saldoAdeudado}</td>
                    </tr>
                )
            })}
        </div>

        <div style={ {display : !loading ? 'block' : 'none'} }>
            <p>Cargando...</p>
        </div>
    </div>
  )
}
  */