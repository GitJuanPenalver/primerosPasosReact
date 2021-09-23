import React from 'react';

const Location = ({city}) => {

    // Props es un nombre utilizado generalmente -> const Location = (props) => ();

    // console.log(props);
    // debugger;

    // Destructuring para acortar la linea -> const city = props.city; = const {city} = props;

    // También siver para tomar varias propiedades -> const {city, city2} = props;

    return(

    <div>
        <h1>{city}</h1>
    </div>

    )
}

export default Location;
