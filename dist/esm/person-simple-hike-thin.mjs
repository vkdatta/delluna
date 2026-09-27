export const name="person-simple-hike-thin";
export const id="dl_046ea123dfe24621bd49";
export const url=new URL("../icons/person-simple-hike-thin.svg?v=26215b451f048611f66dfea93e56ed0b984fac93aeef0b35f84e1a7fc518090b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
