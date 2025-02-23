import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 w-[93%] absolute top-0 text-center' onClick={() => {props.setConfirmRidePanel(true); props.setVehicleFound(false)}}><i className='text-3xl text-gray-600 ri-arrow-down-wide-line'></i></h5>
      <h3 className='font-semibold mb-5 text-2xl'>Looking For a Driver</h3>
      <div className='flex justify-between items-center flex-col'>
      <img className='h-30' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714469695/assets/db/413026-fd04-4bd1-a85c-f5d9c26da3a9/original/UberComfort-Premium.png" alt="" />
      <div className='w-full mt-5'>
      <div className='flex gap-5 items-center p-3 border-b-2 border-gray-200'>
        <i className='text-lg ri-map-pin-user-fill'></i>
        <div >
            <h3 className='font-medium text-lg'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
        </div>
      </div>
      <div className='flex gap-5 items-center p-3 border-b-2 border-gray-200'>
        <i className='text-lg ri-map-pin-2-fill'></i>
        <div >
            <h3 className='font-medium text-lg'>562/11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
        </div>
      </div>
      <div className='flex gap-5 items-center p-3 border-b-2 border-gray-200'>
        <i className='ri-currency-line'></i>
        <div >
            <h3 className='font-medium text-lg'>10.5$</h3>
            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default LookingForDriver
