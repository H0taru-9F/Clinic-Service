import React, { useState } from 'react';
import {Dropdown} from "react-bootstrap";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=" "
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className='tx-gray '
    >
        {children}
        &#x25bc;
    </a>
));
const DropdownComponent = ({Toggle,Item,onItemSelected }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (selectedItem) => {
        setSelectedItem(selectedItem);
        if (onItemSelected) {
            onItemSelected(selectedItem);
        }
    };

    return (
        <div className='Dropdown-block'>
            <Dropdown className='Body2'>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    {selectedItem ? `Вибрано: ${selectedItem}` : Toggle}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {Item.map(item => {
                        return(
                            <Dropdown.Item  key={item} onClick={() => handleItemClick(item)}>
                                {item}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>

    );
};
export default DropdownComponent;
