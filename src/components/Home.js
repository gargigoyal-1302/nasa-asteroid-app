import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { getAllAsteroidAction } from "../redux/Actions";

function Home() {
  const dispatch = useDispatch();

  // calling api to get all asteroid data
  useEffect(() => {
    dispatch(getAllAsteroidAction());
  }, [dispatch]);

  const allAsteroidsData = useSelector((state) => state.allAsteroids);
  console.log(allAsteroidsData);

  const [value, setValue] = useState();
  const [disabled, setDisabled] = useState(true);

  // handles change of manually putting asteroid id
  const handleChange = (e) => {
    setValue(e.target.value);
    value !== "" ? setDisabled(false) : setDisabled(true);
  };

  // handles random click ..to select random id of an asteroid
  const handleRandomClick = () => {
    value !== "" ? setDisabled(false) : setDisabled(true);

    const randomAsteroidData =
      allAsteroidsData[Math.floor(Math.random() * allAsteroidsData.length)];
    console.log(randomAsteroidData);
    const randomAsteroidId = randomAsteroidData?.id;
    setValue(randomAsteroidId);
  };
  return (
    <div className="body">
      <div>
        <TextField
          id="standard-basic"
          placeholder="Enter Asteroid ID"
          onChange={handleChange}
          value={value}
          autoComplete="off"
        />
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className="ml-4 mt-1.5"
          onClick={handleRandomClick}
        >
          Random Asteroid
        </Button>
      </div>
      <br />
      <div>
        {disabled ? (
          <Link to="/" className="btn btn-danger">
            Submit
          </Link>
        ) : (
          <Link to={`/details/${value}`} className="btn btn-danger">
            Submit
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
