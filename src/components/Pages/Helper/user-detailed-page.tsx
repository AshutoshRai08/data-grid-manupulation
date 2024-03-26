import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

export default function MediaCard() {
  const dispatch = useDispatch<AppDispatch>();
  const user: any = useSelector((state: RootState) => state.fetchDetails.user);
  // let userId=useParams()
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={`${user.user.profile_picture}`}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.user.first_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Country:</b> {user.user.country} <br />
              <b>City:</b> {user.user.city} <br />
              <b>Email:</b> {user.user.email} <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            <Button size="small" onClick={() => navigate(`/`)}>
              Back
            </Button>
          </CardActions>
        </Card>
      </div>
    </React.Fragment>
  );
}
