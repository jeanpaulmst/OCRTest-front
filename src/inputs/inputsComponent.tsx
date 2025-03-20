import './inputsComponents.css'

interface InputsProps {
    onShowTable: () => void;
    onFileSelect: (file: File) => void;
}
const InputsComponent = ( {onShowTable, onFileSelect} : InputsProps ) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];  // Obtiene el primer archivo
        if (file) {
          onFileSelect(file);
        }
    }

    return (
        <div className="inputs">
            <input type="file" onChange={handleFileChange}/>
            <button onClick={() => {onShowTable}}>Procesar OCR</button>
        </div>
    )
}

export default InputsComponent