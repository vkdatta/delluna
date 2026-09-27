export const name="angle-bold";
export const id="dl_294acdf52cd548adb002";
export const url=new URL("../icons/angle-bold.svg?v=771e7ebc630398db3ba1884f73f2a142821e47cf038b69d68405c3066bea2287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
