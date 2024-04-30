import React from 'react';

import './Autocomplete.css';
import { Input, Result } from './components';
import { AutocompleteProvider } from './providers';

export const Autocomplete = () => (
  <AutocompleteProvider>
    <div>
      <Input />
      <Result />
    </div>
  </AutocompleteProvider>
);
