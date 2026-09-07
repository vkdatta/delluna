export const name="hammer-light";
export const id="dl_d34d9d4e52a14b99aa73";
export const url=new URL("../icons/hammer-light.svg?v=4c01ef14762d46d9331682c676ea12ed2b7acd06acdd58a0b2447254c46323a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
