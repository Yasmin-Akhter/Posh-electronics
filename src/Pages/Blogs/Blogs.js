import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border border-2 mt-5'>
                <h1>Difference between SQL and NoSQL</h1>
                <div className='d-flex justify-content-evenly'>
                    <div>
                        <h3>SQL</h3>
                        <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                        <p>Vertically Scalable</p>
                        <p>Suitable for hierarchical data storage</p>
                        <p>data storage structure is table typed.</p>
                        <p>It can handle complex queries</p>
                    </div>
                    <div>
                        <h3>NoSQL</h3>
                        <p>Non-relational or distributed database system.</p>
                        <p>Horizontally Scalable</p>
                        <p>Not Suitable for hierarchical data storage</p>
                        <p>data storage structure is object typed.</p>
                        <p>It can't handle complex queries smoothly</p>

                    </div>
                </div>
            </div>
            <div className='border border-2 mt-5'>
                <h1>Difference between JavaScript and Node.js</h1>
                <div className='d-flex justify-content-evenly'>
                    <div>
                        <h3>Node.js</h3>
                        <p>NodeJS is a Javascript runtime environment.</p>
                        <p>We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p>It is mostly used on the server-side.</p>
                        <p>Nodejs does not have capability to add HTML tags.</p>
                        <p>Nodejs is used in server-side development</p>
                    </div>
                    <div>
                        <h3>JavaScript</h3>
                        <p>Javascript is a programming language that is used for writing scripts on the website</p>
                        <p>Javascript can only be run in the browsers</p>
                        <p>It is basically used on the client-side.</p>
                        <p>Javascript is capable enough to add HTML and play with the DOM. </p>

                    </div>
                </div>
            </div>



        </div >
    );
};

export default Blogs;