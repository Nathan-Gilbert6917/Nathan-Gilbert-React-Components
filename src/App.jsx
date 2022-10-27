import React, { useState } from "react";

import "./App.css";

import ToggleSwitch from "./Components/ToggleSwitch/ToggleSwitch";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import TextArea from "./Components/TextArea/TextArea";
import MenuTab from "./Components/MenuTab/MenuTab";
import SearchBar from "./Components/SearchBar/SearchBar";
import SelectBar from "./Components/SelectBar/SelectBar";
import TabSet from "./Components/TabSet/TabSet";
import List from "./Components/List/List";
import Modal from "./Components/Modal/Modal";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import UserDropdown from "./Components/UserDropdown/UserDropdown";
import Accordion from "./Components/Accordion/Accordion";
import Checkbox from "./Components/Checkbox/Checkbox";
import MyTable from "./Components/MyTable/MyTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  // Button States
  const [toggle1Value, setToggle1Value] = useState(false);
  const [toggle2Value, setToggle2Value] = useState(true);

  const button1 = () => {
    alert("Button 1 Clicked Toggle 1 Value: " + toggle1Value);
  };

  const button2 = () => {
    alert("Button 2 Clicked Toggle 2 Value: " + toggle2Value);
  };

  // SearchBar State
  const [inputText, setInputText] = useState("");
  const search = () => {
    alert("Search: " + inputText);
  };
  const searchInputHandler = (e) => {
    setInputText(e.target.value);
  };

  // SelectBar State
  const [selectValue, setSelectValue] = useState("");
  const selectHandler = (e) => {
    setSelectValue(e.target.value);
  };
  const getSelectValue = () => {
    alert("Select value: " + selectValue);
  };

  const options = [
    { value: "0", text: "- Select -" },
    { value: "1", text: "Option 1" },
    { value: "2", text: "Option 2" },
    { value: "3", text: "Option 3" },
    { value: "4", text: "Option 4" },
    { value: "5", text: "Option 5" },
  ];

  // TabSet
  const activeTab = "Gator";

  // List
  // const data = [
  //   {"title": "List Item 1"},
  //   {"title": "List Item 2"},
  //   {"title": "List Item 3"},
  //   {"title": "List Item 4"},
  //   {"title": "List Item 5"}
  // ]

  // Modal
  const [modalState, setModalState] = useState(false);
  const showModal = () => {
    setModalState(true);
  };
  const hideModal = () => {
    setModalState(false);
  };

  // ProgressBar
  const [currentStep, setStep] = useState(1);
  const [numberOfSteps, setNumberOfSteps] = useState(2);
  const changeNumberOfSteps = (e) => {
    setNumberOfSteps(parseInt(e.target.value));
    setStep(1);
  };
  const prev = () => {
    if (currentStep - 1 !== 0) {
      setStep(currentStep - 1);
    }
  };
  const next = () => {
    if (currentStep !== numberOfSteps) {
      setStep(currentStep + 1);
    }
  };
  const stepOptions = [
    { value: 2, text: "2 Steps" },
    { value: 3, text: "3 Steps" },
    { value: 4, text: "4 Steps" },
    { value: 5, text: "5 Steps" },
    { value: 6, text: "6 Steps" },
    { value: 7, text: "7 Steps" },
    { value: 8, text: "8 Steps" },
    { value: 9, text: "9 Steps" },
    { value: 10, text: "10 Steps" },
  ];

  const [acccordionActive, setAcccordionActive] = useState(false);

  const handleAccordionClick = () => {
    setAcccordionActive(!acccordionActive);
  };

  // Table Data
  const headers = ["Header 1", "Header 2", "Header 3"];

  const data = [
    {
      id: "1",
      items: ["Numbered 1", "Numbered 2", "Numbered 3"],
    },
    {
      id: "2",
      items: ["Numbered 4", "5", "Numbered 6"],
    },
    {
      id: "3",
      items: ["Numbered 7", "Numbered 8", "Numbered 9"],
    },
    {
      id: "4",
      items: ["Numbered 10", "", "Numbered 12"],
    },
  ];

  return (
    <div className="App">
      <h1>React Components by Nathan Gilbert</h1>
      <div className="grid">
        {/* Toggle Switch Off*/}
        <div className="display-box">
          <h3>Toggle Switch Off</h3>
          <ToggleSwitch handleToggle={() => setToggle1Value(!toggle1Value)} />
        </div>

        {/* Toggle Switch On*/}
        <div className="display-box">
          <h3>Toggle Switch On</h3>
          <ToggleSwitch
            isOn={toggle2Value}
            handleToggle={() => setToggle2Value(!toggle2Value)}
          />
        </div>

        {/* Button Default */}
        <div className="display-box">
          <h3>Button Default</h3>
          <Button label="Toggle 1" handleClick={() => button1()} showShadow />
        </div>

        {/* Button Circular */}
        <div className="display-box">
          <h3>Button Circular</h3>
          <Button label="Toggle 2" isCircular handleClick={() => button2()} />
        </div>

        {/* Button Default Icon */}
        <div className="display-box">
          <h3>Button Default with Icon</h3>
          <Button
            icon={<FontAwesomeIcon icon={solid("plus")} />}
            label="Toggle 1"
            handleClick={() => button1()}
          />
        </div>

        {/* Button Circular Icon */}
        <div className="display-box">
          <h3>Button Circular with Icon</h3>
          <Button
            icon={<FontAwesomeIcon icon={solid("plus")} />}
            label="Toggle 2"
            isCircular
            handleClick={() => button2()}
            showShadow
          />
        </div>

        {/* Input w/ label */}
        <div className="display-box">
          <h3>Input Text Box w/ label</h3>
          <Input
            label="Name"
            type="text"
            name="input"
            placeholder=""
            required
          />
        </div>

        {/* Password w/ horizontal label */}
        <div className="display-box">
          <h3>Input Text Box type: password</h3>
          <Input label="Password" type="password" isHorizontal />
        </div>

        {/* email w/o label */}
        <div className="display-box">
          <h3>Input Text Box w/o label</h3>
          <Input type="email" placeholder="Email" />
        </div>

        {/* text area w/ label*/}
        <div className="display-box">
          <h3>Text Area</h3>
          <TextArea label="Text Area" type="email" required />
        </div>

        {/* menu tab */}
        <div className="display-box grey">
          <h3>Menu Tab Not Active</h3>
          <MenuTab label="Home" />
        </div>

        {/* menu tab */}
        <div className="display-box grey">
          <h3>Menu Tab Active</h3>
          <MenuTab active label="Home" />
        </div>

        {/* menu tab */}
        <div className="display-box grey">
          <h3>Menu Tab w/ Icon</h3>
          <MenuTab
            label="Groceries"
            icon={<FontAwesomeIcon icon={solid("house")} />}
          />
        </div>

        {/* menu tab */}
        <div className="display-box grey">
          <h3>Active Menu Tab w/ Icon</h3>
          <MenuTab
            active
            label="Groceries"
            icon={<FontAwesomeIcon icon={solid("house")} />}
          />
        </div>

        {/* Search Bar */}
        <div className="display-box">
          <h3>Search Bar</h3>
          <SearchBar
            handleOnChange={(e) => searchInputHandler(e)}
            handleClick={() => search()}
          />
        </div>

        {/* Selection Bar */}
        <div className="display-box">
          <h3>Select Bar</h3>
          <SelectBar
            value={selectValue}
            data={options}
            handleOnChange={(e) => selectHandler(e)}
          />

          <Button
            label="Show Selection Value"
            isCircular
            handleClick={() => getSelectValue()}
          />
        </div>

        {/* Modal */}
        <div className="display-box">
          <Button
            label="Open Modal"
            handleClick={() => showModal()}
            isCircular
          />
          <Modal
            title="Modal"
            show={modalState}
            handleClose={() => hideModal()}
          >
            {/* Progress Bar */}
            <ProgressBar
              numberOfSteps={numberOfSteps}
              currentStep={currentStep}
            />
            <div className="button-div">
              <Button label="Prev" handleClick={() => prev()} />
              <Button label="Next" handleClick={() => next()} />

              <SelectBar
                data={stepOptions}
                handleOnChange={(e) => changeNumberOfSteps(e)}
              />
            </div>
          </Modal>
        </div>

        {/* UserDropdown */}
        <div className="display-box">
          <h3>User Dropdown</h3>
          <UserDropdown />
        </div>
      </div>

      {/* Accordion */}
      <div className="large-container">
        <h3>Accordion</h3>
        <Accordion
          title="Accordion"
          onClick={handleAccordionClick}
          isActive={acccordionActive}
        >
          <List>
            <Checkbox label="Task 1" />
            <Checkbox label="Task 2" />
            <Checkbox label="Task 3" />
            <Checkbox label="Task 4" />
          </List>
        </Accordion>
      </div>

      {/* TabSet */}
      <div className="large-container">
        <h3>Tab Set w/ 3 tabs</h3>
        <TabSet intitalActiveTab={activeTab}>
          <div title="Gator">
            <div className="gator">See ya later, Alligator!</div>
          </div>
          <div title="Croc">After 'while, Crocodile!</div>
          <div title="Sarcosuchus">
            Nothing to see here, this tab is extinct!
          </div>
        </TabSet>
      </div>

      {/* List */}
      <div className="large-container">
        <h3>List of custom checkboxes</h3>
        <List>
          <Checkbox label="Task 1" />
          <Checkbox label="Task 2" />
          <Checkbox label="Task 3" />
          <Checkbox label="Task 4" />
        </List>
      </div>

      {/* Progress Bar */}
      <div className="large-container">
        <h3>Progress Step Bar</h3>
        <ProgressBar numberOfSteps={numberOfSteps} currentStep={currentStep} />
        <div className="button-div">
          <Button label="Prev" handleClick={() => prev()} />
          <Button label="Next" handleClick={() => next()} />

          <SelectBar
            data={stepOptions}
            handleOnChange={(e) => changeNumberOfSteps(e)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="large-container">
        <h3>Default Table</h3>
        <MyTable headers={headers} data={data} />
      </div>

      {/* Table */}
      <div className="large-container">
        <h3>
          Rounded Table with custom header class and header lines but no body
          lines
        </h3>
        <MyTable
          headers={headers}
          data={data}
          headerClass="table-header"
          isRounded
          noVerticalLines
          noHorizontalLines
        />
      </div>

      {/* Table */}
      <div className="large-container">
        <h3>Rounded Table with no header lines and horizontal body lines</h3>
        <MyTable
          headers={headers}
          data={data}
          headerClass="table-header"
          noHorizontalLines
          noHeaderLines
        />
      </div>

      {/* Table */}
      <div className="large-container">
        <h3>Rounded Table with header lines and vertical body lines</h3>
        <MyTable
          headers={headers}
          data={data}
          headerClass="table-header"
          isRounded
          noVerticalLines
        />
      </div>

      {/* Table */}
      <div className="large-container">
        <h3>Table with header lines and horizontal & vertical body lines</h3>
        <MyTable headers={headers} data={data} headerClass="table-header" />
      </div>
    </div>
  );
}

export default App;
