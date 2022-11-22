// import { Headers, bag } from "fetch-headers";
const newTry = async (req, res, next) => {
    // const SparqlClient = require("sparql-http-client");
    // const Headers = require("fetch-headers");
    // const client = new SparqlClient({ endpointUrl: "http://dbpedia.org/sparql" });
    // const stream = await client.query.construct(`
    // select distinct ?Concept where {[] a ?Concept} LIMIT 100
    // `);

    // stream.on("data", (quad) => {
    //     console.log(`${quad.subject.value} ${quad.predicate.value} ${quad.object.value}`);
    // });
    // const { Client } = require("virtuoso-sparql-client");

    // const DbPediaClient = new Client("http://dbpedia.org/sparql");
    // DbPediaClient.query(
    //     `
    // SELECT ?name ?director ?cameraman ?editor ?gross ?release_date
    // WHERE {
    // ?uri rdf:type <http://dbpedia.org/ontology/Film>.
    // ?uri rdfs:label ?name;
    // <http://dbpedia.org/ontology/director> ?director;
    // <http://dbpedia.org/ontology/starring> ?actor;
    // <http://dbpedia.org/ontology/cinematography> ?cameraman;
    //  <http://dbpedia.org/ontology/editing> ?editor;
    // <http://dbpedia.org/ontology/gross>?gross;
    // <http://dbpedia.org/ontology/releaseDate> ?release_date.

    // FILTER(?release_date >"2000-01-01"^^xsd:date && ?release_date<"2022-01-01"^^xsd:date)

    // FILTER(lang(?name)="en")
    // }
    // ORDER BY DESC (?release_date)
    // LIMIT 3
    // `
    // )
    //     .then((results) => {
    //         console.log(results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // function testQuery(){
    var url = new URL("https://dbpedia.org/sparql");
    var params = {
        query: `PREFIX dbo: <http://dbpedia.org/ontology/> 
    PREFIX foaf: <http://xmlns.com/foaf/0.1/> 
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    
    SELECT ?country ?city ?city_name
    WHERE {
        ?city rdf:type dbo:City ;
              foaf:name ?city_name ;
              dbo:country ?country .
    
        ?country foaf:name \"Canada\"@en .
    
        FILTER(langMatches(lang(?city_name), \"en\"))
    }
    ORDER BY ?city_name
    LIMIT 100`,
    };

    url.search = new URLSearchParams(params).toString();

    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/sparql-results+json");
    var requestOptions = {
        method: "GET",
        // headers: myHeaders,
        redirect: "follow",
    };

    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => displayResult(result))
        .catch((error) => displayError(error));
    function displayError(error) {
        console.log(error);
    }

    function displayResult(data) {
        data.results.bindings.forEach((bs) => {
            console.log(bs);
            $("body").append(JSON.stringify(bs) + "<hr/>");
        });
    }
};
module.exports = { newTry };
