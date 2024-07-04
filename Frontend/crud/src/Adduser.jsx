
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';


export default function Adduser({user, setuser}) {
    const [open, setOpen] = useState(false);
    const [Messaage, SetMessage] = useState()
    const [formData, setFormData] = useState({
        name: '',
        fathername: '',
        email: '',
        Phone: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        axios.post("http://localhost:8000/api/CreateUser", formData)
        .then((res)=>{
            console.log(res.data)
            SetMessage(res.data.Message)
            setuser(prevData =>[...prevData, res.data.NewUser])
            setFormData({
                name: '',
        fathername: '',
        email: '',
        Phone: '',
            })
        })
        // Add form submission logic here
      };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box m={1}>
          
        <Button
        startIcon= {<AddIcon/>}
         variant="contained"
          sx={{background:'red',
            '&:hover': {
                backgroundColor: '#d10505',
              },
          }}
           onClick={handleClickOpen}>
             
            Add user
            </Button>


        <Dialog
       
        open={open}
        onClose={handleClose}
      
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 5 }}>
            <Typography>Add User</Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Father's Name"
          name="fathername"
          value={formData.fathername}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Phone"
          name="Phone"
          value={formData.Phone}
          onChange={handleChange}
          margin="normal"
          required
          type="tel"
        />
        
        <Button 
        onClick={handleClose}
        type="submit"
         variant="contained"
         sx={{background:'red',
            mt: 2,
            '&:hover': {
                backgroundColor: '#d10505',
              },
          }}
           fullWidth
            >
          Submit
        </Button>
      </Box>
      </Dialog>
    </Box>
  )
}
