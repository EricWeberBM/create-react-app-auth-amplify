import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function BasicModal({ModalVisible, handleClose, handleSubmit}) {
    const [value, setValue] = React.useState("");

    const submit = (event) => {
      event.preventDefault();
      handleSubmit(value);
    }

    return (
        <Modal
          open={ModalVisible}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a new Provider
            </Typography>
            <br/>
            <form onSubmit={submit}>
              <TextField id="outlined-basic" label="Providername" variant="outlined" placeholder='SunnyCars' value={value} onChange={(event) => setValue(event.target.value)}/>
            </form>
          </Box>
        </Modal>
    );
  }