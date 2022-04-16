import axios from 'axios'

// maong /api/users ra ni kay nag add na tag proxy didto sa package.json sa frontend. 

// Note: LISOD JUD KAAYO I-TRACE HOW THESE BWISETS WORK TOGETHER PERO JUST TRACE IT :_) and rewatch mo na lang siguro ang tutorial. 
const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout
const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    login,
    register,
    logout
}

export default authService