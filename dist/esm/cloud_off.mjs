export const name="cloud_off";
export const id="dl_007c046e4dfeecb64804";
export const url=new URL("../icons/cloud_off.svg?v=234ca06e3d6c5c1e5a5faa30f85c8cdbf8b0d2c6cce9249c88872015798ae181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
