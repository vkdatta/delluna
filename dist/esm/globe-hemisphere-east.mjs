export const name="globe-hemisphere-east";
export const id="dl_84087174e9a84fda83b3";
export const url=new URL("../icons/globe-hemisphere-east.svg?v=ba522656ac1a77b9215776695569f67f18bcdd41ece0d0763b99819b647fe571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
