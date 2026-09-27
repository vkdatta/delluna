export const name="device-tablet-camera-light";
export const id="dl_16ac3c1127c14b4699dc";
export const url=new URL("../icons/device-tablet-camera-light.svg?v=692184cc09dd5a508d5d696e5537e99396fec04fc3d0401cdf807eaf0b1e6b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
