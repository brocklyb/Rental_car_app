import React from "react"


const Careers = () => {
    return (
      <div id="careers_main_container">
        <h2>Careers</h2>

        <div id="search_careers">
          <input placeholder="Enter Job Title / Keyword(s)"></input>
          <input placeholder="Enter Location"></input>
          
          <label for="distanceDropdown">Select Distance:</label>
            <select id="distanceDropdown">
              <option value="1">1 mile</option>
              <option value="2">2 miles</option>
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="20">20 miles</option>
              <option value="50">50 miles</option>
              <option value="100">100 miles</option>
            </select>

            <button>Search</button>
            <button>Clear</button>
        </div>

        <div id="careers_left_container">
          <strong>Job Type</strong>
          <br></br>

          <label>Contract:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <label>Temp to Hire:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <label>Direct Hire:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <label>Part Time:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <label>Temporary:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <br></br>
          <strong>Remote Status</strong>
          <br></br>

          <label>Remote Available:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <label>Hybrid:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <label>Full Remote:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>

          <label>Onsite:</label>
          <input type="checkbox" name="Future"></input>
          <br></br>
          <br></br>
        </div>

        <div id="careers_email">
          <strong>GET NOTIFIED ABOUT NEW LISTINGS</strong>
          <br></br>

          <input placeholder="Enter Email Address"></input>
          <br></br>
          <br></br>

          <strong>SUBMIT A GENERAL APPLICATION</strong>
        </div>
      
      </div>
  );
};

export default Careers;