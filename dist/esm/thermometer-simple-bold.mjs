export const name="thermometer-simple-bold";
export const id="dl_2f4a8d9a94164eb282be";
export const url=new URL("../icons/T/thermometer-simple-bold.svg?v=72bbc461795cb9fb80fc737faabea1c848b0f2e9fbdd07cc33e63723d0338023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
