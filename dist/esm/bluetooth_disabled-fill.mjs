export const name="bluetooth_disabled-fill";
export const id="dl_bde9ae46ac86fe681aed";
export const url=new URL("../icons/bluetooth_disabled-fill.svg?v=b3d5c8b3542a5a43d794335e4ebc52330ea37f184fb8ed7142169023ca61ebbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
