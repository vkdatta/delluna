export const name="pi-fill";
export const id="dl_d4544f5aa7784fedb9f8";
export const url=new URL("../icons/pi-fill.svg?v=b9266397fe6a9655b550d4c41f4035ce8635a6d2fc39ec672fbb3d913939f3c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
