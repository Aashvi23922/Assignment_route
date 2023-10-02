import React, { useEffect, useState } from 'react'
import Navigation from '../Header/Navigation'
import Footer_com from '../Footer_com/Footer_com'
import beauty_data from '../Utilities/beauty_data.json'
import Rings_data_card from '../Categories_card_structure/Rings_data_card';
import "./Rings.css"
import { userAuth } from '../../Auth/Auth';

function Rings() {

    const{searchData}=userAuth();
    let [ring, setRing] = useState([]);


    useEffect(() => {
        setRing(beauty_data?.filter((e) => e?.Categories === "rings"));

        let filterData= beauty_data?.filter((e)=>{
            return e?.name?.toLowerCase?.()?.includes?.(searchData?.toLowerCase?.())
        })
        setRing(filterData?.filter?.((e) => e?.Categories === "rings"))
    }, [searchData]);
    
    return (
        <>
            {/* <Navigation setSearchData={setSearchData}/> */}
            <div className='ring_main'> 
                {
                    ring.map((e) => {
                        return <Rings_data_card data={e} />
                    })
                }
            </div>
            {/* <Footer_com /> */}
        </>
    )
}

export default Rings