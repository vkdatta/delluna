export const name="thermometer-simple-bold";
export const id="dl_b926cf326d7edd205f11";
export const url=new URL("../icons/thermometer-simple-bold.svg?v=72bbc461795cb9fb80fc737faabea1c848b0f2e9fbdd07cc33e63723d0338023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
