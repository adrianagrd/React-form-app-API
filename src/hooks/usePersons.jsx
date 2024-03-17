import { useState, useEffect } from "react";
import axios from "axios";

const usePersons = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data);
            });
    }, []);

    const handleChangePersonsValue = (newValue) => {
        setPersons(newValue)
    }

    return {
        persons,
        handleChangePersonsValue
    };
}

export default usePersons;