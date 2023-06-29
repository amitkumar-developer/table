import React from "react";
import Section from "./component/Section";
import { Tab, Tabs } from "react-bootstrap";

function MyDataView2(props) {
  const data = props.data;
  return (
    <div class="accordion-body">
      <Tabs
        defaultActiveKey="main"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="main" title="Main">
          <Section data={data["Original Data"].main} title="Original Data" />
          <Section
            data={data["Synthetic Data"].main}
            title="Synthetic Data"
          />{" "}
        </Tab>
        <Tab eventKey="employee" title="Employee">
          <Section
            data={data["Original Data"].employee}
            title="Original Data"
           
          />
          <Section
            data={data["Synthetic Data"].employee}
            title="Synthetic Data"
          />{" "}
        </Tab>
        <Tab eventKey="customer" title="Customer">
          <Section
            data={data["Original Data"].customer}
            title="Original Data"
          />
          <Section
            data={data["Synthetic Data"].customer}
            title="Synthetic Data"
          />{" "}
        </Tab>{" "}
        <Tab eventKey="product" title="Product">
          <Section data={data["Original Data"].product} title="Original Data" />
          <Section
            data={data["Synthetic Data"].product}
            title="Synthetic Data"
          />{" "}
        </Tab>
      </Tabs>
    </div>
  );
}

export default MyDataView2;
