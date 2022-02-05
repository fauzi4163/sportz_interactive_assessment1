import React, { useMemo, useState } from "react";
import axios from "axios";
import { DropDownList } from "@progress/kendo-react-dropdowns";
export default class CountryList extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/API`).then((res) => {
      const countries = res.data;
      this.setState({ countries });
    });
  }

  render() {
    return (
      <ul>
        {this.state.countries.map((country) => (
          <li key={country.rank}>{country.name}</li>
        ))}
      </ul>
    );
  }
}
