
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Icon from '@mui/material/Icon';
import AddIcon from '@mui/icons-material/Add';
import DrawIcon from '@mui/icons-material/Draw';
import axios from 'axios';


export default function Edituser({getid, user, setuser, userdata, onUpdateUser}) {
   
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        fathername:'' ,
        email: '',
        Phone: '',
       
    });
    const getuserByID = ()=>{
        axios.get('')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        axios.put(`http://localhost:8000/api/UpdateUser/${formData._id}`, formData)
        .then((res)=>{
            console.log(res.data.updateuser)
            onUpdateUser(res.data.updateuser);
            setOpen(false);
        }).catch((error)=>{
            console.log(error)
        })
        // Add form submission logic here
    };

    const handleClickOpen = () => {
        setOpen(true);
        getid() 
    };
    useEffect(() => {
        if (userdata) {
          setFormData(userdata);
        }
      }, [userdata]);

    const handleClose = () => {
       
        setOpen(false);
    };
    return (
        <Box m={1}>
            <DrawIcon sx={{ color: 'green' }} onClick={()=>handleClickOpen()} />
            <Dialog
                open={open}
                onClose={handleClose}

            >
                <Box component="form" onSubmit={handleSubmit} sx={{ m: 5 }}>
                    <Typography>Update User</Typography>
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
                        type="submit"
                        variant="contained"
                        sx={{
                            background: 'red',
                            mt: 2,
                            '&:hover': {
                                backgroundColor: '#d10505',
                            },
                        }}
                        fullWidth
                    >
                        Update
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )
}
