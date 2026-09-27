export const name="counter_0-fill";
export const id="dl_b0392f8377660184affe";
export const url=new URL("../icons/counter_0-fill.svg?v=855b2a9dec39e9cc5c81d988492e4806b2c63df5c690ab5111e8340414f7cf79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
