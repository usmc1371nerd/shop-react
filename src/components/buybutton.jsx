import React from 'react';
import Button from '@mui/material/Button'; // Import Button from Material-UI

export function ShopButton() {
  return (
    <Button 
      onClick={() => {
        alert('Item Added');
      }}
      variant="contained" 
      color="primary"
    >
      Buy Now
    </Button>
  );
}

export default ShopButton;