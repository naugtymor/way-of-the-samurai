import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a5ec2a6b-4d14-4857-9e4a-ebc7dbcaef21",
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance
            .delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Use profileAPI method.')
        return profileAPI.getProfile(userId)
    },
}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
    }
}