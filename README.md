
<div id="top"></div>

<div align="center">

<img src="https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fspider-thread.svg&fill=%2378716C&width=200px&height=200px" style="width:200px;"/>

<h3 align="center">Scraper for LatestVersions</h3>

<p align="center">
    CI-Pipeline Powered website scrapers for the latestversions project.
</p>    
</div>

##  1. <a name='TableofContents'></a>Table of Contents

* 1. [Table of Contents](#TableofContents)
* 2. [About The Project](#AboutTheProject)
	* 2.1. [Built With](#BuiltWith)
	* 2.2. [Installation](#Installation)
* 3. [Usage](#Usage)
	* 3.1. [Github Repo](#GithubRepo)
	* 3.2. [X-Ray](#X-Ray)
* 4. [Customising](#Customising)
* 5. [Contributing](#Contributing)
* 6. [License](#License)
* 7. [Contact](#Contact)


##  2. <a name='AboutTheProject'></a>About The Project

The latestversions project [https://latest-versions.netlify.app/](https://latest-versions.netlify.app/) has a number of scrapers that go to specific sites and pull the version number of specific software. 

This repo does that action and pushes the data into a faunaDB database, ready for the Gatsby website (built on netlify) to consume that data.

The Github actions that generate small JSON files with the latest version number of that piece of software in it.
Includes:

- Latest Release or Version number
- Link to the latest release
- Updated date.

These then populate the FaunaDB.

<p align="right">(<a href="#top">back to top</a>)</p>



###  2.1. <a name='BuiltWith'></a>Built With

* [FaunaDB](https://fauna.com/)
* [Gatsby](https://www.gatsbyjs.com/)
* [Netlify](https://www.netlify.com/)
* [Github Actions](https://github.com/features/actions)

<p align="right">(<a href="#top">back to top</a>)</p>



###  2.2. <a name='Installation'></a>Installation

Not built to be installed. This is pulled from the deployment repository and used via the CI pipeline.

<p align="right">(<a href="#top">back to top</a>)</p>

##  3. <a name='Usage'></a>Usage

Methods of extraction:

###  3.1. <a name='GithubRepo'></a>Github Repo 
Uses github actions to get the release number of a github repository

###  3.2. <a name='X-Ray'></a>X-Ray 
Web scrape using node.js library x-ray
- https://github.com/matthewmueller/x-ray
- https://www.npmjs.com/package/x-ray


##  4. <a name='Customising'></a>Customising

Add more CI jobs.

<p align="right">(<a href="#top">back to top</a>)</p>


##  5. <a name='Contributing'></a>Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



##  6. <a name='License'></a>License

Distributed under the MIT License.

MIT License

Copyright (c) 2022 Andy Pearson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right">(<a href="#top">back to top</a>)</p>



##  7. <a name='Contact'></a>Contact

Author Link: [https://github.com/IORoot](https://github.com/IORoot)

<p align="right">(<a href="#top">back to top</a>)</p>
