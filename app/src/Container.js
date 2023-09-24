import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CategoryContext } from "./App";
import { useNavigate } from "react-router-dom";
import { yellow } from "@mui/material/colors";

const customFontFamily = "YourCustomFont, sans-serif";

export default function Container({ name }) {
  const { setCat } = useContext(CategoryContext);
  const navigate = useNavigate();
  const useHandleClick = () => {
    setCat(name);
    navigate(`/category/${name}`);
  };
  return (
    <Card
      sx={{
        width: "19rem",
        backgroundColor: "#F5F5DC",
      }}
    >
      <CardActionArea onClick={useHandleClick}>
        <CardMedia
          sx={{
            width: "100%",
            height: "13.5rem",
          }}
          component="img"
          image={`/images/${name}.jpg`}
          alt="Image removed"
          
        />
        <CardContent>
          <Typography variant="h5" component="div" fontFamily={customFontFamily}>
            {name}
          </Typography> <br/>
          <Typography variant="h7" component="div" align="left">
            Price : to be fetched <br/>
            Seller Industry : to be fetched <br/>
            Quality : to be fetched<br/>
            Rating : NULL <br/>
            Location : to be fetched <br/>
            Description : to be fetched
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
