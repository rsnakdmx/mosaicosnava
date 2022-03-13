import React from 'react';

const Googlemaps = () =>
{
    return(
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30102.871044016112!2d-99.0445568!3d19.418502399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e33110af2427%3A0x14ed2eb418c8e4fb!2sLlantera%207%20Leguas%20Neza!5e0!3m2!1ses-419!2smx!4v1644262654791!5m2!1ses-419!2smx" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
        ></iframe>
    );
}

export default Googlemaps;