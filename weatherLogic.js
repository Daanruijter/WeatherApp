let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"

// let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"

// let url = "https://api.openweathermap.org/data/2.5/forecast?q=Valencia,esp&APPID=fb2a017905db23f312a17b320e8c07d0"




var demo = new Vue({
    el: '#app',
    data: {  api_key: "fb2a017905db23f312a17b320e8c07d0",
    query:''

    },

    created() {

        this.fetchData(url)

    },

    methods: {
        consoleLogger() {
            console.log("wat een lekker weer")
        },
        fetchWatcher(){
            console.log("tsss")
            console.log(this.query)
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
// https://askubuntu.com/questions/833322/pair-bose-quietcomfort-35-with-ubuntu-over-bluetooth