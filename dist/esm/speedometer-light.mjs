export const name="speedometer-light";
export const id="dl_cafc18bd935b47c00cf9";
export const url=new URL("../icons/speedometer-light.svg?v=b3445e1442f12cd83d3da51f264a1030b4fbd65ae41db924ae72304e4aaf239b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
