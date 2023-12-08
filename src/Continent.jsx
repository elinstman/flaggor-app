import { useEffect, useState } from "react"; 
import Countries from "./Countries";

function Continent () {
    const [data, setData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("europe");
    const [showCountry, setShowCountry] = useState(false);

    const choosenRegion = (event) => {
        setSelectedRegion(event.target.value);
    }


    const fetchData = async (selectedRegion, setData) => {
        let response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
        let json = await response.json();
        setData(json);
        console.log(json);
    };

    useEffect(() => {
        setShowCountry(false);
      }, [selectedRegion]);


    return (
        <div>
        <select value={selectedRegion} onChange={choosenRegion} id="chooseRegion">
            <option value="europe">Europa</option>
            <option value="africa">Afrika</option>
            <option value="asia">Asien</option>
      </select>
      <button onClick={() => fetchData(selectedRegion, setData)}
      >Visa Flaggor</button>
      {data.map((countries, index) => {
        return <div key={index}> 
        <img src={countries.flags.png}
        onClick={() => {
            setShowCountry(prevState => ({
                ...prevState,
                [index]: !prevState[index]
            }));
        }
    }> 
        </img>
        {showCountry[index] && <Countries data={countries} />} 
        </div>
      })}

        </div>
    )
};

export default Continent;



// useEffect(() => {
//     let fetchData = async() => {
//         let response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
//         let json = await response.json();
//         setData(json);
//         console.log(json);
//     };
//     fetchData(selectedRegion);
// }, []);