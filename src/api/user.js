import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/trojan_platform/user/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/trojan_platform/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/trojan_platform/user/logout',
        method: 'post'
    })
}