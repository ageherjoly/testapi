export interface Form {
  id: number;
  name?: string; // to name form template
  sections?: Section[];
  fields?: Field[] | null;
  actif: boolean;
}

export interface Selector {
  id: number;
  values: string[] | number[];
}

export interface Field {
  id: number;
  index: number; // used to store placement in form or section
  type: string | number | boolean | Selector;
  name: string; // to nmae field
  required: boolean;
  actif: boolean;
}

export interface Section {
  id: number;
  index: number; // used to store placement in form or section
  sections?: Section[] | null;
  fields?: Field[] | null;
  actif: boolean;
}
