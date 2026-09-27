export const name="shield-bold";
export const id="dl_e83440aa60492992d1fb";
export const url=new URL("../icons/shield-bold.svg?v=53c310ede5f8fb3c16269a2522849efff96e933010848a5d3fd6b534a3df00c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
