import React from 'react';
import Header from './header';

const Layaout = ({children}) => {
    return ( 
        <div>
            <Header />
            {children}
        </div>
     );
}
 
export default Layaout;