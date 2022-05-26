/**
 * author: ღ
 * date: 2022/5/26
 */
import { useLocation, useNavigate, useParams, useHref, useMatch, useRoutes, useInRouterContext } from 'react-router-dom'
import React from 'react'

export default function withRouter(Child) {
    return (props) => {
        const location = useLocation()
        const navigate = useNavigate()
        return <Child {...props}
                      navigate={ navigate }
                      location={ location }
                      params={ useParams }
                      href={ useHref }
                      match={ useMatch }
                      routes={ useRoutes }
                      RouterContext={ useInRouterContext }
        />
    }
}
