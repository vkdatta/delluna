export const name="select";
export const id="dl_bc6d1613c25f1ed5cd4c";
export const url=new URL("../icons/select.svg?v=57abb9ff5749718b378903bba464789b636d56c475dd1528f452b74515671602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
