export const name="lucid_3-spool";
export const id="dl_7cd7dac745604f5caab4";
export const url=new URL("../icons/lucid_3-spool.svg?v=a54d06b91a8e07c6142ee6f4bb12894bbe4eccdfc4ad1269bd40e13051f9912b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
