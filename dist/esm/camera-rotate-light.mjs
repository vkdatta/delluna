export const name="camera-rotate-light";
export const id="dl_1b9c886d4e3d4d96b072";
export const url=new URL("../icons/camera-rotate-light.svg?v=d3d8a2dcb326282b6107b8ce5fac5cdb6ae2e1185738e6211351b1f54527af69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
