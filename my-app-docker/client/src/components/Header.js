import React, { Component } from "react";
import { TypeAnimation } from 'react-type-animation';
 

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h2 style={{ fontSize: '2em' }}>
                    Sandhi Ganjoo
                </h2>
                <TypeAnimation
                    sequence={[
                        'Junior Developer Intern',
                        2000,
                        'Engineering Student',
                        2000, // Waits 2s
                        'Loves Cooking',
                        2000,
                        'Loves Theatre',
                        2000,
                        'Loves Music',
                        2000,
                        'Loves Dogs',
                        2000,
                        'Loves Cats too',
                        2000,
                        () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1.25em' }}
                />
            </header>
        );
    }   
}
  
  export default Header;  