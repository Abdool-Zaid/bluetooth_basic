console.log('working')
// Request permission to use the Web Bluetooth API

let btn= document.querySelector("#btn")
btn.addEventListener('click',()=>{

    
    
    navigator.bluetooth.requestDevice({ acceptAllDevices:true
        // filters: [{ services: ['battery_service'] }]
    })
  .then(device => {
        // Connect to the selected device
        return device.gatt.connect();
      })
      .then(server => {
            // Get the Battery Service from the connected device
            return server.getPrimaryService('battery_service');
  })
  .then(service => {
        // Get the Battery Level characteristic from the Battery Service
        return service.getCharacteristic('battery_level');
      })
      .then(characteristic => {
            // Read the Battery Level value from the characteristic
            return characteristic.readValue();
          })
  .then(value => {
    // Convert the value to a percentage
    const batteryLevel = value.getUint8(0);
    console.log(`Battery level is ${batteryLevel}%`);
  })
  .catch(error => {
        console.error(error);
  });
  
})

// paired devices

let pairedBTN= document.querySelector('#paired')
pairedBTN.addEventListener('click',()=>{
navigator.bluetooth.getAvailability()
.then(res=>{
    console.log(res)
})

})




