export const name="arrow-line-down-bold";
export const id="dl_343d4b5df0534ee0a1a4";
export const url=new URL("../icons/arrow-line-down-bold.svg?v=8266f6cdb79e43919953157457349a0284cb0a1b160925e013eba03c7e291740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
