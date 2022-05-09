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
                        <p>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </p>
                        <p>Nodejs is written in C, C++ and Javascript.</p>
                        <p>Nodejs is written in C, C++ and Javascript.</p>
                    </div>
                    <div>
                        <h3>JavaScript</h3>
                        <p>Javascript is a programming language that is used for writing scripts on the website</p>
                        <p>Javascript can only be run in the browsers</p>
                        <p>It is basically used on the client-side.</p>
                        <p>Javascript is capable enough to add HTML and play with the DOM. </p>
                        <p>Some of the javascript frameworks are RamdaJS, TypedJS, etc</p>
                        <p>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</p>
                        <p>Javascript is used in frontend development.</p>

                    </div>
                </div>
            </div>
            <div className='border border-2 my-5 '>
                <h1>When should you use nodejs and when should you use mongodb</h1>
                <div className='d-flex justify-content-evenly'>
                    <div>
                        <h3>Node.js</h3>
                        <p>Node.js is a js runtime commonly used to server side development written in c,c++ and js.</p>
                        <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...</p>
                    </div>
                    <div>
                        <h3>MongoDB</h3>
                        <p>MongoDb is a database system where we can store our data.We also can read,update,modify our data as our necessity.MariaDB, MySql, CouchDB, Postgres are examples of other databases.</p>
                        <p>When a project needs to store it's data and retrieve data for reuse we can use mongoDb as a database system. </p>
                    </div>
                </div>
                <p>These two technologies are for different parts of a typical web server system. We won't substitute one for the other. Instead, we can use them together</p>

            </div>



        </div >
    );
};

export default Blogs;