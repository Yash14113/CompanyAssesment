import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUsers, updateUser, deleteUser } from '../service/api'; 

function Home() {
    const [users, setUsers] = useState([]); 
    const [open, setOpen] = useState(false); 
    const [currentUser, setCurrentUser] = useState(null); 
    const [editedUser, setEditedUser] = useState({}); 
    const navigate = useNavigate();

   
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await getUsers();
            setUsers(res);
        };
        fetchUsers();
    }, []);

    
    const handleEditClick = (user) => {
        setCurrentUser(user);
        setEditedUser({ ...user }); 
        setOpen(true); 
    };

    
    const handleDeleteClick = async (userId) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user._id !== userId)); 
    };

    
    const handleDialogClose = () => {
        setOpen(false);
    };

    
    const handleEditSubmit = async () => {
        await updateUser(editedUser._id, editedUser); 
        setUsers(users.map(user => (user._id === editedUser._id ? editedUser : user)));
        handleDialogClose(); 
    };

    return (
        <Box padding={2}>
            <Typography variant="h4" gutterBottom>Registered Users</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user._id}> 
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>{user.company}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleEditClick(user)}>Edit</Button>
                                    <Button onClick={() => handleDeleteClick(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedUser.name || ''}
                        onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} 
                    />
                    <TextField
                        margin="dense"
                        label="Age"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={editedUser.age || ''}
                        onChange={(e) => setEditedUser({ ...editedUser, age: e.target.value })} 
                    />
                    <TextField
                        margin="dense"
                        label="Current Company"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedUser.company || ''}
                        onChange={(e) => setEditedUser({ ...editedUser, company: e.target.value })} 
                    />
                    <TextField
                        margin="dense"
                        label="Role"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedUser.role || ''}
                        onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleEditSubmit}>Save</Button> 
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Home;
