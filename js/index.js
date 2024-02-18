getVehiclesSelection();
    async function getVehiclesSelection() {
      try {
        const response = await fetch("http://localhost:8000/api/vehicles", {
          method: 'GET',
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch vehicles for selection. Status:", response.status);
          return;
        }

        const json = await response.json();

            updateSelectElement('#brand.select-brand', json, 'brand');
            updateSelectElement('#model.select-model', json, 'model');
            updateSelectElement('#body_style.select-body-style', json, 'body_style');
            updateSelectElement('#transmission.select-transmission', json, 'transmission');
            updateSelectElement('#engine.select-engine', json, 'engine');

        const carsContainer = json.map(element => {
          return createCarCard(element);
        }).join('');

        document.getElementById("cars_container").innerHTML = carsContainer;
      } catch (error) {
        console.error("An error occurred while fetching vehicles for selection", error);
      }
    }

    function updateSelectElement(selector, data, key) {
        const container = `<option value="">Select ${key.charAt(0).toUpperCase() + key.slice(1)}</option>` +
          data.map(element => `<option id="${element.id}" value="${element.id}">${element[key]}</option>`).join('');

        const selectElement = document.querySelector(selector);
        if (selectElement) {
          selectElement.innerHTML = container;
        } else {
          console.error(`Select element with selector ${selector} not found`);
        }
      }

function createCarCard(element) {
  return `<div class="col-md-4 mt-5">
    <div class="card card-box-a card-shadow">
      <div class="img-box-a">
        <img src="assets/img/rav4.jpg" alt="" class="img-a" width="500" height="200"/>
      </div>
      <div class="card-overlay">
        <div class="card-overlay-a-content">
          <div class="card-header-a">
            <h2 class="card-title-a">
              <a href="#"> <span class="fs-6">${element.body_style}</span> <br />${element.models_name}</a>
            </h2>
          </div>
          <div class="card-body-a">
            <div class="price-box d-flex">
              <span class="price-a">price | $${car_price[element.vehicle_id]}</span>
            </div>
            <a href="SUV1.html" class="link-a">
              Click here to view
              <span class="bi bi-chevron-right"></span>
            </a>
          </div>
          <div class="card-footer-a">
            <ul class="card-info d-flex justify-content-around">
              <li>
                <h4 class="card-info-title">Vehicle</h4>
                <span>${element.body_style}</span>
              </li>
              <li>
                <h4 class="card-info-title">Brand</h4>
                <span>${element.name}</span>
              </li>
              <li>
                <h4 class="card-info-title">Model</h4>
                <span>${element.models_name}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}


  // Function to get and update data
  function getVehicleData() {
    // Get the element by its ID
    var dataContainer = document.getElementById("dataContainer");

    // Replace the content with new data (you can modify this part)
    var newData = "New Data: " + new Date().toLocaleTimeString();
    dataContainer.textContent = newData;
  }
  // Get All Vehicles


  // Rest of the code remains the same...
  // Function to reset filters
  function resetFilters() {
      // Reset all select elements to their default values
      document.querySelectorAll('.filter-options-section select').forEach(select => {
        select.value = '';
      });
    
      // Trigger the form submission to fetch all vehicles without filters
      document.querySelector('.form-inline').dispatchEvent(new Event('submit'));
    }