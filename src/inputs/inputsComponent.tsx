
import './inputsComponents.css'

interface InputsProps {
    onShowTable: () => void;
    onFileSelect: (file: File) => void;
    onLoading: () => void;
    onGetOcr: () => void;
}
const InputsComponent = ( {onShowTable, onFileSelect, onLoading, onGetOcr} : InputsProps ) => {


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];  // Obtiene el primer archivo
        if (file) {
          onFileSelect(file);
        }
    }

    const handleButtonClick = () => {
        onShowTable();
        onLoading();
        onGetOcr();
    }


    return (
        <div className="inputs">
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleButtonClick}>Procesar OCR</button>
        </div>
    )
}

export default InputsComponent