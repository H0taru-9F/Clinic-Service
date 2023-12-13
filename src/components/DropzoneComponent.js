import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/dropzone.css';

const Dropzone = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const onDrop = (acceptedFiles) => {
        // Вибір першого прийнятого файлу та збереження його в стані компонента
        const photo = acceptedFiles[0];
        setSelectedPhoto(photo);

        // Якщо ви хочете зберегти файл в локальному сховищі, використовуйте localStorage або sessionStorage
        // localStorage.setItem('photo', photo);
        // sessionStorage.setItem('photo', photo);
    };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Дозволяє приймати тільки файли з розширенням .png, .jpg та ін.
    });
    return (
        <div>
            <div {...getRootProps()} className='dropzone bg-white'>
                <input {...getInputProps()} />
                <p className='dropzone-title tx-gray'>{isDragActive ? 'Перетягніть фото сюди' : 'Перетягніть фото сюди або натисніть для вибору'}</p>
            </div>
            {selectedPhoto && (
                <div>
                    <p className='tx-green'>Вибрано фото: {selectedPhoto.name}</p>
                    {/*<img src={URL.createObjectURL(selectedPhoto)} alt="Selected" style={{ maxWidth: '100%' }} />*/}
                </div>
            )}
        </div>
    );
};


export default Dropzone;