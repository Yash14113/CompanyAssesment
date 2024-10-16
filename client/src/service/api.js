import axios from 'axios';

const url= 'http://localhost:8000';

export const authenticateSignup=async(data)=>{
    try{
        return await axios.post(`${url}/signup`,data)
    }catch(error){
        console.log('error while signing in',error)
    }
}


export const registration=async(data)=>{

    try{
        return await axios.post(`${url}/registration`,data)
    }
    catch(error){
        console.log('Error while registrering user',error)
    }
}

// Function to get all users
export const getUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`);
        return response.data; // Adjust based on your API response structure
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Function to update a user
export const updateUser = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${url}/users/${userId}`, updatedData);
        return response.data; // Adjust based on your API response structure
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Function to delete a user
export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${url}/users/${userId}`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
