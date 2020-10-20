import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import colums from "./data/col";
import rows from "./data/rows";

function App() {
  const data = {
    colums,
    rows
  };

  return (
    <MDBTable responsive>
    <MDBTableHead columns={data.columns} />
    <MDBTableBody rows={data.rows} />
  </MDBTable>
      
  );
}

export default App;