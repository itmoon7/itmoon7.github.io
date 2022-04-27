// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you start seeing {% %} and {{ }}, these are referring to
// objects in this file.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.

// These are my frequent collaborators, so let's use some variables:
const im = "Intae Moon";
const sg = "Stefan Groha";
const ag = "Alexander Gusev";
const nickolai = "Nickolai Zeldovich";

// authorList generates the HTML for the author list from a JS array
function authorList(authors) {
    var list = [];
    authors.forEach((name, i) => {
        if (name == im) {
            name = '<span class="self-author">' + name + "</span>";
        }
        if (i == authors.length - 1) {
            list.push("and " + name);
        } else {
            list.push(name);
        }
    });
    return list.join(", ");
}

module.exports = {
    publications: [{
            title: "SurvLatent ODE: A Neural ODE based time-to-event model with competing risks for longitudinal data improves cancer-associated Deep Vein Thrombosis (DVT) prediction",
            authors: authorList([
                im,
                sg,
                ag,
            ]),
            conference: "arXiv pre-print",
            link: "https://arxiv.org/abs/2204.09633"
        },
        {
            title: "Utilizing Electronic Health Records (EHR) and Tumor Panel Sequencing to Demystify Prognosis of Cancer of Unknown Primary (CUP) patients",
            authors: authorList([im, "Sylvan C. Baca", "Kenneth L. Keh", ag]),
            conference: "Symposium on Artificial Intelligence for Learning Health Systems (SAIL) 2022",
            link : "https://sail.health/index.html",
        },
        {
            title: "A high-performance 65 w universal ac-dc converter using a variable-inverter-rectifier-transformer with improved step-down capability",
            authors: authorList([
                im,
                "Mike K. Ranjram",
                "Sombuddha Chakraborty",
                "David J. Perreault",
            ]),
            conference: "IEEE Energy Conversion Congress and Exposition (ECCE) 2019",
            link : "https://ieeexplore.ieee.org/abstract/document/8912821",
        },
        {
            title: "A wide operating range converter using a variable-inverter-rectifier-transformer with improved step-down capability",
            authors: authorList([
                im,
                "Mike K. Ranjram",
                "Sombuddha Chakraborty",
                "David J. Perreault",
            ]),
            conference: "IEEE Applied Power Electronics Conference and Exposition (APEC) 2019",
            link : "https://ieeexplore.ieee.org/abstract/document/8721894",
        },
        {
            title: "Variable-inverter-rectifier-transformer: A hybrid electronic and magnetic structure enabling adjustable high step-down conversion ratios",
            authors: authorList([
                "Mike K. Ranjram",
                im,
                "David J. Perreault",
            ]),
            conference: "IEEE Transactions on Power Electronics 2018",
            link : "https://ieeexplore.ieee.org/abstract/document/8264814",
        },
        {
            title: "Design and implementation of a 1.3 kW, 7-level flying capacitor multilevel AC-DC converter with power factor correction",
            authors: authorList([
                im,
                "Carl F Haken", "Erik K Saathoff", "Ethan Bian", "Yutian Lei", "Shibin Qin", "Derek Chou", "Steven Sedig", "Won Ho Chung", "Robert CN Pilawa-Podgurski",
            ]),
            conference: "IEEE Applied Power Electronics Conference and Exposition (APEC) 2017",
            link : "https://ieeexplore.ieee.org/abstract/document/7930674/",
        }
    ],
};