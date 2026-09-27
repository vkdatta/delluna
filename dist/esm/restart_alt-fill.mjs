export const name="restart_alt-fill";
export const id="dl_c62d8c7fa2a2c9695592";
export const url=new URL("../icons/restart_alt-fill.svg?v=0880b0d96abc48f89ff8c0164e8da1263cec3f8c4190904131c0fc2916b6e0e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
