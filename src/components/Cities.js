import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import PlaceItem from "./PlaceItem";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import CityItem from "./CityItem";
import loadingIcon from "../loading.gif";

function Cities() {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("state==>" + cities);
  });

  useEffect(() => {
    updateCityList();
  }, []);

  const updateCityList = () => {
    axios.get("https://localhost:44304/city").then((response) => {
      console.log(response);
      setCities(response.data.data);
    });
  };
  return (
    <div className="content-container">
      {cities.length > 0 ? (
        <>
          <h2 className="content-header-text">Cities</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>City ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city, index) => {
                return (
                  <CityItem
                    key={index}
                    obj={{
                      id: city.id,
                      name: city.name,
                      updateCityList: updateCityList,
                    }}
                  />
                );
              })}
            </tbody>
          </Table>
          <Button
            name="button"
            className="detail-form-input"
            variant="primary"
            onClick={() => {
              navigate("create");
            }}
          >
            New City
          </Button>
        </>
      ) : (
        <img className="loading-img" src={loadingIcon} />
      )}
    </div>
  );
}

export default Cities;
