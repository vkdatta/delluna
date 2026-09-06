export const name="device-mobile-slash-bold";
export const id="dl_a12e9ae7005b45f3b45f";
export const url=new URL("../icons/device-mobile-slash-bold.svg?v=585d3c44b0ff4c8288c9a930f847a8be5aa5916bce726a2f3a0b3b305a70e3d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
