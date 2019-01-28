// Higher Order Component 


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
           { props.isAdmin && <p>This is private info, pls dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthontication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAdmin ? 
            <WrappedComponent {...props} />
        : (
            (<p> Please log in to view the details</p>)
        )}
        
        </div>
        );
};

// const AdminInfo = withAdminWarning(Info);
// withAdminWarning(Info);

const AdminInfo = requireAuthontication(Info);
requireAuthontication(Info);


ReactDOM.render(<AdminInfo isAdmin={false} info="this are the details"/>, document.getElementById('app'));