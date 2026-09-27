export const name="fire_check-fill";
export const id="dl_6de98281b5735a34df93";
export const url=new URL("../icons/fire_check-fill.svg?v=62e0b13fd5e8e2a2d0f114a09af2e95938978bfe423f1599b6a937fbe0ad9b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
