//?search=diego

export function extractQueryParams(query) {
    return query.substr(1).split('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=') // [search, diego]
        queryParams[key] = value
        return queryParams
    }, {})
}