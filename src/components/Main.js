import React from 'react'
import store from "../images/store.jpg"
const Main = () => {
  return (
    <div className='d-flex-column d-lg-flex ps-3 my-5 container'>
      <div className='me-4'>
        <h2>NIT-STORE</h2>
        <h3 style={{color:"#9171f8"}}>You Can Feel Good Shopping Interaction</h3>
        <p className='mt-4'>
            NIT Store is an online platform that will help the students of a college to buy and sell their belongings conveniently. It will be secure and one stop market place for all the students of a college. <br />
            This Website is to make the process of selling the things by the passout batch(mainly) to their juniors. It will be medium that eliminates the difficulty in selling or buying items in a college.
        </p>
      </div>
      <img src={store} alt="Image" className="d-none d-sm-block my-lg-0 mt-4"style={{height: '300px', width:"auto"}}/>
    </div>
  )
}

export default Main
