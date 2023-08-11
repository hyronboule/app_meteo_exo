import React from "react";
import { TextInput } from "react-native";
import { searchBarStyle } from "../styles/SearchBar.style";

export const SearchBar = ({ onSubmit }) => {
  return (
    <TextInput
      onSubmitEditing={(e)=>onSubmit(e.nativeEvent.text)}
      style={searchBarStyle.search}
      placeholder="Rechercher une ville..."
    />
  );
};
