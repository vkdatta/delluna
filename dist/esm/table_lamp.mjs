export const name="table_lamp";
export const id="dl_d4501e49e5c0e2637689";
export const url=new URL("../icons/table_lamp.svg?v=65ad9923361596fcb90fedb23eccdc9cfffe195d059a981f6f1371a12dc90e7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
