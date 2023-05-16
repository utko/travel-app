import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

function TravelForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [paxNumber, setPaxNumber] = useState(1);
  const [travelType, setTravelType] = useState("");
  const [location, setLocation] = useState("");
  const [cashAmount, setCashAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, paxNumber, travelType, location, cashAmount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField type="number" label="Quantas pessoas vão viajar" value={paxNumber} onChange={(e) => setPaxNumber(e.target.value)} />
      <FormControl>
        <InputLabel>Tipo de viagem</InputLabel>
        <Select value={travelType} onChange={(e) => setTravelType(e.target.value)}>
          <MenuItem value={"Familia"}>Familia</MenuItem>
          <MenuItem value={"Aventura"}>Aventura</MenuItem>
          <MenuItem value={"Gastronomia"}>Gastronomia</MenuItem>
          <MenuItem value={"Descançar"}>Descançar</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Onde você está agora" value={location} onChange={(e) => setLocation(e.target.value)} />
      <FormControl>
        <InputLabel>Quanto você quer gastar</InputLabel>
        <Select value={cashAmount} onChange={(e) => setCashAmount(e.target.value)}>
          <MenuItem value={"até 2000 reais"}>até 2000 reais</MenuItem>
          <MenuItem value={"até 10000 reais"}>até 10000 reais</MenuItem>
          <MenuItem value={"O quanto for preciso"}>O quanto for preciso</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit">Pesquisar ideias</Button>
    </form>
  );
}

export default TravelForm;
