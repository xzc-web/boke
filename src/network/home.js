import { request } from "./request";

export function getHomeMultidata() {
    return request({
        url: '/search?keywords=exo',

        // url: '/test/getBanners'
    })
}
export function getHomeGoods(id) {
    return request({
        url: '/song/url',
        params: {
            id
        }
    })
}