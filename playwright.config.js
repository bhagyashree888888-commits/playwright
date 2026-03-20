// @ts-check
import { defineConfig, devices, firefox } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: 'html',//after test execution it will generate html report in the root folder
  use: {
    browserName: 'chromium',//browser name can be chromiun, firefox, webkit
    headless: false, //to open the browser in headed mode
    trace: 'on-first-retry',
    Timeout: 10000,//global timeout for all test
    EXPECT: {
      timeout: 5000  //timeout for expect assertion 
    }   
  }
// @ts-ignore
});
//alternate way to write config file
//const config = ({
//key value pair
//})
//module.exports = config;  

