export const name="traffic";
export const id="dl_6b1aa1a6576c1e293506";
export const url=new URL("../icons/traffic.svg?v=425bd2df2dc0e18f5bd5a6741c0c0c5f7a387b558838c417d0af456a6f359d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
