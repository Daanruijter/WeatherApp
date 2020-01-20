// let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"

let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"


//     fetch(url, {
//             method: 'GET',
//             withCredentials: true,
//             // headers: {

//             //     "X-API-KEY": 'fb2a017905db23f312a17b320e8c07d0',
//             //     'Content-Type': 'application/json'
//             // }
//         })

//         .then(response => response.json())
//         .then(data => {
//             console.log(data)


//         })
//         .catch(error => console.log(error))

// fetch()



console.log("wat een lekker weer")

var demo = new Vue({
    el: '#app',
    data: {

    },

    created() {

        this.fetchData(url)

    },

    methods: {
        consoleLogger() {
            console.log("wat een lekker weer")
        },


        

        //Fetch the data from the Propublica website//
           async fetchData(url) {

            this.bookData = await fetch(url, {
                    method: 'GET',

                })
                .then(response => response.json()

                )

                .then(data => {
                    console.log(data)
                    return data
                })
                .catch(error => console.log(error))
            // this.bookDataFiltered = this.bookData

        }
    },

    


    

});

//https://www.chartjs.org/docs/latest/configuration/animations.html//
// https://home.openweathermap.org/api_keys