export const name="action_key";
export const id="dl_fcabc3a8f67c466b3535";
export const url=new URL("../icons/action_key.svg?v=c92e639f44fc2c61c93ac85d98b1d03719b1a7e1485e2a812c27e0155d7a6af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
