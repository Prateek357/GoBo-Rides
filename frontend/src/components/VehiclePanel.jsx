import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 w-[93%] absolute top-0 text-center' onClick={() => props.setVehiclePanel(false)}><i className='text-3xl text-gray-600 ri-arrow-down-wide-line'></i></h5>
      <h3 className='font-semibold mb-5 text-2xl'>Choose a Vehicle</h3>
      <div onClick={()=>props.setConfirmRidePanel(true)} className='flex items-center mb-2 active:border-2 w-full p-3  rounded-xl justify-between'>
        <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='w-1/2 -ml-3'>
          <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span> </h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>5.1$</h2>
      </div>
      <div onClick={()=>props.setConfirmRidePanel(true)} className='flex items-center active:border-2 mb-2 w-full p-3  rounded-xl justify-between'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>UberMoto <span><i className='ri-user-3-fill'></i>1</span> </h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-normal text-gray-600 text-xs'>Affordable, motorcycle rides</p>
        </div>
        <h2 className='text-lg font-semibold'>3.1$</h2>
      </div>
      <div onClick={()=>props.setConfirmRidePanel(true)} className='flex items-center active:border-2  mb-2 w-full p-3  rounded-xl justify-between'>
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>UberAuto <span><i className='ri-user-3-fill'></i>3</span> </h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-normal text-gray-600 text-xs'>Affordable, auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>3.9$</h2>
      </div>
    </div>
  )
}

export default VehiclePanel
