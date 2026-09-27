export const name="hamburger-bold";
export const id="dl_9b19cb9e2e6145f9860e";
export const url=new URL("../icons/hamburger-bold.svg?v=d53f0e0f292e99d5f1474b8b1b2daaa5591710b288cc08ae2d3a33d868dbc524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
