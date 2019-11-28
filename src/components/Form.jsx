import React from 'react';

const Form = (props) => {
  return (
<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
      <label>
        <p>Search a Github Account:</p>
        <input name="username"
        className = "search-button"
        type="text"
        placeholder="username"
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
      />
      </label>
      <div>
      
      <input
        type="submit"
        value="Enter"
      />
   </div>
    </form>
)};
export default Form;