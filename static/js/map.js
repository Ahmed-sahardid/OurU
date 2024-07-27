// document.addEventListener('DOMContentLoaded', function() {
//     var map = L.map('map').setView([37.8, -96], 4); // Centered on the US

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // Array of universities
//     var universities = [
//         { name: "Harvard University", location: [42.3770, -71.1167], url: "https://www.harvard.edu" },
//         { name: "Stanford University", location: [37.4275, -122.1697], url: "https://www.stanford.edu" },
//         { name: "Massachusetts Institute of Technology", location: [42.3601, -71.0942], url: "http://web.mit.edu" },
//         { name: "University of California, Berkeley", location: [37.8715, -122.2730], url: "https://www.berkeley.edu" },
//         { name: "California Institute of Technology", location: [34.1377, -118.1253], url: "http://www.caltech.edu" },
//         { name: "Princeton University", location: [40.3430, -74.6551], url: "https://www.princeton.edu" },
//         { name: "Columbia University", location: [40.8075, -73.9626], url: "https://www.columbia.edu" },
//         { name: "University of Chicago", location: [41.7886, -87.5987], url: "https://www.uchicago.edu" },
//         { name: "Yale University", location: [41.3163, -72.9223], url: "https://www.yale.edu" },
//         { name: "University of Pennsylvania", location: [39.9522, -75.1932], url: "https://www.upenn.edu" },
//         { name: "University of Michigan", location: [42.2780, -83.7382], url: "https://umich.edu" },
//         { name: "Cornell University", location: [42.4534, -76.4735], url: "https://www.cornell.edu" },
//         { name: "University of California, Los Angeles", location: [34.0689, -118.4452], url: "http://www.ucla.edu" },
//         { name: "Johns Hopkins University", location: [39.3299, -76.6205], url: "https://www.jhu.edu" },
//         { name: "Northwestern University", location: [42.0565, -87.6753], url: "https://www.northwestern.edu" },
//         { name: "Duke University", location: [36.0014, -78.9382], url: "https://www.duke.edu" },
//         { name: "University of Washington", location: [47.6553, -122.3035], url: "https://www.washington.edu" },
//         { name: "New York University", location: [40.7295, -73.9965], url: "https://www.nyu.edu" },
//         { name: "University of California, San Diego", location: [32.8801, -117.2340], url: "https://ucsd.edu" },
//         { name: "University of Texas at Austin", location: [30.2849, -97.7341], url: "https://www.utexas.edu" },
//         { name: "University of Illinois at Urbana-Champaign", location: [40.1020, -88.2272], url: "https://illinois.edu" },
//         { name: "Georgia Institute of Technology", location: [33.7756, -84.3963], url: "https://www.gatech.edu" },
//         { name: "University of Wisconsin-Madison", location: [43.0766, -89.4125], url: "https://www.wisc.edu" },
//         { name: "University of North Carolina at Chapel Hill", location: [35.9049, -79.0469], url: "https://www.unc.edu" },
//         { name: "University of California, Irvine", location: [33.6405, -117.8443], url: "https://uci.edu" },
//         { name: "University of Florida", location: [29.6516, -82.3420], url: "https://www.ufl.edu" },
//         { name: "Ohio State University", location: [40.0076, -83.0215], url: "https://www.osu.edu" },
//         { name: "Pennsylvania State University", location: [40.7982, -77.8599], url: "https://www.psu.edu" },
//         { name: "University of Southern California", location: [34.0224, -118.2851], url: "https://www.usc.edu" },
//         { name: "Purdue University", location: [40.4237, -86.9212], url: "https://www.purdue.edu" },
//         { name: "University of Maryland, College Park", location: [38.9869, -76.9426], url: "https://www.umd.edu" },
//         { name: "University of Pittsburgh", location: [40.4440, -79.9608], url: "https://www.pitt.edu" },
//         { name: "University of Minnesota", location: [44.9727, -93.2354], url: "https://twin-c"},
//         { name: "University of Minnesota", location: [44.9727, -93.2354], url: "https://twin-cities.umn.edu" },
//         { name: "Texas A&M University", location: [30.6280, -96.3344], url: "https://www.tamu.edu" },
//         { name: "University of Arizona", location: [32.2319, -110.9501], url: "https://www.arizona.edu" },
//         { name: "University of Colorado Boulder", location: [40.0076, -105.2659], url: "https://www.colorado.edu" },
//         { name: "University of Utah", location: [40.7649, -111.8421], url: "https://www.utah.edu" },
//         { name: "University of Virginia", location: [38.0336, -78.5070], url: "https://www.virginia.edu" },
//         { name: "University of Iowa", location: [41.6611, -91.5365], url: "https://uiowa.edu" },
//         { name: "University of Kansas", location: [38.9543, -95.2558], url: "https://www.ku.edu" },
//         { name: "University of Nebraska-Lincoln", location: [40.8202, -96.7005], url: "https://www.unl.edu" },
//         { name: "University of Oregon", location: [44.0448, -123.0726], url: "https://www.uoregon.edu" },
//         { name: "University of Alabama", location: [33.2140, -87.5390], url: "https://www.ua.edu" },
//         { name: "Auburn University", location: [32.6038, -85.4868], url: "https://www.auburn.edu" },
//         { name: "Louisiana State University", location: [30.4140, -91.1785], url: "https://www.lsu.edu" },
//         { name: "University of Oklahoma", location: [35.2080, -97.4457], url: "https://www.ou.edu" },
//         { name: "University of Mississippi", location: [34.3647, -89.5380], url: "https://www.olemiss.edu" },
//         { name: "University of South Carolina", location: [33.9972, -81.0274], url: "https://www.sc.edu" },
//         { name: "Clemson University", location: [34.6834, -82.8374], url: "https://www.clemson.edu" },
//         { name: "University of Missouri", location: [38.9453, -92.3284], url: "https://missouri.edu" }
//     ];

//     // Add markers to the map
//     universities.forEach(function(university) {
//         L.marker(university.location).addTo(map)
//             .bindPopup('<b>' + university.name + '</b><br><a href="' + university.url + '" target="_blank">' + university.url + '</a>');
//     });
//     // universities.forEach(function(university) {
//     //     L.marker(university.location).addTo(map)
//     //         .bindPopup('<b>' + university.name + '</b><br><a href="' + university.url + '" target="_blank">' + university.url + '</a><br><a href="/rate?university=' + encodeURIComponent(university.name) + '">Rate This University</a>');
//     // });
// });

document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([37.8, -96], 4); // Centered on the US

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of universities
    var universities = [
        { name: "Harvard University", location: [42.3770, -71.1167], url: "https://www.harvard.edu" },
        { name: "Stanford University", location: [37.4275, -122.1697], url: "https://www.stanford.edu" },
        // ... (rest of the universities)
    ];

    // Add markers to the map
    universities.forEach(function(university) {
        L.marker(university.location).addTo(map)
            .bindPopup('<b>' + university.name + '</b><br><a href="' + university.url + '" target="_blank">' + university.url + '</a><br><a href="/rate?university=' + encodeURIComponent(university.name) + '">Rate This University</a>');
    });
});

