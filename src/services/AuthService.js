import http from './BaseService';

class AuthService {
    async getAll(){
        try {
            const response = await http.get('users')    
            return response.data     
        } catch (error) {
            alert(error)
        }
        
    }

    async getById(userId){
        const response = await http.get(`users/${userId}`)
        return response.data;
    }

    async login(newUser){
        try {
            const response = await http.post('user', newUser);
            return response.data;
           
        } catch (error) {
            console.log(error)
        }
        
    }
}
const authService = new AuthService();
export default authService;

