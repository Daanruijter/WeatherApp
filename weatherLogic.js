let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"

// let url = "https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&APPID=fb2a017905db23f312a17b320e8c07d0"

// let url = "https://api.openweathermap.org/data/2.5/forecast?q=Valencia,esp&APPID=fb2a017905db23f312a17b320e8c07d0"




const app = new Vue({
    el: '#app',
    data: {
        api_key: "fb2a017905db23f312a17b320e8c07d0",
        query: 'oslo',
        url_base: "https://api.openweathermap.org/data/2.5/",
        weather: {},
        date: '',
        currentDate: '',

        //Forecasted data//
        weatherForecast: {
            forecastDate: 'test'
        },
        dateClicked: '',
        isChecked: ["air-pressure", "humidity", "cloud-coverage", "wind-direction", "wind-speed"],


    },

    created() {

        this.fetchData(url)


    },

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



        getSelectedElementDayNumber(e) {
            console.log(e)

            let targettedDate = e.target.innerText
            let t = e
            console.log(targettedDate)

            let dateWithMonthInLetters = ''
            let targettedDateString = JSON.stringify(targettedDate)

            if (targettedDateString.includes("-1-")) {

                dateWithMonthInLetters = targettedDateString.replace("-1-", "-january-")

            }
            if (targettedDateString.includes("-2-")) {

                dateWithMonthInLetters = targettedDateString.replace("-2-", "-february-")

            }
            if (targettedDateString.includes("-3-")) {

                dateWithMonthInLetters = targettedDateString.replace("-3-", "-march-")

            }
            if (targettedDateString.includes("-4-")) {

                dateWithMonthInLetters = targettedDateString.replace("-4-", "-april-")

            }
            if (targettedDateString.includes("-5-")) {

                dateWithMonthInLetters = targettedDateString.replace("-5-", "-may-")

            }
            if (targettedDateString.includes("-6-")) {

                dateWithMonthInLetters = targettedDateString.replace("-6-", "-june-")

            }
            if (targettedDateString.includes("-7-")) {

                dateWithMonthInLetters = targettedDateString.replace("-7-", "-july-")

            }
            if (targettedDateString.includes("-8-")) {

                dateWithMonthInLetters = targettedDateString.replace("-8-", "-august-")

            }
            if (targettedDateString.includes("-9-")) {

                dateWithMonthInLetters = targettedDateString.replace("-9-", "-september-")

            }
            if (targettedDateString.includes("-10-")) {

                dateWithMonthInLetters = targettedDateString.replace("-10-", "-oktober-")

            }
            if (targettedDateString.includes("-11-")) {

                dateWithMonthInLetters = targettedDateString.replace("-11-", "-november-")

            }
            if (targettedDateString.includes("-12-")) {

                dateWithMonthInLetters = targettedDateString.replace("-12-", "-december-")

            }

            //do createchart with this date//
            let unixtime = Date.parse(dateWithMonthInLetters) / 1000

            let dayOfTheWeekNumber = this.convertUnixTimeStapToTime(unixtime).day
            this.createChart(dayOfTheWeekNumber, t)
            console.log(targettedDateString)
            console.log(this.weatherForecast + "after click")
            this.date = targettedDate
            this.currentDate = targettedDate




        },
        getSelectedElementDayNumberFromData(e) {
            let targetElementOtherData = e
            let dayOfTheWeekDateOtherData = this.currentDate
            console.log(this.currentDate)
            this.createChartForOtherData(dayOfTheWeekDateOtherData, targetElementOtherData)
        },
        createChartForOtherData(dayOfTheWeekDateOtherData, targetElementOtherData) {


            let dateWithMonthInLettersOtherData = ''
            
            

            if (dayOfTheWeekDateOtherData.includes("-1-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-1-", "-january-")

            }
            if (dayOfTheWeekDateOtherData.includes("-2-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-2-", "-february-")

            }
            if (dayOfTheWeekDateOtherData.includes("-3-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-3-", "-march-")

            }
            if (dayOfTheWeekDateOtherData.includes("-4-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-4-", "-april-")

            }
            if (dayOfTheWeekDateOtherData.includes("-5-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-5-", "-may-")

            }
            if (dayOfTheWeekDateOtherData.includes("-6-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-6-", "-june-")

            }
            if (dayOfTheWeekDateOtherData.includes("-7-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-7-", "-july-")

            }
            if (dayOfTheWeekDateOtherData.includes("-8-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-8-", "-august-")

            }
            if (dayOfTheWeekDateOtherData.includes("-9-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-9-", "-september-")

            }
            if (dayOfTheWeekDateOtherData.includes("-10-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-10-", "-oktober-")

            }
            if (dayOfTheWeekDateOtherData.includes("-11-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-11-", "-november-")

            }
            if (dayOfTheWeekDateOtherData.includes("-12-")) {

                dateWithMonthInLettersOtherData = dayOfTheWeekDateOtherData.replace("-12-", "-december-")

            }
            console.log(dateWithMonthInLettersOtherData)
            console.log(dayOfTheWeekDateOtherData)
            console.log(targetElementOtherData)
            dateWithMonthInLettersOtherData = "" + dateWithMonthInLettersOtherData + ""
            console.log(dateWithMonthInLettersOtherData)


             //do createchart with this date//
             let unixtime = Date.parse(dateWithMonthInLettersOtherData) / 1000
            console.log(unixtime)
             let dayOfTheWeekNumberOtherData = this.convertUnixTimeStapToTime(unixtime).day
             
            console.log(dayOfTheWeekNumberOtherData)
 

            //always needed//
            let weatherData = this.weatherForecast
            let forecastDate = []
            let time = []
            let timeCalculator = this.convertUnixTimeStapToTime

            //this needs to be the date where one clicks on//
            // let firstDayOfTheDataset = this.convertUnixTimeStapToTime(this.weatherForecast.list[0].dt).day

            //this needs to be populated with the data based on the day where one clicks on//
            let temperature = []
            let feelsLike = []
            let pressure = []
            let humidity = []
            let weatherType = []
            let cloudCoverage = []
            let windSpeed = []
            let windSpeedDegrees = []



            for (i = 0; i < this.weatherForecast.list.length; i++) {

                //firstDayOfTheDataSet needs to be the date where one clicks on//
                if (timeCalculator(weatherData.list[i].dt).day === dayOfTheWeekNumberOtherData) {

                    temperature.push(weatherData.list[i].main.temp)
                    time.push(
                        this.convertUnixTimeStapToTime(weatherData.list[i].dt).formattedTime
                    )

                    forecastDate.push(this.convertUnixTimeStapToTime(weatherData.list[i].dt).dateNumber + "-" +
                        this.convertUnixTimeStapToTime(weatherData.list[i].dt).monthNumber + "-" +
                        this.convertUnixTimeStapToTime(weatherData.list[i].dt).year

                    )
                    feelsLike.push(weatherData.list[i].main.feels_like)

                    pressure.push(weatherData.list[i].main.pressure)
                    humidity.push(weatherData.list[i].main.humidity)
                    weatherType.push(weatherData.list[i].weather[0].description)
                    cloudCoverage.push(weatherData.list[i].clouds.all)
                    windSpeed.push(weatherData.list[i].wind.speed)
                    windSpeedDegrees.push(weatherData.list[i].wind.deg)


                }
            }

            this.weatherForecast.weatherType = weatherType
            this.weatherForecast.weatherTime = time
            console.log(time)
            console.log(pressure)
            console.log(humidity)
            console.log(weatherType)
            console.log(cloudCoverage)
            console.log(windSpeed)
            console.log(windSpeedDegrees)

            console.log(targetElementOtherData.target.value)

            //create a chart for air pressure//
            if (targetElementOtherData.target.value === "air-pressure"){console.log("dfdfdkfhdkfjd")

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',


                // The data for our dataset
                data: {

                    labels: time,

                    datasets: [{

                        label: 'Air pressure during the day',
                        // backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: pressure,

                    }, ]
                },


                // Configuration options go here
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 15,
                                fontColor: 'white',

                            }
                        }],
                        yAxes: [{
                            ticks: {

                                fontSize: 30,
                                fontColor: 'white',
                            }
                        }],

                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'white',
                            fontSize: 30,
                        }
                    },


                }
            });

        }

        //create chart for humidity//
        if (targetElementOtherData.target.value === "humidity"){console.log("dfdfdkfhdkfjd")

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',


                // The data for our dataset
                data: {

                    labels: time,

                    datasets: [{

                        label: 'Humidity during the day',
                        // backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: humidity,

                    }, ]
                },


                // Configuration options go here
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 15,
                                fontColor: 'white',

                            }
                        }],
                        yAxes: [{
                            ticks: {

                                fontSize: 30,
                                fontColor: 'white',
                            }
                        }],

                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'white',
                            fontSize: 30,
                        }
                    },


                }
            });

        }

        //create chart for humidity//
        if (targetElementOtherData.target.value === "cloud-coverage"){console.log("dfdfdkfhdkfjd")

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',


                // The data for our dataset
                data: {

                    labels: time,

                    datasets: [{

                        label: 'Cloud coverage during the day',
                        // backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: cloudCoverage,

                    }, ]
                },


                // Configuration options go here
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 15,
                                fontColor: 'white',

                            }
                        }],
                        yAxes: [{
                            ticks: {

                                fontSize: 30,
                                fontColor: 'white',
                            }
                        }],

                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'white',
                            fontSize: 30,
                        }
                    },


                }
            });

        }

           //create chart for wind direction//
        if (targetElementOtherData.target.value === "wind-direction"){console.log("dfdfdkfhdkfjd")

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',


            // The data for our dataset
            data: {

                labels: time,

                datasets: [{

                    label: 'Wind direction during the day (degrees)',
                    // backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: windSpeedDegrees,

                }, ]
            },


            // Configuration options go here
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            fontSize: 15,
                            fontColor: 'white',

                        }
                    }],
                    yAxes: [{
                        ticks: {

                            fontSize: 30,
                            fontColor: 'white',
                        }
                    }],

                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'white',
                        fontSize: 30,
                    }
                },


            }
        });

    }

      //create chart for wind speed//
      if (targetElementOtherData.target.value === "wind-speed"){console.log("dfdfdkfhdkfjd")

      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',


          // The data for our dataset
          data: {

              labels: time,

              datasets: [{

                  label: 'Wind speed during the day (m/s)',
                  // backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: windSpeed,

              }, ]
          },


          // Configuration options go here
          options: {
              scales: {
                  xAxes: [{
                      ticks: {
                          fontSize: 15,
                          fontColor: 'white',

                      }
                  }],
                  yAxes: [{
                      ticks: {

                          fontSize: 30,
                          fontColor: 'white',
                      }
                  }],

              },
              legend: {
                  labels: {
                      // This more specific font property overrides the global property
                      fontColor: 'white',
                      fontSize: 30,
                  }
              },


          }
      });

  }


        },


        dateBuilder() {

            //show current date on the screen for  the current weather data//
            let dateConstructorBase = this.convertUnixTimeStapToTime(this.weather.dt)


            this.weather.date = dateConstructorBase.dateNumber + " " + dateConstructorBase.monthName + " " + dateConstructorBase.year

            //create an array of all the data in the forecast data object//
            let dayOfTheWeekNumberArray = []
            let dateArray = []

            for (i = 0; i < this.weatherForecast.list.length; i++) {
                dayOfTheWeekNumberArray.push(this.convertUnixTimeStapToTime(this.weatherForecast.list[i].dt).day)
                dateArray.push(this.convertUnixTimeStapToTime(this.weatherForecast.list[i].dt).dateNumber + "-" +
                    this.convertUnixTimeStapToTime(this.weatherForecast.list[i].dt).monthNumber + "-" +
                    this.convertUnixTimeStapToTime(this.weatherForecast.list[i].dt).year

                )
            }



            //Get unique week of the day numbers//
            let dayOfTheWeekNumberArrayOnlyUniqueNumbers = []
            let dateArrayOnlyUniqueNumbers = []


            for (i = 0; i < dayOfTheWeekNumberArray.length; i++) {
                if (dayOfTheWeekNumberArray[i] !== (dayOfTheWeekNumberArray[i + 1])) {
                    dayOfTheWeekNumberArrayOnlyUniqueNumbers.push((dayOfTheWeekNumberArray[i]))
                    dateArrayOnlyUniqueNumbers.push(dateArray[i])

                }



                this.weatherForecast.dateArrayOnlyUniqueNumbersFirst = dayOfTheWeekNumberArray[0]


            }
            console.log(dateArrayOnlyUniqueNumbers)
            this.weatherForecast.firstDateOfTheDataSet = dateArrayOnlyUniqueNumbers[0]
            dateArrayOnlyUniqueNumbers.shift()
            this.weatherForecast.dateArrayOnlyUniqueNumbers = dateArrayOnlyUniqueNumbers


        },
        createChart(dayOfTheWeekNumber, e) {

            console.log(dayOfTheWeekNumber)

            //always needed//
            let weatherData = this.weatherForecast
            let forecastDate = []
            let time = []
            let timeCalculator = this.convertUnixTimeStapToTime

            //this needs to be the date where one clicks on//
            // let firstDayOfTheDataset = this.convertUnixTimeStapToTime(this.weatherForecast.list[0].dt).day

            //this needs to be populated with the data based on the day where one clicks on//
            let temperature = []
            let feelsLike = []
            let pressure = []
            let humidity = []
            let weatherType = []
            let cloudCoverage = []
            let windSpeed = []
            let windSpeedDegrees = []



            for (i = 0; i < this.weatherForecast.list.length; i++) {

                //firstDayOfTheDataSet needs to be the date where one clicks on//
                if (timeCalculator(weatherData.list[i].dt).day === dayOfTheWeekNumber) {

                    temperature.push(weatherData.list[i].main.temp)
                    time.push(
                        this.convertUnixTimeStapToTime(weatherData.list[i].dt).formattedTime
                    )

                    forecastDate.push(this.convertUnixTimeStapToTime(weatherData.list[i].dt).dateNumber + "-" +
                        this.convertUnixTimeStapToTime(weatherData.list[i].dt).monthNumber + "-" +
                        this.convertUnixTimeStapToTime(weatherData.list[i].dt).year

                    )
                    feelsLike.push(weatherData.list[i].main.feels_like)

                    pressure.push(weatherData.list[i].main.pressure)
                    humidity.push(weatherData.list[i].main.humidity)
                    weatherType.push(weatherData.list[i].weather[0].description)
                    cloudCoverage.push(weatherData.list[i].clouds.all)
                    windSpeed.push(weatherData.list[i].wind.speed)
                    windSpeedDegrees.push(weatherData.list[i].wind.deg)


                }
            }

            this.weatherForecast.weatherType = weatherType
            this.weatherForecast.weatherTime = time
            console.log(time)
            console.log(pressure)
            console.log(humidity)
            console.log(weatherType)
            console.log(cloudCoverage)
            console.log(windSpeed)
            console.log(windSpeedDegrees)


            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',


                // The data for our dataset
                data: {

                    labels: time,

                    datasets: [{

                        label: 'Temperature during the day',
                        // backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: temperature,

                    }, {
                        label: 'Temperature feels like',
                        // backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255,255,0)',
                        data: feelsLike,

                    }]
                },


                // Configuration options go here
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 15,
                                fontColor: 'white',

                            }
                        }],
                        yAxes: [{
                            ticks: {

                                fontSize: 30,
                                fontColor: 'white',
                            }
                        }],

                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'white',
                            fontSize: 30,
                        }
                    },


                }
            });


            //creating other charts under conditions//
            console.log(this.currentDate)
            console.log(e)
            let targettedElement = ''
            console.log(forecastDate)
            if (e !== undefined) {
                targettedElement = e.target.value
            }
            console.log(targettedElement)


            let targettedElementString = JSON.stringify(targettedElement)
            console.log(targettedElementString)


            if (targettedElement == "air-pressure") {
                dayOfTheWeekNumber = 6
                ctx = document.getElementById('myChart').getContext('2d');
                ctx.innerText = ""
                var chart = new Chart(ctx, {
                    // The type of chart we want to create
                    type: 'line',


                    // The data for our dataset
                    data: {

                        labels: time,

                        datasets: [{

                            label: 'Air-pressure during the day',
                            // backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: pressure,

                        }, ]
                    },


                    // Configuration options go here
                    options: {
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontSize: 15,
                                    fontColor: 'white',

                                }
                            }],
                            yAxes: [{
                                ticks: {

                                    fontSize: 30,
                                    fontColor: 'white',
                                }
                            }],

                        },
                        legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                fontColor: 'white',
                                fontSize: 30,
                            }
                        },


                    }
                });

            }
            if (targettedElement == "humidity") {

            }
            if (targettedElement == "cloud-coverage") {

            }
            if (targettedElement == "wind-direction") {

            }
            if (targettedElement == "wind-speed") {

            }


            // if(e!==undefined && !targettedElementString.includes("weather-selection-box")){
            //     console.log(targettedElementString)
            //     // if (targettedElementString === 
            // }





        },





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


            // console.log(this.weatherForecast.)

            this.dateBuilder()


            this.createChart(this.weatherForecast.dateArrayOnlyUniqueNumbersFirst)

            this.date = this.weatherForecast.firstDateOfTheDataSet
            this.currentDate = this.weatherForecast.firstDateOfTheDataSet
            console.log(this.weatherForecast + "after fetched data")



        },

    },

});




//https://www.chartjs.org/docs/latest/configuration/animations.html//
// https://home.openweathermap.org/api_keys
// https://askubuntu.com/questions/833322/pair-bose-quietcomfort-35-with-ubuntu-over-bluetooth