export const name="plugs-connected";
export const id="dl_541b01d930b1400a97de";
export const url=new URL("../icons/plugs-connected.svg?v=f7d11c5f4d4a05d372062eb96608a2f3b8d4d647da0d27b9630e3c4c8f8f241c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
