import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/dropzone.css';
import usePostRequest from "../hooks/usePostRequest";

const Dropzone = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const { postData } = usePostRequest('/');

    const onDrop = async (acceptedFiles) => {
        const photo = acceptedFiles[0];
        setSelectedPhoto(photo);

        try {
            await postData({ photo }); // Якщо на сервері очікується об'єкт з властивістю photo
            console.log('Фото успішно відправлено на сервер');
        } catch (error) {
            console.error('Помилка відправлення фото на сервер', error);
        }
    };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*'
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