import { useContext } from "react";

import { AutocompleteContext } from "./autocomplete.provider";

export const useAutocomplete = () => useContext(AutocompleteContext);
