import React from 'react';
import "./QuestionsPage.css";


function QuestionsPage(props)
{

    //code here

    const sampleJson =[{id:"1",Title:"Teslas made in Texas will likely have to leave the state before Texans can buy them", description:"Tesla will be building some of its cars in Texas, but those cars will have to go out of their way to make it to an actual Texan. This is because of a law that requires orders to be processed outside of the state, which seemingly won’t be changed anytime soon.",like:false,url: "https://www.theverge.com/2021/5/30/22457455/tesla-texas-factory-law-ship-out-of-state-direct-sale-legislation"},
    {id:"2",Title:"Why Cryptomining Is Bad for the Environment, And How It Could Get Better", description:"Recently, Tesla announced it would accept Bitcoin payments only to cancel that plan just over a month later. The company said, “Cryptocurrency is a good idea … but this cannot come at great cost to the environment.” Why is cryptocurrency bad for the environme…",like:false,url: "https://www.reviewgeek.com/85029/why-cryptomining-is-bad-for-the-environment-and-how-it-could-get-better/"}];

   console.log(props.apiResponse);
    return(
        <div className="Card-Wrapper">
            {sampleJson.sort((a,b)=>{return a.id - b.id}).map((key,idx)=>
             <a  className="link" href={key?.url} target="_blank" rel="noopener noreferrer">
            <div className="card">
        <h3 className="title">{key.Title+"  "+ props.apiResponse}</h3>
        <p className="description">{key.description}</p>
      </div>
      </a>
            )}
        </div>
    )
}

export default QuestionsPage;