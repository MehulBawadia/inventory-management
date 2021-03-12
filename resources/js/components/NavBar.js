import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="bg-white border-b shadow py-3">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <Link className="font-bold" to='/'>InvMgmt</Link>
                </div>
                <div>
                    <Link className="text-gray-500" to='/'>Products</Link>
                </div>
            </div>
        </div>
    </nav>
)

export default Header;
