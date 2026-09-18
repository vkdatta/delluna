export const name="salinity-fill";
export const id="dl_25399e2592d6471daffa";
export const url=new URL("../icons/S/salinity-fill.svg?v=8dd1724c6b607a9b4c0e1777440d13a4bac77b164cd39bba72ecf9766118e821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
