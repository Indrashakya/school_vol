import React from "react";
import { useState, useEffect } from "react"

const Home = () => {
    const [opp, setOpp] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = opp.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(opp)
        }
        console.log(searchValue)
    }

    useEffect(() => {
        setOpp([
          {
            id:'1',
            name: 'Princeton University',
            location: 'Princeton, NJ',
            point:"50",
            description:"Princeton University is a private institution that was founded in 1746. It has a total undergraduate enrollment of 4,773 (fall 2020), its setting is suburban, and the campus size is 600 acres. It utilizes a semester-based academic calendar. Princeton University's ranking in the 2022 edition of Best Colleges is National Universities, #1. Its tuition and fees are $56,010."
          },
          {
            id:'2',
            name: 'Harvard University',
            location: 'Cambridge, MA',
            point:"60",
            description:"Harvard University is a private institution that was founded in 1636. It has a total undergraduate enrollment of 5,222 (fall 2020), its setting is urban, and the campus size is 5,076 acres. It utilizes a semester-based academic calendar. Harvard University's ranking in the 2022 edition of Best Colleges is National Universities, #2. Its tuition and fees are $55,587."
          },
          {
            id:'3',
            name: 'Massachusetts Institute of Technology',
            location: 'CAMBRIDGE, MA',
            point:"70",
            description:"Massachusetts Institute of Technology is a private institution that was founded in 1861. It has a total undergraduate enrollment of 4,361 (fall 2020), its setting is urban, and the campus size is 168 acres. It utilizes a 4-1-4-based academic calendar. Massachusetts Institute of Technology's ranking in the 2022 edition of Best Colleges is National Universities, #2. Its tuition and fees are $55,878."
          },
          {
            id:'4',
            name: 'Yale University',
            location: 'New Haven, CT',
            point:"40",
            description:"Yale University is a private institution that was founded in 1701. It has a total undergraduate enrollment of 4,703 (fall 2020), its setting is city, and the campus size is 373 acres. It utilizes a semester-based academic calendar. Yale University's ranking in the 2022 edition of Best Colleges is National Universities, #5. Its tuition and fees are $59,950."
          },
          {
            id:'5',
            name: 'Stanford University',
            location: 'New Haven, CT',
            point:"100",
            description:"Stanford University is a private institution that was founded in 1885. It has a total undergraduate enrollment of 6,366 (fall 2020), its setting is suburban, and the campus size is 8,180 acres. It utilizes a quarter-based academic calendar. Stanford University's ranking in the 2022 edition of Best Colleges is National Universities, #6. Its tuition and fees are $56,169."
          },
        ])
    }, [])

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setStatus("Sending...");
    //   const { opp } = e.target.elements;
    //   let details = {
    //         id: id.value,
    //         name: name.value,
    //         location: location.value,
    //         description: description.value
    //   };
    //   let response = await fetch("http://localhost:3000/opp", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(details),
    //   });
    //   setStatus("Search");
    //   let result = await response.json();
    //   alert(result.status);
    // };

    return (
        <div className='text-center'>
            <h1>Find oppertunity</h1>
            <div className="p-4">
            <span>Search:</span><input onChange={(e) => searchItems(e.target.value)}></input>
            </div>
            <div className="">
                {searchInput.length > 1 ? (
                filteredResults.map((opp,index) =>{
                    return (
                        <div className="border border-primary m-4 col-sm" key={opp.id}>
                        <h2>opportunity.id: {opp.id}</h2>
                        <h3>oppertunity's name: {opp.name}</h3>
                        <h3>Point: {opp.point}</h3>
                        <h4>location: {opp.location}</h4>
                        <span>description: {opp.description}</span>
                      </div>
                    )
                })): opp.map((opp,index) =>{
                    return (
                        <div className="border border-primary m-4 col-sm" key={opp.id}>
                        <h2>opportunity.id: {opp.id}</h2>
                        <h3>opportunity's name: {opp.name}</h3>
                        <h3>Point: {opp.point}</h3>
                        <h4>location: {opp.location}</h4>
                        <span>description: {opp.description}</span>
                      </div>
                    )
                })
                }       
            </div>
        </div>
    )
}

export default Home;