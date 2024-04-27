import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Category, Product } from '../../interfaces/types';
import MultipleSelectChip from './MultipleSelectChip';

interface FiltersProps {
  categories: Category[];
  products: Product[];
  data:Product[];
  selectedCategory: String | '';
  setSelectedCategory: React.Dispatch<React.SetStateAction<String | ''>>;
  selectedProduct: String [] ;
  setSelectedProduct: React.Dispatch<React.SetStateAction<String[] | []>>;
  handleRunReport:any;
  setRunReportEnabled : React.Dispatch<React.SetStateAction<boolean>>;
  runReportEnabled:boolean;
}

const Filters: React.FC<FiltersProps> = ({
  categories,
  products,
  data,
  selectedCategory,
  setSelectedCategory,
  selectedProduct,
  setSelectedProduct,
  handleRunReport,
  setRunReportEnabled,
  runReportEnabled
  
}) => {

   const names =  data.map((obj) => obj["brand"]);;
  return (
    <>
      {/* Category Select */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="category-select-label">Select Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Select Category"
          onChange={(e) => setSelectedCategory(e.target.value as String)}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          
      <MultipleSelectChip names = {names} selectedCategory={selectedCategory} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}  />
      <Button
      onClick={handleRunReport}
      disabled={!runReportEnabled}
      sx={{ marginX: 1 }}
       variant="contained" color="primary" fullWidth>
        Run Report
      </Button>
    </>
  );
};

export default Filters;

