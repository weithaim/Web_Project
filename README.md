# Web_Project

Submitted by:
* Yuval Tsanani Levi 311502710
* Haim Weitman 204690614

### Prerequisites:
1. The project runs on javascript so please make sure you have 'nodejs' installed.
2. Please install the following packages using 'npm install' (you shouldn't install them manually one by one, 'npm install' with no arguments will install all dependencies from package.json):
	1. express
	2. body-parser
	3. mocha
	4. chai
	5. chai-http
3. Please make sure you have 'docker' and 'docker-compose' are installed on your machine.

### Instructions:
1. Calculator Function implemented in 'calc.js'.
2. Tests:
	1. Unit Test implemented on 'test/testCalc'.
	2. Integration Test implemented on 'test/it.js'.
3. Runing tests using 'npm test'.
4. Web Server:
	1. Implemented on server.js, please run it by using 'node server.js' (or 'npm start').
	2. Please communicate with the server using the following example: curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' -d '{"calculatorState": null, "input": "1"}'
5. Docker:
	1. DockerFile is present on the main root.
	2. Image: create an image using 'docker build -t currency-calculator .'
	3. Container: run it by 'docker run -p 3000:3000 currency-calculator'
	4. Please communicate with the server using the following example: curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' -d '{"calculatorState": null, "input": "1"}'
6. Docker-compose: 
	1. The 'docker-compose.yml' file located on the main root.
	2. Please run: 'docker-compose up'.
