import express, { json } from "express";
// const routes = require("./routes/tea"); // import the routes
import { Headers, bag } from "fetch-headers";
import fetch from "node-fetch";
const app = express();
// const myRequest = new Request();
// const Headers = myRequest.headers;

app.use(json());

// app.use("/", routes); //to use the routes
function testQuery() {
    var url = new URL("https://dbpedia.org/sparql");
    var params = {
        query: `
        SELECT ?name ?director ?cameraman ?editor ?gross ?release_date
        WHERE {
        ?uri rdf:type <http://dbpedia.org/ontology/Film>.
        ?uri rdfs:label ?name;
        <http://dbpedia.org/ontology/director> ?director;
        <http://dbpedia.org/ontology/starring> ?actor;
        <http://dbpedia.org/ontology/cinematography> ?cameraman;
         <http://dbpedia.org/ontology/editing> ?editor;
        <http://dbpedia.org/ontology/gross>?gross;
        <http://dbpedia.org/ontology/releaseDate> ?release_date.

        FILTER(?release_date >"2000-01-01"^^xsd:date && ?release_date<"2022-01-01"^^xsd:date)

        FILTER(lang(?name)="en")
        }
        ORDER BY DESC (?release_date)
        LIMIT 100`,
    };

    url.search = new URLSearchParams(params).toString();

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/sparql-results+json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => displayResult(result))
        .catch((error) => displayError(error));
}

function displayError(error) {
    console.log(error);
}

function displayResult(data) {
    data.results.bindings.forEach((bs) => {
        console.log(bs);
    });
}
testQuery();
// const listener = app.listen(process.env.PORT || 3000, () => {
//     console.log("Your app is listening on port " + listener.address().port);
// });
