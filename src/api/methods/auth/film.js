import { makeRequest } from '@/api/makeRequest.js'
export const genre = async (id) => {
    const response = await makeRequest(
        `genre/${id}`,
        'GET',
    )
    return response.json()
}