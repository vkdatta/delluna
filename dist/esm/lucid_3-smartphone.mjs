export const name="lucid_3-smartphone";
export const id="dl_fddf5fdb7f9b4a028330";
export const url=new URL("../icons/lucid_3-smartphone.svg?v=121c45395f79d90428ace739346261222310b4b1d8838a01743a8d89c5373684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
