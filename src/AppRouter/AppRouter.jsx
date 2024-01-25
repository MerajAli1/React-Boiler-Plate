import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element=""/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter