
import { useEffect, useState } from "react"
import qs from "querystring"
import { usePathname, useRouter } from "next/navigation"

type URLQueryParams = Record<string, string>

export default function useQueryState(defaultQuery: URLQueryParams) {

    const router = useRouter()

    const [queryState, setQueryState] = useState(defaultQuery)

    const queryToString = (q: URLQueryParams) => {
        const query = { ...q }

        // Remove defaults
        for (const key in query) {
            if (query[key] === defaultQuery[key]) {
                delete query[key]
            }
        }
        return "?" + qs.stringify(query)
    }

    const pathWithQuery = usePathname() + queryToString(queryState)

    useEffect(() => {
        router.push(pathWithQuery)
    }, [pathWithQuery])

    // Set initial state from query string
    useEffect(() => {
        setQueryState({
            ...defaultQuery,
            ...(qs.parse(window.location.search.slice(1)) as URLQueryParams)
        })
    }, [])

    return [queryState, setQueryState]
}
