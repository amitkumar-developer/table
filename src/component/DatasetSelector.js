import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const DatasetSelector = (props) => {
  const [menuItems, setMenuItems] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const choiceSelect = (event) => {
    const { choice } = props;
    choice(event.target.attributes.getNamedItem('data-key').value);
  }

  useEffect(() => {
    const { results } = props;
    fetch(results)
    .then((res) => res.json())
    .then((data) => {
      setMenuItems(data.results);
    }).catch((err) => console.log(err));
  }, []);

  if(!menuItems) return null;
  return (
    <div className="row selector">
      <div className="col-md-12">
        <Dropdown aria-label="Dataset Selector" onClick={e => {
          setSelectedItem(e.target.innerText);
        } }>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {selectedItem ? selectedItem : menuItems[0].toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu onClick={choiceSelect}>
            {menuItems.map((item, i) => <Dropdown.Item data-key={++i} key={i}>{item.toUpperCase()}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default DatasetSelector;
