  navigator.bluetooth.requestLEScan({
    acceptAllAdvertisements : true
      // filters: [{
      //   services: ['bleService']
      // }]
    })
    .then(scanner => {
      // Handle each discovered device
      scanner.onreading = event => {
        const device = event.device;
        console.log(device.name);
      };
  
      // Handle any errors
      scanner.onerror = error => {
        console.error(error);
      };
  
      // Stop the scan after 10 seconds
      setTimeout(() => {
        scanner.stop();
      }, 10000);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });