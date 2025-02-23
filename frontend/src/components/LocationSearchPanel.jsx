import React from 'react'

const LocationSearchPanel = (props) => {

  // sample array for locations
  const locations=[
    "25A Sai Dham Colony Sector-11 Indira Nagar Lucknow",
    "14/659 Vikas-Khand Gomti Nagar Lucknow",
    "2/143  Sector-25 Shakti Nagar Lucknow",
    "89 M Rohtaz Residency Virat Khand Gomti Nagar Lucknow"
  ]
  return (
    <div>
      {
      locations.map(function(element,idx){
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex border-2 border-gray-100 active:border-black px-3 rounded-xl gap-4 items-center my-2 justify-start'>
            {/* this is just a sample data */}
            <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'>{element}</h4>
          </div>
        
      })
    }
    </div>
  )
}

export default LocationSearchPanel
