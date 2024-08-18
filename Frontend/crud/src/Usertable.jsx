import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress, Container } from '@mui/material';
import Adduser from './Adduser';
import './App.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Edituser from './Edituser';
import axios from 'axios';
import { GetUser } from '../../../Backend/controller/UserController';




function createData(
    name,
    calories,
    fat,
    carbs,
    protein
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Usertable() {
    const [user, setuser] = React.useState([])
    const [userdata, setuserdata] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const getusers = () => {
        axios.get('https://mern-stack-crud-tt6b.onrender.com/api/GetUser')
            .then((res) => {
                console.log(res.data.user)
                setuser(res.data.user)
                setLoading(false);
            })
    }

    React.useEffect(() => {
        getusers()
    }, [])

    const GetId = (id) => {

        axios.delete(`https://mern-stack-crud-tt6b.onrender.com/api/DeleteUser/${id}`)
            .then((res) => {
                console.log(res);
                setuser(user.filter(user => user._id !== id))
            }).catch((error) => {
                console.log(error)
            })
    }

    const getuserId = (data) => {
        let getdata = user
        // console.log(data)


        setuserdata(data)
        console.log(data)

    }
    const handleUpdateUser = (updatedUser) => {
        setuser(user.map(u => (u._id === updatedUser._id ? updatedUser : u)));
      };


    if (loading) {
        return (
            <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
                <CircularProgress />
            </Container>
        );
    }


    return (
        <Container sx={{ marginTop: '30px' }}>
            <Adduser user={user} setuser={setuser} />
            <TableContainer className='Table' component={Paper} sx={{ width: '100%', boxShadow: '0px 2px 6px 5px #9f9a9a', marginTop: '20px' }}>
                <Table sx={{ minWidth: 650, }} aria-label="simple table">
                    <TableHead sx={{ background: '#d3d1cd7d' }}>
                        <TableRow sx={{ border: '1px solid black' }}>
                            <TableCell  >Naame</TableCell>
                            <TableCell align="right">Father Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ border: '1px solid black' }}>
                        {user.map((data) => (
                            <TableRow
                                key={data.name}
                                sx={{ border: '1px solid black' }}
                            >
                                <TableCell component="th" scope="row">
                                    {data.name}
                                </TableCell>
                                <TableCell align="right">{data.fathername}</TableCell>
                                <TableCell align="right">{data.email}</TableCell>
                                <TableCell align="right">{data.Phone}</TableCell>
                                <TableCell align="right" >
                                    <Box sx={{ display: 'flex', float: 'right' }}>
                                        <Edituser
                                            userdata={userdata}
                                            user={user}
                                            onUpdateUser={handleUpdateUser}
                                            setuser={setuser}
                                            getid={() => getuserId(data)} />
                                        <HighlightOffIcon onClick={() => GetId(data._id)} sx={{ color: 'red', mt: 1 }} />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

