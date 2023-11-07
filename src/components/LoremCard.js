import React from 'react';
import { fetchData } from '../Redux/Action/actionType';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
const LoremCard = () => {
 
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(fetchData());
    },[]);
    
    const {title,fetching,error} = useSelector(state => state);
   
    console.log(title);
    return (
        <div className='LoremCard'>
            {
            fetching ? <h1>Loading...</h1> :<div className='card'>
                            {
                                
                             error   ?  <p>{error}</p> :  <p><b>Title</b>{title}</p>
                            } 
            </div>        

            }
        </div>
    );
}

export default LoremCard;
