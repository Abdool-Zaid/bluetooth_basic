
let btn = document.querySelector("#btn")
btn.addEventListener('click', () => {
  navigator.bluetooth.requestDevice({
      acceptAllDevices: true
    })
    .then(device => {
      // Connect to the selected device
      return device.gatt.connect();
    })
    .then(server => {
      // Get the list of services
      return server.getPrimaryServices();
    })
    .then(services => {
      // Display the UUIDs of each service
      services.forEach(service => {
        console.log('Service UUID:', service.uuid);
      });
    })
    .catch(error => {
      console.error(error);
    });
});

// paired devices

let pairedBTN= document.querySelector('#paired')
pairedBTN.addEventListener('click',()=>{
navigator.bluetooth.getAvailability()
.then(res=>{
    console.log(res)
})

})




