window.onload = function(){
    var fstring;
    var fs = document.getElementById('fs');
    fs.addEventListener('change', (e) => {
        var files = e.target.files;
        var reader = new FileReader();
        reader.onload = function(ev) {
            fstring = ev.target.result
            console.log(fstring);
            console.log(typeof fstring)
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

    function fc4()
    {

    }












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

    function schedule_shifts(input, open_time, close_time)
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

        var av = JSON.parse(input);

        // TODO: Create a csp problem given the availabilities of people.
    }
}