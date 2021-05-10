window.onload = function(){

    const days = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6
    }

    const times = {
        MORNING: 0,
        AFTERNOON: 1,
        EVENING: 2,
        NIGHT: 3
    }

    class Shift
    {
        constructor(day, time) {
            this.day = day
            this.time = time
            this.domain = []
            this.domain_marks = []
            this.non_support_sets = []  //2d array most likely
            this.assignment = 0
        }

        setDomainMarks() {
            for (var i in this.domain) {
                this.domain_marks.push(0);
            }
        }
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
            let output = schedule_shifts(fstring)
            // TODO: Put some code here to parse through output to make it readable in the user side
            // For now I'll add a test string to see if this works, replace output_test with the reformated output
            let output_test = `Hello there\nThis is a test\nTo see if the output can be formatted this way`
            document.getElementById("Output").innerHTML = output_test;
        }
        reader.readAsText(files[0]);
    });

    // For each given variable (shift), check its domain (people that can cover the shift)
    // if the domain_mark is 0 (unmarked) return true
    // If all the domain_marks are marked (1) then return false
    function dwo(v)
    {
        for (let i = 0; i < v.domain_marks.length; i++){
            if (v.domain_marks[i] == 0)
                return true;
        }
        return false;
    }

    // Restore the domain to the previous state
    // Effectively this is just going through each variable (shift) in vars
    // Then it goes through each domain (people that can cover the shifts) in the var (shift)
    // And finally, if the domain is marked at that level (mark == level), then it will unmark it (mark == 0)
    function restore(vars, level)
    {
        for (let i = 0; i < vars.length; i++){
            for (let j = 0; j < vars[i].domain.length; j++){
                if (vars[i].domain_marks[j] == level)
                    vars[i].domain_marks[j] = 0;
            }
        }
    }

    // vi and vl are placeholder variable names until 
    // I actually figure out what they do in the algorithm
    function check_forward4(vars, level, shift, person)
    {
        // I changed the names of the last two parameters to "shift" and "person"
        // since that is what they're equivalent to.

        // TODO
    }

    function search_fc4(vars, level, solution)
    {
        // search_fc4 is the same as search_fc3, I screenshot the function in the chat.

        // vars is set up currently like this:
        // vars[day][time]
        // day is each day of the week, I made an enum for simplicity
        // time is for morning, afternoon, evening, or night. I also made an enum for this.
        // Example: vars[TUESDAY][AFTERNOON] would be tuesday afternoon (obviously)
        // I don't think this syntax will be useful in the algorithm (except maybe for checking 
        // if one person is scheduled twice in one day), but it may be useful in testing/debugging.

        // TODO


    }

    // function fc4()
    // {
            //I don't think we need this, our schedule_shifts function handles this
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

        //console.log(input)

        var av = JSON.parse(input);

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
                //console.log(day)
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
        
        // We need a way to mark each domain in a variable.
        // For now, going to use an array in Shifts called domain_marks
        for (var day of days) {
            eval(day + "_shifts[0].setDomainMarks()")
            eval(day + "_shifts[1].setDomainMarks()")
            eval(day + "_shifts[2].setDomainMarks()")
            eval(day + "_shifts[3].setDomainMarks()")
        }
        // Solution array to place assignments
        var solution = []

        // TODO: Initialize non_support_sets array

        var vars = [sun_shifts, mon_shifts, tue_shifts, wed_shifts, thu_shifts, fri_shifts, sat_shifts]
        console.log(vars)

        return search_fc4(vars, 1, solution)
    }

}