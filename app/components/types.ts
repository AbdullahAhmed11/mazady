// components/types.ts
export interface Category {
    id: number;
    name: string;
    children?: Category[];
  }
  
  export interface Property {
    id: number;
    name: string;
    options: Option[];
  }
  
  export interface Option {
    id: number;
    name: string;
    child?: boolean; // Indicates if this option has child properties
  }
  
  export interface SelectedValues {
    [key: number]: { value: string | number; label: string };
  }