import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Content = () => {
    const [jokes, setJokes] = useState([]);

    // const genAI = new GoogleGenerativeAI('AIzaSyCtN6oO7aOf4G4uxtTDTxN0jU9iP19IV2k');

    const handleClick = async (e) => {
        e.preventDefault();
        console.log('clicked')

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
                'x-rapidapi-key': 'dcd46383edmsh408b61653b47ec7p1c9e4cjsn4ffa807611ba'
            }
        };

        try {
            const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', options);
            const data = await response.json();
            console.log(data);
            if (data.success && data.body.length > 0) {
                const joke = data.body[0];
                setJokes(prevJokes => {
                    let newJokes = [...prevJokes, joke];
                    if (newJokes.length > 6) {
                        newJokes = newJokes.slice(1);
                    }
                    return newJokes;
                });
                console.log(joke);

                // Use Gemini to generate an image based on the joke's punchline
                // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                // const result = await model.generateContent(`Generate an image based on this joke: ${joke.punchline}`);
                // const response = await result.response;
                // const image_url = response.text();
                // console.log(image_url)
                // setGenImage(prevImages => [...prevImages, image_url]);
            } else {
                console.log('No joke received or request unsuccessful');
            }
        } catch (err) {
            console.error(err);
        }
    }

    

    return (
        <>
        <div className="main-wrapper">
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">I have a Collection of Jokes</h2>
                    <div className="intro">Click me and see what I can do</div>
                    <div className="pt-3">
                        <form className="d-flex justify-content-center align-items-center" onSubmit={handleClick}>
                            <div>
                                <button type="submit" className="btn btn-primary">Click me</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container single-col-max-width">
                    {jokes.map((joke, index) => (
                        <div key={index} className="item mb-5">
                            <div className="row g-3 g-xl-0">
                                <div className="col-2 col-xl-3">
                                    <img className="img-fluid post-thumb" src={`assets/images/blog/blog-post-thumb-${index + 1}.jpg`} alt={`blog post ${index + 1}`} />
                                </div>
                                <div className="col">
                                    <h3 className="title mb-1">
                                        <Link className="text-link" to={`/blog-post-${index + 1}`}>{joke.setup}</Link>
                                    </h3>
                                    <div className="meta mb-1">
                                        <span className="date">Dad Joke</span>
                                        <span className="time">Quick read</span>
                                        <span className="comment"><Link className="text-link" to={`/blog-post-${index + 1}#comments`}>Laugh out loud</Link></span>
                                    </div>
                                    <div className="intro">{joke.punchline}</div>
                                    <Link className="text-link" to={`/blog-post-${index + 1}`}>Read more &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {jokes.length === 0 && (
                        <div className="text-center">
                            <p>No jokes loaded yet. Click the button to fetch some jokes!</p>
                        </div>
                    )}
                
                    
                </div>
            </section>      
        </div>
        </>
    )
  
}

export default Content
