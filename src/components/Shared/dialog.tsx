import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { dialogModalToogleReducer } from "../../Features/helper/modalReducer";
import { deleteTodo } from "../../Features/data/fetchData";
import { GridRowParams } from "@mui/x-data-grid";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSaveClose = () => {
    dispatch(dialogModalToogleReducer());
    dispatch(deleteTodo(rowPara));
  };

  const handleClose = () => {
    dispatch(dialogModalToogleReducer());
  };
  const open1 = useSelector(
    (state: RootState) => state.modalReducer.openDialog
  );
  const rowPara: GridRowParams = useSelector(
    (state: RootState) => state.modalReducer.rowPara
  );

  return (
    <React.Fragment>
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to Delete!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default AlertDialogSlide;
