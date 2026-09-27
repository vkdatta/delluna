export const name="traffic-cone-bold";
export const id="dl_57a31d70d7e546490c0e";
export const url=new URL("../icons/traffic-cone-bold.svg?v=13eaabdccc3402fe9fcad9d00e84ab5bceb1bf92f36827756fa198d2f8cee9e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
