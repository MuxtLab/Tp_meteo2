import React, { useEffect, useState } from 'react';
import '../Form.css';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';


type WeatherFormData = {
    city: string;
};

interface WeatherFormProps {
    onSubmit: (data: WeatherFormData) => void;
}

const WeatherForm = ({ onSubmit }: WeatherFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<WeatherFormData>();
    const [city, setCity] = useState('');
    
    const handleFormSubmit = (data: WeatherFormData) => {
        setCity(data.city);
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                className="custom-textfield"
                id="standard-size-small"
                {...register('city', { required: 'City name is required' })}
                error={errors.city && <p>{errors.city.message}</p>}
                label="Ville"
                defaultValue="..."
                helperText=""
                InputProps={{
                    className: 'input-field' // Classe pour le champ de saisie
                }}
                InputLabelProps={{
                    className: 'custom-label' // Classe pour le label
                }}
        />
        <button type="submit" className='submit-button'>Envoyer</button>
        </form>
    );
};

export default WeatherForm;
