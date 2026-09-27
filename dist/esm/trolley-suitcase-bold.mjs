export const name="trolley-suitcase-bold";
export const id="dl_ad37cb3f8d40b484f006";
export const url=new URL("../icons/trolley-suitcase-bold.svg?v=bcb8dc1541b500ef66258db59bdfe602ea03406cca2c8c9efc078e55abfe93df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
