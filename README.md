# text-edit

J.A.T.E

just another text editor


## Table of Content
[Description](#description)
[Installation](#installation)    
[Usage](#usage)
[Screenshot](#screenshot)
[Deployed Site](#deployed-site)
[Demo](#demo)
[Contact](#contact)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

This project is a text editor that understands javascript code and highlights it properly using a color scheme when typed. 
The application will save the text content from the editor when a user clicks off of the page. On reload the content is retrieved 
via IndexedDb. It includes the use of webpack for bundling neccesary assets, and service worker to improve page load through caching.
As well this editor uses code mirror, a useful and versitile javascript component that can edit plain text or code. This web app
features a manifest with specific metadata referring to the files in this application, it is a requirement for this app to  be installable.
In fact this application does also include an install button on the top left of the screen which will allow for offline access. 

## Installation

No installation is required, simply visit the deployed website to use the project. 

Deployed Website: [J.A.T.E](https://text-editor0393.herokuapp.com/)

If you chose to start the server locally initially type "npm run install" to install the client side and server side dependencies 
together. Afterwards, use "npm run" followed by the script of your choice. (Found in package.json "scripts")

### Usage

Type the javascript code of your choice into the editor. When you click off of the screen, or the editor loses focus, 
the content will be stored in the database. On a refresh or revist to the screen, you will find the same content is
stored. There is an install button on the top left of the screen, and at the end of the address bar which will 
install the web application. This will allow you to have offline access and use the app without a browser. 

### Screenshot

![Capture](https://user-images.githubusercontent.com/66131189/206308992-a209d562-5a04-44d8-8773-859e0216cc0d.JPG)

### Deployed Site 

[J.A.T.E](https://text-editor0393.herokuapp.com/)

#### Contact

See my repositories at [Github Profile](https://github.com/rjewell859)

Email me with additional questions at headwallforest27@gmail.com
