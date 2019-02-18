import React from 'react';

function Home(props){
    return(
        <div>
            <h1>This is the Home page!</h1>
            <h4>My favorite superhero is {props.superHero}!</h4>
        </div>
    );
}

export default Home;