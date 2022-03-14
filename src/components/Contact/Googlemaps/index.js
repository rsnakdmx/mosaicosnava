import React from 'react';

const Googlemaps = () =>
{
    return(
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1274.4246820474332!2d-99.00461275617383!3d19.36017778424123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2b100b1df59%3A0x78edede35f510b6d!2sMosaicos%20Y%20Lozetas%20Nava!5e0!3m2!1ses-419!2smx!4v1647215681182!5m2!1ses-419!2smx" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="mosaicosnava"
        ></iframe>
    );
}

export default Googlemaps;