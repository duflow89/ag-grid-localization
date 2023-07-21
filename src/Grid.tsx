import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { ROWDATA } from "./Data";
import { getColumnDefs } from "./Columns";
import { TRANSLATIONS } from "./Transaltions";

function Grid(props: { language: string }) {
  const [destroyed, setDestroyed] = useState(false);

  const rowData = ROWDATA;

  const defaultColDef = {
    filter: true,
    flex: 1
  };

  useEffect(() => {
    setDestroyed(true);
    setTimeout(() => setDestroyed(false));
  }, [props.language]);

  return destroyed ? null : (
    <div
      id="myGrid"
      style={{
        height: "405px",
        width: "95vw"
      }}
      className="ag-theme-alpine-dark"
    >
      <AgGridReact
        localeText={TRANSLATIONS[props.language]}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={getColumnDefs(props.language)}
        sideBar={{
          toolPanels: [
            {
              id: "filters",
              labelDefault: "Filters",
              labelKey: "filters",
              iconKey: "filter",
              toolPanel: "agFiltersToolPanel",
              toolPanelParams: {
                suppressExpandAll: true,
                suppressFilterSearch: true
              }
            }
          ]
        }}
      />
    </div>
  );
}

export { Grid };
