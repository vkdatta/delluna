export const name="device-tablet-thin";
export const id="dl_a6ddcd08b5e74773a561";
export const url=new URL("../icons/device-tablet-thin.svg?v=bdc3c6cd38074d7d7409e9a28c44270cd5518246f653334981d94a6f3dd24979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
