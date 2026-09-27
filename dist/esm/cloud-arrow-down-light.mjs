export const name="cloud-arrow-down-light";
export const id="dl_7d3eb078e5454a7ea355";
export const url=new URL("../icons/cloud-arrow-down-light.svg?v=13882fbfeec7c623c753f888a8690885f0d4814182e9d227f469084f8e421af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
