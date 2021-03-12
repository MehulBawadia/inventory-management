import React from 'react';
import { Link } from 'react-router-dom';

const AppContainer = ({ pageTitle, pageLink, pageLinkText, children }) => {
    return (
        <div className="container mx-auto">
            <div className="flex py-3">
                <h1 className="text-3xl font-bold text-blue-500">{pageTitle}</h1>

                <Link to={pageLink} className="ml-3 px-3 py-1 rounded bg-indigo-300 text-indigo-900 hover:bg-indigo-500">{pageLinkText}</Link>
            </div>

            {children}
        </div>
    );
};

export default AppContainer;
