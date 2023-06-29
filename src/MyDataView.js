import Section from "./component/Section";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function MyDataView(props) {
  const data = props.data;
  const titles = Object.keys(data["Original Data"]);

  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab__component">
      <TabContext value={value} centered>
        <TabList
          className="tabs__heading"
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          {titles.map((title, i) => (
            <Tab label={title.toUpperCase()} value={`${i}`} key={i} />
          ))}
        </TabList>
        {titles.map((title, i) => (
          <TabPanel value={`${i}`} key={i}>
            <Section
              data={data["Original Data"][title]}
              title="Original Data"
            />
            <Section
              data={data["Synthetic Data"][title]}
              title="Synthetic Data"
            />
          </TabPanel>
        ))}
      </TabContext>
    </div>
  );
}

export default MyDataView;
