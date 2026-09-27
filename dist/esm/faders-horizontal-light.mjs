export const name="faders-horizontal-light";
export const id="dl_c8492a4c1b634c2191d2";
export const url=new URL("../icons/faders-horizontal-light.svg?v=0aafb6c63b5402f9ba61851bdc2133ef1c04831ccff1b1d2394a50367fca3a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
