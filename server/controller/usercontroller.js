import { User } from "../model/usershema.js";
import { Register } from "../model/registerschema.js";

export const Usersignup = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username })
        if (exist) {
            return res.status(201).json({ message: 'User already exist' });
        }
        const user = req.body;
        const Newuser = new User(user);
        await Newuser.save()

        return res.status(200).json({ messgae: 'user created ' })

    }
    catch (error) {
        console.log('error while getting post call', error)
    }
}

export const Registration=async(req,res)=>{
    try{
        const user =req.body;
        const Newuser=new Register(user)
        await Newuser.save();

        return res.status(200).json({message:"Registered successfully"})
    }

    catch(error){
        console.log('error in register',error.message)
    }
}

export const GetUsers = async (req, res) => {
    try {
        const users = await Register.find(); 
        return res.status(200).json(users); 
    } catch (error) {
        console.log('Error fetching users:', error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const UpdateUser = async (req, res) => {
    const { id } = req.params; 
    const updatedData = req.body; 

    try {
        console.log('Updating user with ID:', id);
        const updatedUser = await Register.findByIdAndUpdate(id, updatedData, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params; 

        const deletedUser = await Register.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log('Error deleting user:', error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

