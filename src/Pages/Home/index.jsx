
import React, { useEffect } from 'react';

function Home(){

    useEffect(() => {
        document.title = "BookTuary |  Home"; // Altera o título da aba
      }, []);

    return(
    <>
    <div>
        <h1>Home</h1>
    </div>
    </>
    )
}

export default Home