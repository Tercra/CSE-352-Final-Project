window.onload = function(){

    class Shift
    {
        constructor(day, time) {
            this.day = day
            this.time = time
            this.domain = []
            this.assignment = 0
        }

        // get time() {
        //     return this.time
        // }

        // get day() {
        //     return this.day
        // }
    }

    var fstring;
    var fs = document.getElementById('fs');
    fs.addEventListener('change', (e) => {
        var files = e.target.files;
        var reader = new FileReader();
        reader.onload = function(ev) {
            fstring = ev.target.result
            console.log(fstring);
            console.log(typeof fstring)
            schedule_shifts(fstring)
        }
        reader.readAsText(files[0]);
    });

    function dwo(v)
    {

    }

    // vi and vl are placeholder variable names until 
    // I actually figure out what they do in the algorithm
    function check_forward4(vars, level, vi, vl)
    {

    }

    function search_fc4(vars, level)
    {

    }

    // function fc4()
    // {

    // }












    function schedule_meetup(input, min_meet_time = 0)
    {
        // This function finds all available times a group can meet up 
        // given their availabilities.
        // Since this function won't be using CSP, I'm focusing on schedule_shifts for now
        // Parameters:
        //
        // input: json of people and their availabilities.
        //
        // min_meet_time: minimum amount of time the group 
        // needs everyone to be available for, in minutes. Default 0.
        //
        // Returns a json that has all availabilities listed

        var av = JSON.parse(input);
    }

    function schedule_shifts(input)
    {
        // This function takes people's availabilities and 
        // gives everyone shifts based on different constraints.
        // Parameters:
        //
        // input: json of people and their availabilities.
        //
        // open_time: When the store opens
        //
        // close_time: when the store closes

        console.log(input)

        var av = JSON.parse(input);

        // TODO: Create a csp problem given the availabilities of people.

        var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

        // Assuming each work day is split into four shifts,
        // 6:00AM - 10:00AM ("morning")
        // 10:00AM - 2:00PM ("afternoon")
        // 2:00PM - 6:00PM ("evening")
        // 6:00PM - 10:00PM ("night")
        // Each shift is a variable in the CSP
        //
        // The domain of each shift is an array of people who can work the shift.
        //
        // Constraints:
        // 1. Each person must be scheduled at least once
        // 2. One person can not be scheduled more than 4/5/6 shifts per week (unsure which to choose yet)
        // 3. No person can work two shifts in one day
        
        var sun_shifts = [new Shift("sun", "morning"), new Shift("sun", "afternoon"), new Shift("sun", "evening"), new Shift("sun", "night")]
        var mon_shifts = [new Shift("mon", "morning"), new Shift("mon", "afternoon"), new Shift("mon", "evening"), new Shift("mon", "night")]
        var tue_shifts = [new Shift("tue", "morning"), new Shift("tue", "afternoon"), new Shift("tue", "evening"), new Shift("tue", "night")]
        var wed_shifts = [new Shift("wed", "morning"), new Shift("wed", "afternoon"), new Shift("wed", "evening"), new Shift("wed", "night")]
        var thu_shifts = [new Shift("thu", "morning"), new Shift("thu", "afternoon"), new Shift("thu", "evening"), new Shift("thu", "night")]
        var fri_shifts = [new Shift("fri", "morning"), new Shift("fri", "afternoon"), new Shift("fri", "evening"), new Shift("fri", "night")]
        var sat_shifts = [new Shift("sat", "morning"), new Shift("sat", "afternoon"), new Shift("sat", "evening"), new Shift("sat", "night")]



        for (var p of Object.keys(av))
        {
            for (var day of days)
            {
                console.log(day)
                for (var time of av[p][day])
                {
                    // convert time[0] and time[1] into minutes
                    // then compare them to the minutes of the shift starts and ends

                    var time_start = (parseInt(time[0].slice(0, time[0].indexOf(":"))) * 60) + parseInt(time[0].slice(time[0].indexOf(":") + 1, time[0].length))
                    var time_end = (parseInt(time[1].slice(0, time[1].indexOf(":"))) * 60) + parseInt(time[1].slice(time[1].indexOf(":") + 1, time[1].length))

                    if (time_start < 360 && time_end > 600) {
                        // add this person as a domain for the morning shift
                        eval(day + "_shifts[0].domain.push(" + p + ")")
                        //eval("console.log(" + day + "_shifts[0].domain)")
                    }
                    if (time_start < 600 && time_end > 840) {
                        // add this person as a domain for the afternoon shift
                        eval(day + "_shifts[1].domain.push(" + p + ")")
                    }
                    if (time_start < 840 && time_end > 1080) {
                        // add this person as a domain for the evening shift
                        eval(day + "_shifts[2].domain.push(" + p + ")")
                    }
                    if (time_start < 1080 && time_end > 1320) {
                        // add this person as a domain for the night shift
                        eval(day + "_shifts[3].domain.push(" + p + ")")
                    }
                }
            }
        }



    }

}