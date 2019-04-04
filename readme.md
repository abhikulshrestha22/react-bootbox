# React Bootbox

A bootbox tailored for react.js. 
This package helps to build the bootbox component for react.js using bootstrap & react-bootstrap.

# Installation

Install bootstrap with this package.
    `npm i bootstrap react-bootbox --save`
Include the bootstrap css in the index.js
`import 'bootstrap/dist/css/bootstrap.css';`

# Usage
```javascript
<BootBox 
    message="Do you want to Continue?"
    show={this.state.show} 
    onYesClick = {this.showAlert}
    onNoClick = {this.handleClose}
    onClose = {this.handleClose}/>
 ```
 
# Contribute
I welcome any kind of contributions/requests/questions/general feedback. Please Open an Issue Or a pull request.