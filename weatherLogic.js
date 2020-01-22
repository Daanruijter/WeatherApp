let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"

// let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"

// let url = "https://api.openweathermap.org/data/2.5/forecast?q=Valencia,esp&APPID=fb2a017905db23f312a17b320e8c07d0"




const app = new Vue({
    el: '#app',
    data: {
        api_key: "fb2a017905db23f312a17b320e8c07d0",
        query: '',
        url_base: "https://api.openweathermap.org/data/2.5/",
        weather: {},
        sunset: '',
        sunrise: '',
        windDirection: '',

        
        weatherForecast: {},
        sunsetForecast: '',
        sunriseForecast: '',
        windDirectionForecast: '',

    },

    // created() {

    //     this.fetchData(url)

    // },

    methods: {
        consoleLogger() {
            console.log("wat een lekker weer")
        },
        async fetchWatcher(e) {

            if (e.key == "Enter") {

                this.fetchData()
                this.fetchForecastData()


            }

        },
        // sunrise and sunset converter
        convertUnixTimeStapToTime(unix_timestamp) {



            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unix_timestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


            console.log(formattedTime);
            return formattedTime

        },
        convertWindDegreesToWindDirection(windDegrees) {
            console.log("hallo")
            
            let windDirection = ''
            console.log(windDirection)
            console.log(windDegrees)

            if (windDegrees >= 11.25 && windDegrees <= 33.75) {
                console.log("equation works")
                windDirection = "NNE"
            }
            if (windDegrees >= 33.75 && windDegrees <= 56.25) {
                console.log("equation works")
                windDirection = "NE"
            }
            if (windDegrees >= 56.25 && windDegrees <= 78.75) {
                console.log("equation works")
                windDirection = "ENE"
            }
            if (windDegrees >= 78.75 && windDegrees <= 101.25) {
                console.log("equation works")
                windDirection = "E"
            }  
            if (windDegrees >= 101.25 && windDegrees <= 123.75) {
                console.log("equation works")
                windDirection = "ESE"
            }
            if (windDegrees >= 123.75 && windDegrees <= 146.25) {
                console.log("equation works")
                windDirection = "SE"
            }
            if (windDegrees >= 146.25 && windDegrees <= 168.75) {
                console.log("equation works")
                windDirection = "SSE"
            }
            if (windDegrees >= 168.75 && windDegrees <= 191.25) {
                console.log("equation works")
                windDirection = "S"
            }
            if (windDegrees >= 191.25 && windDegrees <= 213.75) {
                console.log("equation works")
                windDirection = "SSW"
            }
            if (windDegrees >= 213.75 && windDegrees <= 236.25) {
                console.log("equation works")
                windDirection = "SW"
            }
            if (windDegrees >= 236.25 && windDegrees <= 258.75) {
                console.log("equation works")
                windDirection = "WSW"
            }
            if (windDegrees >= 258.75 && windDegrees <= 281.25) {
                console.log("equation works")
                windDirection = "W"
            }            
            if (windDegrees >= 281.25 && windDegrees <= 303.75) {
                console.log("equation works")
                windDirection = "WNW"
            }
            if (windDegrees >= 303.75 && windDegrees <= 326.25) {
                console.log("equation works")
                windDirection = "NW"
            }
            if (windDegrees >= 326.25 && windDegrees <= 348.75) {
                console.log("equation works")
                windDirection = "NNW"
            }
            if (windDegrees <= 11.25 || windDegrees > 348.75) {
                console.log("equation works")
                windDirection = "N"
            }
            
            this.windDirection = windDirection
            console.log(windDirection)



        },
        dateBuilder() {

        },



        // //Fetch the data from the Propublica website//
        async fetchData() {

            this.weather = await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(response => response.json()

                )

                .then(data => {
                    console.log(data)
                    return data
                })
                .catch(error => console.log(error))
            console.log(this.weather)
            this.sunrise = this.convertUnixTimeStapToTime(this.weather.sys.sunrise)
            this.sunset = this.convertUnixTimeStapToTime(this.weather.sys.sunset)
            this.convertWindDegreesToWindDirection(this.weather.wind.deg)


        },
        async fetchForecastData() {

            this.weatherForecast = await fetch(`${this.url_base}forecast?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(response => response.json()

                )

                .then(data => {
                    console.log(data)
                    return data
                })
                .catch(error => console.log(error))
            console.log(this.weatherForecast)
     
        }
    },







});




//https://www.chartjs.org/docs/latest/configuration/animations.html//
// https://home.openweathermap.org/api_keys
// https://askubuntu.com/questions/833322/pair-bose-quietcomfort-35-with-ubuntu-over-bluetooth