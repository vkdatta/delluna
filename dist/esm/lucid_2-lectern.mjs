export const name="lucid_2-lectern";
export const id="dl_7fc2b5b79c0140919812";
export const url=new URL("../icons/lucid_2-lectern.svg?v=e7e50e451571c98f73e7927a13c529dfbdc9223f50c42835b60511b608e8eaa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
