export const name="23mp";
export const id="dl_d65f4b574e657c454b15";
export const url=new URL("../icons/23mp.svg?v=18150587cd676fc2a824c2f343b94dba5b1927f44edfb859c1ed68b40c996af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
