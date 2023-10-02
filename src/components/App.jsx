// src/components/App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContacts } from '../redux/phonebookSlice';
import { DivContainer } from './Contacts/Styles/DivStyles';
import Contacts from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();

  // Cargar contactos desde el almacenamiento local al iniciar la aplicación
  
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  return (
    <section>
      <DivContainer>
        <Contacts />
      </DivContainer>
      <Toaster />
    </section>
  );
};

export default App;
