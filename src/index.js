
$(function(){



  $('button').on('click',function(){

    $.ajax({
      url: "https://randomuser.me/api/",
      method: "GET",
      success: function(response){
        let data = response.results[0]
        let name = data.name.title + " " + data.name.first + " " + data.name.last
        debugger
        $('h3#fullname')[0].innerHTML = name
        $('img#profile_picture')[0].src = data.picture.thumbnail
        $('h4#email')[0].innerHTML = data.email
        $('h4#street')[0].innerHTML = data.location.street
        $('h4#city')[0].innerHTML = data.location.city
        $('h4#state')[0].innerHTML = data.location.state
        $('h4#postcode')[0].innerHTML = data.location.postcode
        $('h4#phone')[0].innerHTML = data.phone
        $('h4#cell')[0].innerHTML = data.cell
        $('h4#date_of_birth')[0].innerHTML = data.dob

      }
    })


  })


})
