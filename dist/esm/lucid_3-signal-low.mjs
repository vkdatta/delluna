export const name="lucid_3-signal-low";
export const id="dl_cd00ea04d5bc4f39b6a7";
export const url=new URL("../icons/lucid_3-signal-low.svg?v=a6420805acce9735225514bde4059fdf7d8c2ea3dfe108052580dc90fe64e207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
