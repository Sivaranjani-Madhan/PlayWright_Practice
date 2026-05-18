import {test,expect} from '@playwright/test';

const searchData= [
    {keyword : 'mobile'},
{keyword : 'wireless mouse'},];

searchData.forEach(({keyword})=>{
    test(`search test for ${keyword}`, async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill(keyword);


})
});