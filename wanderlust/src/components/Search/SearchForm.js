import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  return (
    <div>
    <section className="search-form">
      <form onSubmit={() => onSearch("name")}>

        <input
          onChange={"handleInputChange"}
          placeholder="searching!"
          value={"search wanderlust"}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
    </div>
  );
}