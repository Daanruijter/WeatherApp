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

        //Forecasted data//
        weatherForecast: {},


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



            }

        },
        // sunrise and sunset converter
        convertUnixTimeStapToTime(unix_timestamp) {



            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            let date = new Date(unix_timestamp * 1000);


            //get the day in letters//
            let day = date.getDay();
            let weekDay = ''

            if (day === 0) {
                weekDay = "Sunday"
            }
            if (day === 1) {
                weekDay = "Monday"
            }
            if (day === 2) {
                weekDay = "Tuesday"
            }
            if (day === 3) {
                weekDay = "Wednesday"
            }
            if (day === 4) {
                weekDay = "Thursday"
            }
            if (day === 5) {
                weekDay = "Friday"
            }
            if (day === 6) {
                weekDay = "Saturday"
            }

            //get the day number in month in letters//
            let dateNumber = date.getDate()

            //get the month in letters//
            let month = date.getMonth();

            //get the month in numbers//
            let monthNumber = month + 1
            let monthName = ''

            if (month === 0) {
                monthName = "January"
            }
            if (month === 1) {
                monthName = "February"
            }
            if (month === 2) {
                monthName = "March"
            }
            if (month === 3) {
                monthName = "April"
            }
            if (month === 4) {
                monthName = "May"
            }
            if (month === 5) {
                monthName = "June"
            }
            if (month === 6) {
                monthName = "July"
            }
            if (month === 7) {
                monthName = "August"
            }
            if (month === 8) {
                monthName = "September"
            }
            if (month === 9) {
                monthName = "Oktober"
            }
            if (month === 10) {
                monthName = "November"
            }
            if (month === 11) {
                monthName = "December"
            }

            //get the year//
            let year = date.getFullYear()





            // Hours part from the timestamp
            let hours = date.getHours();
            // Minutes part from the timestamp
            let minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            let seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            // console.log(day)
            // console.log(weekDay)
            // console.log(date)
            // console.log(dateNumber)
            // console.log(month)
            // console.log(monthName)
            // console.log(monthNumber)
            // console.log(year)

            // console.log(formattedTime);

            return {
                seconds: seconds,
                minutes: minutes,
                hours: hours,
                day: day,
                weekDay: weekDay,
                date: date,
                dateNumber: dateNumber,
                month: month,
                monthName: monthName,
                monthNumber: monthNumber,
                year: year,
                date: date,
                formattedTime: formattedTime,

            }

        },
        convertWindDegreesToWindDirection(windDegrees) {


            let windDirection = ''


            if (windDegrees >= 11.25 && windDegrees <= 33.75) {

                windDirection = "NNE"
            }
            if (windDegrees >= 33.75 && windDegrees <= 56.25) {

                windDirection = "NE"
            }
            if (windDegrees >= 56.25 && windDegrees <= 78.75) {

                windDirection = "ENE"
            }
            if (windDegrees >= 78.75 && windDegrees <= 101.25) {

                windDirection = "E"
            }
            if (windDegrees >= 101.25 && windDegrees <= 123.75) {

                windDirection = "ESE"
            }
            if (windDegrees >= 123.75 && windDegrees <= 146.25) {

                windDirection = "SE"
            }
            if (windDegrees >= 146.25 && windDegrees <= 168.75) {

                windDirection = "SSE"
            }
            if (windDegrees >= 168.75 && windDegrees <= 191.25) {

                windDirection = "S"
            }
            if (windDegrees >= 191.25 && windDegrees <= 213.75) {

                windDirection = "SSW"
            }
            if (windDegrees >= 213.75 && windDegrees <= 236.25) {

                windDirection = "SW"
            }
            if (windDegrees >= 236.25 && windDegrees <= 258.75) {

                windDirection = "WSW"
            }
            if (windDegrees >= 258.75 && windDegrees <= 281.25) {

                windDirection = "W"
            }
            if (windDegrees >= 281.25 && windDegrees <= 303.75) {

                windDirection = "WNW"
            }
            if (windDegrees >= 303.75 && windDegrees <= 326.25) {

                windDirection = "NW"
            }
            if (windDegrees >= 326.25 && windDegrees <= 348.75) {

                windDirection = "NNW"
            }
            if (windDegrees <= 11.25 || windDegrees > 348.75) {

                windDirection = "N"
            }

            this.windDirection = windDirection
            return windDirection




        },
        convertCelsiusToFahrenheit(celsius) {
            let fahrenheit = Math.round(((celsius * 1.8000) + 32) * 10) / 10;

            return fahrenheit
        },
        convertCelsiusToKelvin(celsius) {
            let kelvin = Math.round((celsius + 273.15) * 10) / 10;


            return kelvin

        },
        temperatureRounder(celsius) {
            let celsiusRounded = Math.round((celsius) * 10) / 10
            return celsiusRounded
        },

        dateBuilder() {

        },

        forecastedWeatherBuilder() {
            
            let monday = []
            let tuesday = []
            let wednesday = []
            let thursday = []
            let friday = []
            let saturday = []
            let sunday = []

            for (i = 0; i < this.weatherForecast.list.length; i++) {
                console.log(this.weatherForecast.list[i].main.temp_max)
                let listItem = this.weatherForecast.list

                let dayNumber = this.convertUnixTimeStapToTime(this.weatherForecast.list[i].dt).day

                let firstDayOfTheSetNumber = this.convertUnixTimeStapToTime(this.weatherForecast.list[0].dt).day

                console.log(dayNumber, firstDayOfTheSetNumber)

               

                if (dayNumber === 1) {
                    console.log("it's the first day of the range")
                    monday.push(listItem[i].main.temp)


                }
                if (dayNumber === 2) {

                    console.log("it's the second day of the range")
                    tuesday.push(listItem[i].main.temp)

                }
                if (dayNumber === 3) {

                    console.log("it's the third day of the range")
                    wednesday.push(listItem[i].main.temp)

                }
                if (dayNumber === 4) {

                    console.log("it's the fourth day of the range")
                    thursday.push(listItem[i].main.temp)

                }
                if (dayNumber === 5) {

                    console.log("it's the fifth day of the range")
                    friday.push(listItem[i].main.temp)

                }
                if (dayNumber === 6) {

                    console.log("it's the sixth day of the range")
                    saturday.push(listItem[i].main.temp)

                }
                if (dayNumber === 0) {

                    console.log("it's the zeventh day of the range")
                    sunday.push(listItem[i].main.temp)

                }
              
                this.weatherForecast.monday = monday
                this.weatherForecast.tuesday = tuesday
                this.weatherForecast.wednesday = wednesday
                this.weatherForecast.thursday = thursday
                this.weatherForecast.friday = friday
                this.weatherForecast.saturday = saturday
                this.weatherForecast.sunday = sunday

            }



        },
        // datalogger() {

        //     for (i = 0; i < this.weatherForecast.list.length; i++) {
        //         console.log("s")
        //         console.log(this.weatherForecast.list[i].main.temp)
        //         console.log(this.convertUnixTimeStapToTime(this.weatherForecast.list[i].dt).formattedTime)
        //         console.log(this.weatherForecast.list[i].main.temp)
        //     }

        // },


        // //Fetch the data from the Propublica website//
        async fetchData() {

            this.weatherForecast = await fetch(`${this.url_base}forecast?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(response => response.json()

                )

                .then(data => {
                    console.log(data)
                    return data
                })
                .catch(error => console.log(error))

            this.weather = await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(response => response.json()

                )

                .then(data => {

                    return data
                })

                .catch(error => console.log(error))




            this.weather.sys.sunriseConverted = this.convertUnixTimeStapToTime(this.weather.sys.sunrise).formattedTime
            this.weather.sys.sunsetConverted = this.convertUnixTimeStapToTime(this.weather.sys.sunset).formattedTime
            this.weather.wind.windDirection = this.convertWindDegreesToWindDirection(this.weather.wind.deg)

            this.weather.main.tempFahrenheit = this.convertCelsiusToFahrenheit(this.weather.main.temp)
            this.weather.main.feels_likeFahrenheit = this.convertCelsiusToFahrenheit(this.weather.main.feels_like)
            this.weather.main.temp_maxFahrenheit = this.convertCelsiusToFahrenheit(this.weather.main.temp_max)
            this.weather.main.temp_minFahrenheit = this.convertCelsiusToFahrenheit(this.weather.main.temp_min)
            this.weather.main.tempKelvin = this.convertCelsiusToKelvin(this.weather.main.temp)
            this.weather.main.feels_likeKelvin = this.convertCelsiusToKelvin(this.weather.main.feels_like)
            this.weather.main.temp_maxKelvin = this.convertCelsiusToKelvin(this.weather.main.temp_max)
            this.weather.main.temp_minKelvin = this.convertCelsiusToKelvin(this.weather.main.temp_min)
            this.weather.main.temp = this.temperatureRounder(this.weather.main.temp)
            this.weather.main.feels_like = this.temperatureRounder(this.weather.main.feels_like)
            this.weather.main.temp_max = this.temperatureRounder(this.weather.main.temp_max)
            this.weather.main.temp_min = this.temperatureRounder(this.weather.main.temp_min)

            // this.datalogger()
            this.forecastedWeatherBuilder()



        },

    },

});




//https://www.chartjs.org/docs/latest/configuration/animations.html//
// https://home.openweathermap.org/api_keys
// https://askubuntu.com/questions/833322/pair-bose-quietcomfort-35-with-ubuntu-over-bluetooth