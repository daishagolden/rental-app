var screen1 = 'div class="container"><div class="row"><div class="top-bar col-sm-10"><ul><li><a href="business-rentals.html">Business Rentals</a></li><li><a href="select-cars.html">Car Sales</a></li><li><a href="customer-care.html">Customer Care</a></li></ul></div><div class="signin-bar col-sm-2"><button><a href="signin.html">Sign In</a></button><button><a href="register.html">Register</a></button></div></div></div><div class="container"><div class="row"><div class="logo col-sm-12"><img src="img/logo.png"><h1><a href="exotic.html">EXOTIC</h1></a></div></div></div><div class="container"><div class="row"><div class="col-sm-6"><img src="https://via.placeholder.com/550x250.png"><h2>Vehicle Name:</h2></div><div class="col-sm-6"><p>Base Rate $</p><p>Mileage $</p><p>Offer Codes $</p><p>Fees and Taxes $</p><p>Estimated Total $</p></div></div><hr><h2>Protection & Coverages</h2><div class="coverages row"><div class="col-sm-3"><p>Cover The Car </p></div><div class="col-sm-1"><label class="container"><input type="checkbox" checked="checked"><span class="checkmark"></span><p>$1,200.99</p></label></div><div class="col-sm-3"><p>Cover Myself </p></div><div class="col-sm-1"><label class="container"><input type="checkbox" checked="checked"><span class="checkmark"></span><p>$456.99</p></label></div><div class="col-sm-3"><p>Cover My Liability</p></div><label class="container"><input type="checkbox" checked="checked"><span class="checkmark"></span><p>$622.99</p></label></div></div></div><div class="creditCardForm"><div class="heading"><h1>Confirm Purchase</h1></div><div class="payment"><form><div class="form-group owner"><label for="owner">Card Name</label><input type="text" class="form-control" id="owner"></div><div class="form-group CVV"><label for="cvv">CVV</label><input type="text" class="form-control" id="cvv"></div><div class="form-group" id="card-number-field"><label for="cardNumber">Card Number</label><input type="text" class="form-control" id="cardNumber"></div><div class="form-group" id="expiration-date"><label>Expiration Date</label><select><option value="01">January</option><option value="02">February </option><option value="03">March</option><option value="04">April</option><option value="05">May</option><option value="06">June</option><option value="07">July</option><option value="08">August</option><option value="09">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select><select><option value="16"> 2016</option><option value="17"> 2017</option><option value="18"> 2018</option><option value="19"> 2019</option><option value="20"> 2020</option><option value="21"> 2021</option></select></div><div class="card-logos row"><img class="img-responsive" src="img/card-logos.gif"></div><div class="form-group" id="pay-now"><button type="submit" class="btn btn-default" id="confirm-purchase">Confirm</button><button type="submit" class="btn btn-default" id="cancel-purchase">Cancel</button></div></form></div></div></div><div class="informational-bar"><div class="info-bar container"><div class="info-headers row"><div class=" col-sm-2"><h2>Popular Searches</h2><ul><li><a href="">Moving Truck Rental</a></li><li><a href="">Long Term Car Rental</a></li><li><a href="">Free Upgrade Deal</a></li><li><a href="">Rental Car FAQ</a></li></ul></div><div class="col-sm-2"><h2>Popular Rental Cars</h2><ul><li><a href="">Luxury Car Rental</a></li><li><a href="">Bugatti Car Rental</a></li><li><a href="">Lamborghini Rental</a></li><li><a href="">Porshe Rental</a></li></ul></div><div class="col-sm-2"><h2>Popular US Destinations</h2><ul><li><a href="">Car Rental Madison</a></li><li><a href="">Car Rental Flowood</a></li><li><a href="">Car Rental Ridgeland</a></li><li><a href="">Rental Car FAQ</a></li></ul></div><div class="col-sm-2"><h2>Budget Partners</h2><ul><li><a href="">Affiliates</a></li><li><a href="">Travel Agents</a></li><li><a href="">AARP Members</a></li><li><a href="">Military and Veterans</a></li></ul></div><div class="col-sm-2"><h2>Budget Support</h2><ul><li><a href="">Contact Us</a></li><li><a href="">Best Rate Guarantee</a></li><li><a href="">Roadside Assistance</a></li><li><a href="">Site Map</a></li></ul></div><div class="col-sm-2"><h2>Company Info</h2><ul><li><a href="">About Exotic</a></li><li><a href="">Copyright Notices</a></li><li><a href="">Terms of Use</a></li><li><a href="">Privacy Notice</a></li></ul></div></div></div><div class="container"><div class="row"><div class="country-language col-sm-6"><select><option value="United Sates of America (USA)">United States</option><option value="Canada">Canada</option><option value="United Kingdom (UK)">United Kingdom (UK)</option></select><select><option value="English">English</option><option value="Francais">Francais</option><option value="Espanol">Espanol</option></select></div><div class="social-media col-sm-6"><ul><li><a href=""><i class="fab fa-twitter-square fa-2x"></i></a></li><li><a href=""><i class="fab fa-facebook-square fa-2x"></i></a></li><li><a href=""><i class="fab fa-linkedin fa-2x"></i></a></li><li><a href=""><i class="fab fa-instagram fa-2x"></i></a></li></ul></div></div></div><div class="container"><div class="row"><div class="copyright col-sm-12"><p>&copy 2019 Exotic Rental Car Company Inc.</p></div></div></div></div>';

function screen2(){
    document.getElementById('maserati-body').innerHTML = screen1;
}

function screen1(){
    document.getElementById("").innerHTML = change;

    event.preventDefault();
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        document.getElementById("").innerHTML = data[].
    });
}
