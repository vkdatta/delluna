export const name="network-slash";
export const id="dl_03e07d0ff81e4044be86";
export const url=new URL("../icons/network-slash.svg?v=24ccf9f7b82b88ec9c9c8c2eb15e63027d1bb62e95bc4a1305e344b41ec8ec18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
