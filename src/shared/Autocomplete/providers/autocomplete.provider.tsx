import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface AutocompleteContextProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  results: string[];
  setResults: Dispatch<SetStateAction<string[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AutocompleteContext = createContext<AutocompleteContextProps>({
  search: '',
  setSearch: () => {},
  results: [],
  setResults: () => {},
  loading: false,
  setLoading: () => {}
});

interface AutocompleteProviderProps {
  children: React.ReactNode;
}

export const AutocompleteProvider = ({ children }: AutocompleteProviderProps) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const value = {
    search,
    setSearch,
    results,
    setResults,
    loading,
    setLoading
  };

  return (
    <AutocompleteContext.Provider value={value}>{children}</AutocompleteContext.Provider>
  );
}
