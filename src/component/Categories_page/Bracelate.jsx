import React, { useEffect, useState } from 'react'
import Navigation from '../Header/Navigation'
import Footer_com from '../Footer_com/Footer_com'
import beauty_data from '../Utilities/beauty_data.json'
import Rings_data_card from '../Categories_card_structure/Rings_data_card';

function Bracelate() {
    let [brace, setBrace] = useState([]);
    
    useEffect(() => {
        setBrace(beauty_data?.filter((e) => e?.Categories === "Bracelate"));
    });
    
    return (
        <>
            {/* <Navigation /> */}
            <div className='ring_main'>
                {
                    brace.map((e) => {
                        return <Rings_data_card data={e} />
                    })
                }
            </div>
            {/* <Footer_com /> */}
        </>
    )
}

export default Bracelate