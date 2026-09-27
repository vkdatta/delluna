export const name="square-parking";
export const id="dl_171a3e7863f24ede8f19";
export const url=new URL("../icons/square-parking.svg?v=1a0df12248c01899bb37d3fe02e57e5472a352bce0acd807d3094ea4d7b34c89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
