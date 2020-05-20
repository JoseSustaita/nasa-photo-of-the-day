import React, { useState, useEffect } from "react";
import NasaCard from "../main_content.js/nasaImg";
import {
  Jumbotron,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import axios from "axios";
import "./main.css";

function Main() {
  const [img, setImg] = useState([]);
  const [date, setDate] = useState([]);

  const ButtonTest = props => {
    return (
      <>
        {" "}
        <Button color="primary">Submit</Button>
      </>
    );
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=dR6HJjbWWnsJNIcqpHqrHtw5uezXohakocqhIEPE"
      )
      .then(res => {
        setImg([res.data]);
      })
      .catch(error => {
        console.log("Sorry no photo", error);
      });
  }, []);

  return (
    <Jumbotron>
      <Card className="mainBodyContainer">
        <CardHeader>
          <CardTitle tag="h3" className="day">
            Photo Of The Day
          </CardTitle>
          <CardText>
            <label htmlFor="start"> Date: </label>
          </CardText>
        </CardHeader>
        <CardBody>
          <CardHeader>
            <form>
              <input
                type="date"
                id="start"
                name="photo-start"
                min="1900-01-01"
                max="2020-03-03"
              />
              <ButtonTest />
            </form>
            <div className="imgOfDay">
              {img.map((info, index) => {
                return (
                  <NasaCard
                    key={index}
                    date={info.date}
                    explanation={info.explanation}
                    hdurl={info.hdurl}
                  />
                );
              })}
            </div>
          </CardHeader>
        </CardBody>
      </Card>
    </Jumbotron>
  );
}

export default Main;
