import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";


const ProdDetail=()=>{
debugger
    let prodVal=useSelector((state:RootState)=>state.fetchJson.cardVal)
    let prodCardVal=useSelector((state:RootState)=>state.fetchJson.json).products.filter(prod=>prod.title==prodVal)
    debugger
    return (
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
            //   image={}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {prodCardVal[0].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>Country:</b> {prodCardVal[0].description} <br />
                <b>City:</b> {prodCardVal[0].discountPercentage} <br />
                <b>Email:</b> {prodCardVal[0].rating} <br />
              </Typography>
            </CardContent>
          </Card>
        </div>
    )
}
export default ProdDetail;