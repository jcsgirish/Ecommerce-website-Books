
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import Footer from "../../Components/Layouts/Footer/Footer";
import { useLocation } from "react-router-dom";
import { BookData } from "../BookData/BookData";
import SearchInputCard from "../SearchInputCard/SearchInputcard";

const Searchpage=()=>{

    const location = useLocation()
    const [searchResult,SetSearchResult]= useState([])

    useEffect(()=>{
        let searchvalue =[]


        searchvalue=BookData.filter((data)=>data.book_name.toLowerCase().includes(location.state.toLowerCase()))
        SetSearchResult(searchvalue)

    },[location.state])

    return(
        <section>
        <Navbar darkTheme={true}></Navbar>
        <div className="Search-container">

           

            {searchResult.map((result)=>
             <SearchInputCard key={result.id} BookData={result}></SearchInputCard>
        
        )}

        </div>
        <Footer></Footer>

        </section>


    )
}

export default Searchpage