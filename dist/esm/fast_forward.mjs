export const name="fast_forward";
export const id="dl_ff65c5614f8f82948d03";
export const url=new URL("../icons/fast_forward.svg?v=d9eb4a04a3f314a510af600422d3ee3594cfa125ad0e07a7976f217c50efb793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
