export const name="caret-circle-down-thin";
export const id="dl_599b3186471f4192aba0";
export const url=new URL("../icons/caret-circle-down-thin.svg?v=307de0f140ee362d33a6bcb76a3ecee9424c919113c3f449c32e9d00d0bc33b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
