import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Viewnews = () => {
    const [newsData, xnewsData] = useState(
        {"status":"ok","totalResults":34,"articles":[]}
    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (res) => {
                xnewsData(res.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div className='bg-primary-subtle p-4 rounded'>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1 align="center">The Daily NEWS</h1>
                            {newsData.articles.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                                            <div class="card mb-3" >
                                                <div class="row g-0">
                                                    <div class="col-md-4">
                                                        <img src={value.urlToImage} class="img-fluid rounded-start" alt="..."></img>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="card-body">
                                                            <h5 class="card-title">{value.title}</h5>
                                                            <h6 class="card-subtitle mb-2 text-body-secondary">{value.name} <b>Author:</b>{value.author}</h6>
                                                            <p class="card-text">{value.description}</p>
                                                            <p class="card-text">{value.content}</p>
                                                            <p class="card-text"><small class="text-body-secondary">Published: {value.publishedAt}</small></p>
                                                            <a href={value.url} className="card-link">{value.url}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>






                                        </div>
                                    )
                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewnews