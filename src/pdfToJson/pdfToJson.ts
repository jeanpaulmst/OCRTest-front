
import axios from 'axios';



const pdfToJson = async (file: File | null) => {

    let response = null
    try {

        //TO-DO: Pasarle el archivo a la API
        response =  (await axios.post('http://localhost:3000/ocr')).request(
            file,
            {
                headers: {
                    'Content-Type': 'application/pdf'
                }
            }
        )
        
    } catch(error){
        console.log(error)
    }
    
    return response
}

export default pdfToJson