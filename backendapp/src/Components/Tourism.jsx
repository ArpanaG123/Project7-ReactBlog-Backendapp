import './Style.css'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tourism = () => {
    const[api, setApi] = useState([])
    const fetchData = async () => {
        const response = await axios.get("https://project7-react-blog-backendapp-ptxzypcef-arpanag123.vercel.app/api/home");
        console.log(response);
        setApi(response.data);
      };
      useEffect(() => {
        fetchData();
      },[]);
    return (
        <div>
            <hr className="line"></hr>
            <h1 className="tourhead">Tourism </h1>
            <div className='wood'>
            <div className='bolly-left'>
                <div className='bollyone'>
                    {
                        api.filter((data) => data.Category === "Tourism").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Tourism/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl3' />
                                    </Link>
                                    <div><h3 className='title1'>{data.Title}</h3></div>
                                    <div><p className='para1'>{data.Description}</p></div>
                                    <div><p className='cat1'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bolly-right'><h2 className='bHi'>Top Posts</h2><hr className='line2'></hr>
                <div className='bollytwo'>
                    {
                        api.filter((data) => data.Category === "Tourism").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Tourism/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl2' />
                                    </Link>
                                    <div><h3 className='title2'>{data.Title}</h3></div>
                                    <div><p className='para2'>{data.Description}</p></div>
                                    <div><p className='cat2'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='add1'>Advertisment</div>
            </div>
            </div>
            
            
        </div>
    )

}

export default Tourism;