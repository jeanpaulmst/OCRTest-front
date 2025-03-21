
import axios from 'axios';


const pdfToJson = async (file: File) => {

    console.log("Convirtiendo PDF a JSON...");
    try {
        const formData = new FormData();
        formData.append("file", file);
        
        const url = 'http://localhost:3000/ocr';

        const response = await axios.post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        console.log("Respuesta de la conversión OCR:", response);

        return response
    } catch (error) {
        console.error("Error en la conversión OCR:", error);
        return null;
    }
};

export default pdfToJson