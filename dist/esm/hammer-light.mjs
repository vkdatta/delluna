export const name="hammer-light";
export const id="dl_d34d9d4e52a14b99aa73";
export const url=new URL("../icons/hammer-light.svg?v=87bb4a4811b5200f5d637a5518ce8e041ae6b7beb3f79a67087d49e62da47565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
