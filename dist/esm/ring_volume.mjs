export const name="ring_volume";
export const id="dl_4dc1a314e93348259869";
export const url=new URL("../icons/ring_volume.svg?v=4d73b8341473b13654b85d31d278bc693692bd82385658ca8cae7e7d4e1158ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
