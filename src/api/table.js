import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/trojan_platform/table/list',
        method: 'get',
        params
    })
}