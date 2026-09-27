export const name="dropdown-fill";
export const id="dl_b7edf1e9291aaf1a5b84";
export const url=new URL("../icons/dropdown-fill.svg?v=be5977b52af2c030c59d67d3a6a54271542226f6fd6c5beee302cd5f5da5f04a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
